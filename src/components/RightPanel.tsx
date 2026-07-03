import CodeViewer from './CodeViewer';
import Console from './Console';

export default function RightPanel() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ flex: 1, borderBottom: '1px solid #333' }}>
        <CodeViewer code="#include <stdio.h>" />
      </div>
      <div style={{ flex: 1 }}>
        <Console />
      </div>
    </div>
  );
}