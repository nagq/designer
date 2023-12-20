'use client';

import { DesignerLayoutContext } from '@/commom/context'
import { WorkspacePanel, ViewPanel, TreePanel } from '@/commom/components/panels'
import './page.scss';

export default function Home() {
  return (
    <DesignerLayoutContext.Provider
      value={{
        prefixCls: 'designer-flow'
      }}
    >
      <WorkspacePanel>
        <TreePanel />
        <ViewPanel iframe="/preview" />
        <WorkspacePanel.Item>测试</WorkspacePanel.Item>
      </WorkspacePanel>
    </DesignerLayoutContext.Provider>
  );
}
