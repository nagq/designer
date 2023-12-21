import React from "react";
import { usePrefix } from '@/commom/hooks/usePrefix';
import { TypeIcon } from "./TypeIcon";

interface DragPreviewProps {
  monitorProps: {
    item: any,
    clientOffset: {
      x: number;
      y: number;
    },
    isDragging: boolean;
  }
}

export const DragPreview: React.FC<DragPreviewProps> = (props) => {
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

DragPreview.displayName = 'DragPreview';
