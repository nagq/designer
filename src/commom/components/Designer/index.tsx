import React from 'react';
import { DesignerLayoutContext } from '@/commom/context'
import { WorkspacePanel, ViewPanel, TreePanel } from '@/commom/components/panels'

const Designer: React.FC<{}> = () => {
  return (
    <DesignerLayoutContext.Provider
      value={{
        prefixCls: 'designer-flow'
      }}
    >
      <WorkspacePanel>
        <TreePanel />
        {/* <ViewPanel iframe="/preview" /> */}
        {/* <WorkspacePanel.Item>测试</WorkspacePanel.Item> */}
      </WorkspacePanel>
    </DesignerLayoutContext.Provider>
  );
};

export default Designer;
