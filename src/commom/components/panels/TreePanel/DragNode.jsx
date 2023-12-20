import React, { useEffect } from "react";
import { CaretRightOutlined, CaretDownOutlined } from '@ant-design/icons'
import { TypeIcon } from "./TypeIcon";
import { usePrefix } from '@/commom/hooks/usePrefix';

export const DragNode = (props) => {
  const { node, depth, isOpen, onToggle } = props;
  const { droppable, alwaysOpen } = node;

  const cls = usePrefix('drag-node');
  const indent = depth * 24;

  const handleToggle = (e) => {
    e.stopPropagation();
    onToggle(node.id);
  };

  useEffect(() => {
    if (alwaysOpen && !isOpen) {
      onToggle(true);
    }
  }, [alwaysOpen, isOpen, onToggle])

  return (
    <div
      className={`tree-node ${cls}`}
      style={{ paddingInlineStart: indent }}
    >
      <div className="expand-icon-wrapper">
        {node.droppable && !alwaysOpen && (
          <div onClick={handleToggle}>
            { isOpen ? <CaretDownOutlined /> : <CaretRightOutlined /> }
          </div>
        )}
      </div>
      <TypeIcon droppable={droppable || false} />
      <div className="label">
        {node.text}
      </div>
    </div>
  );
};
