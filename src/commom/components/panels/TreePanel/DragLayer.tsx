import React from "react";
import { useDragLayer } from "react-dnd";
import { usePrefix } from '@/commom/hooks/usePrefix';
import { DragPreview } from "./DragPreview";

const getItemStyles = (monitorProps): React.CSSProperties => {
  const offset = monitorProps.clientOffset;

  if (!offset) {
    return {};
  }

  const { x, y } = offset;
  const transform = `translate(${x}px, ${y}px)`;

  return {
    pointerEvents: "none",
    transform
  };
};

export const DragLayer = ({ width }) => {
  const cls = usePrefix('drag-layer');

  const monitorProps = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    clientOffset: monitor.getClientOffset(),
    isDragging: monitor.isDragging()
  }));

  const { isDragging, clientOffset } = monitorProps;

  if (!isDragging || !clientOffset) {
    return null;
  }

  return (
    <div className={cls}>
      <div style={getItemStyles(monitorProps)}>
        <DragPreview monitorProps={monitorProps} />
      </div>
    </div>
  );
};
