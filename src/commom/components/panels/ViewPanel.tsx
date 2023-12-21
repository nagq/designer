import React from 'react';
import { usePrefix } from '@/commom/hooks/usePrefix';
import WorkspacePanel from './WorkspacePanel';

const MobileIframeViewPanel: React.FC<{
  iframe: string;
}> = (props) => {
  const { iframe } = props;
  const cls = usePrefix('view-panel');
  const iframeRef = React.useRef<HTMLIFrameElement>();

  return (
    <WorkspacePanel.Item className={cls} style={{ flex: 2 }}>
      <iframe
        id="view-panel"
        style={{
          width: 375,
          height: '80vh',
          margin: 15,
          border: 0,
        }}
        ref={iframeRef}
        src={iframe}>
      </iframe>
    </WorkspacePanel.Item>
  );
};

MobileIframeViewPanel.displayName = 'ViewPanel';

export default MobileIframeViewPanel;
