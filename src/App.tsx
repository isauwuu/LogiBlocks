import Canvas from './components/Canvas';
import CodeViewer from './components/CodeViewer';
import Console from './components/Console';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import Toolbox from './components/Toolbox';

export default function App() {
    return (
        <div>
            <Toolbox />
            <LeftPanel />
            <Canvas />
            <RightPanel />
            <Console />
            <CodeViewer code=""/>
        </div>
    );
}