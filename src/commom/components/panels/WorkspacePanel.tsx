import React from 'react';
import classnames from 'classnames';
import { usePrefix } from '@/commom/hooks/usePrefix';

export interface IWorkspaceItemProps extends React.PropsWithChildren {
  style?: React.CSSProperties
  className?: string;
  flexable?: boolean
}

const WorkspacePanel: React.FC<React.PropsWithChildren<{}>> & {
  Item: React.FC<IWorkspaceItemProps>
} = ({ children }) => {
  const cls = usePrefix('workspace');

  return (
    <div className={cls}>
      { children }
    </div>
  );
};

const Item:  React.FC<IWorkspaceItemProps> = (props) => {
  const { flexable = true, style, children } = props;
  const prefix = usePrefix('workspace-panel-item')

  return (
    <div
      className={classnames(prefix, props.className)}
      style={{
        flexGrow: flexable ? 1 : 0,
        flexShrink: flexable ? 1 : 0,
        ...style,
      }}
    >
      {children}
    </div>
  )
};

WorkspacePanel.Item = Item;
WorkspacePanel.displayName = 'WorkspacePanel';
WorkspacePanel.Item.displayName = 'WorkspacePanel.Item';

export default WorkspacePanel;
