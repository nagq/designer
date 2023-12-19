import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { MultiBackend, getBackendOptions, Tree } from "@minoru/react-dnd-treeview";
import { usePrefix } from '@/commom/hooks/usePrefix';

import { ExternalNode } from "./ExternalNode";
import { DragLayer } from "./DragLayer";
import { DragNode } from "./DragNode";
import { DragPreview } from "./DragPreview";
import styles from "./App.module.css";
import externalNodesJson from "./external_nodes.json";
import sampleData from "./sample_data.json";
import { Placeholder } from "./Placeholder";
import WorkspacePanel from '../WorkspacePanel';

import './index.scss';

const App = () => {
  const cls = usePrefix('tree-panel');

  const [tree, setTree] = useState(sampleData);
  const [externalNodes, setExternalNodes] = useState(externalNodesJson);

  const handleDrop = (newTree, options) => {
    setTree(newTree);
  };

  return (
    <WorkspacePanel.Item className={cls}>
      <DndProvider
        backend={MultiBackend}
        options={getBackendOptions()}
        debugMode={true}
      >
        <DragLayer />
        <div className={styles.rootGrid}>
          <div className={styles.externalContainer}>
            <div>
              {externalNodes.map((node) => (
                <ExternalNode key={node.id} node={node} />
              ))}
            </div>
          </div>
          <div>
            <Tree
              rootId={0}
              tree={tree}
              initialOpen
              extraAcceptTypes={["EXTERNAL_NODE"]}
              insertDroppableFirst={false}
              classes={{
                root: styles.treeRoot,
                draggingSource: styles.draggingSource,
                dropTarget: styles.dropTarget,
                placeholder: styles.placeholderContainer,
              }}
              render={(node, options) => <DragNode node={node} {...options} />}
              dragPreviewRender={(monitorProps) => (
                <DragPreview monitorProps={monitorProps} />
              )}
              onDrop={handleDrop}
              sort={false}
              canDrop={(tree, { dragSource, dropTargetId, dropTarget }) => {
                if (dragSource.disable) {
                  return false;
                }
                if (dragSource?.parent === dropTargetId) {
                  return true;
                }
              }}
              placeholderRender={(node, { depth }) => (
                <Placeholder node={node} depth={depth} />
              )}
            />
          </div>
          <div></div>
        </div>
      </DndProvider>
    </WorkspacePanel.Item>
  );
};

export default App;
