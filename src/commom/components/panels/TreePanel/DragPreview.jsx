import React from "react";
import { usePrefix } from '@/commom/hooks/usePrefix';
import { TypeIcon } from "./TypeIcon";

export const DragPreview = (props) => {
  const cls = usePrefix('drag-preview');
  const item = props.monitorProps.item;

  return (
    <div className={cls}>
      <div className="icon">
        <TypeIcon droppable={item?.droppable || false} />
      </div>
      <div className="label">{item?.text}</div>
    </div>
  );
};
