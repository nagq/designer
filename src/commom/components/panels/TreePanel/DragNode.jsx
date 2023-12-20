import React from "react";
import { CaretRightOutlined, CaretDownOutlined } from '@ant-design/icons'
import { TypeIcon } from "./TypeIcon";
import { usePrefix } from '@/commom/hooks/usePrefix';

export const DragNode = (props) => {
  const cls = usePrefix('drag-node');
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
      <div className="expand-icon-wrapper">
        {props.node.droppable && (
          <div onClick={handleToggle}>
            { props.isOpen ? <CaretRightOutlined /> : <CaretDownOutlined /> }
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
