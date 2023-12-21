import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { MultiBackend, getBackendOptions, Tree } from "@minoru/react-dnd-treeview";
import { usePrefix } from '@/commom/hooks/usePrefix';

import { ExternalNode } from "./ExternalNode";
import { DragLayer } from "./DragLayer";
import { DragNode } from "./DragNode";
import { DragPreview } from "./DragPreview";
import externalNodesJson from "./external_nodes.json";
import sampleData from "./sample_data.json";
import { Placeholder } from "./Placeholder";

import './index.scss';

const App = () => {
  const cls = usePrefix('tree-panel');
  const treeCls = usePrefix('drag-tree');

  const [tree, setTree] = useState(sampleData);
  // @ts-ignore
  const [externalNodes, setExternalNodes] = useState(externalNodesJson);

  const handleDrop = (newTree, options) => {
    setTree(newTree);
  };

  return (
    <div className={cls}>
      <DndProvider
        backend={MultiBackend}
        options={getBackendOptions()}
        debugMode={true}
      >
        <DragLayer />
        <div className={`${treeCls}-main`}>
          <div className={`${treeCls}-header`}>组件树</div>
          <div className={`${treeCls}-content`}>
            <Tree
              rootId={0}
              tree={tree}
              initialOpen
              extraAcceptTypes={["EXTERNAL_NODE"]}
              insertDroppableFirst={false}
              classes={{
                root: treeCls,
                draggingSource: `${treeCls}-dragging-source`,
                dropTarget: `${treeCls}-drop-target`,
                placeholder: `${treeCls}-placeholder-container`,
              }}
              render={(node, options) => <DragNode node={node} {...options} />}
              dragPreviewRender={(monitorProps) => (
                <DragPreview monitorProps={monitorProps} />
              )}
              onDrop={handleDrop}
              sort={false}
              canDrop={(tree, { dragSource, dropTargetId, dropTarget }) => {
                // if (dragSource.disable) {
                //   return false;
                // }
                if (dragSource?.parent === dropTargetId) {
                  return true;
                }
              }}
              placeholderRender={(node, { depth }) => (
                <Placeholder depth={depth} />
              )}
            />
          </div>
        </div>
        <div>
          {externalNodes.map((node) => (
            <ExternalNode key={node.id} node={node} />
          ))}
        </div>
      </DndProvider>
    </div>
  );
};

export default App;
