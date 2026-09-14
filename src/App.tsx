import { useState } from 'react';
import Toolbox from './components/editor/tolbox/Toolbox';
import LeftPanel from './components/editor/leftPanel/LeftPanel';
import Canvas from './components/editor/canvas/Canvas';
import RightPanel from './components/editor/rightPanel/RightPanel';
import './App.css';

function App() {
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(true);

  return (
    <div className="app-layout">
      <div className="toolbox-row">
        <Toolbox />
      </div>

      <div className="main-row">
        <div className={`left-panel ${leftOpen ? '' : 'collapsed'}`}>
          <LeftPanel />
        </div>

        <div className="canvas-area">
          <button
            className="toggle-btn toggle-left"
            onClick={() => setLeftOpen(!leftOpen)}
          >
            {leftOpen ? '⟨' : '⟩'}
          </button>

          <Canvas />

          <button
            className="toggle-btn toggle-right"
            onClick={() => setRightOpen(!rightOpen)}
          >
            {rightOpen ? '⟩' : '⟨'}
          </button>
        </div>

        <div className={`right-panel ${rightOpen ? '' : 'collapsed'}`}>
          <RightPanel />
        </div>
      </div>
    </div>
  );
}

export default App;