import React from "react";
import { TypeIcon } from "./TypeIcon";
import { usePrefix } from '@/commom/hooks/usePrefix';

export const DragNode = (props) => {
  const cls = usePrefix('tree-panel-drag-node');
  const { droppable } = props.node;
  const indent = props.depth * 24;

  const handleToggle = (e) => {
    e.stopPropagation();
    props.onToggle(props.node.id);
  };

  return (
    <div
      className={`tree-node ${cls}`}
      style={{ paddingInlineStart: indent }}
    >
      <div
        className={`expand-icon-wrapper ${
          props.isOpen ? 'is-open' : ''
        }`}
      >
        {props.node.droppable && (
          <div onClick={handleToggle}>
            [+]
          </div>
        )}
      </div>
      <TypeIcon droppable={droppable || false} />
      <div className="label">
        {props.node.text}
      </div>
    </div>
  );
};
