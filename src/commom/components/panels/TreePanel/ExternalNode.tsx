import React, { useEffect } from "react";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import { usePrefix } from '@/commom/hooks/usePrefix';

interface ExternalNodeProps {
  node: any;
}

export const ExternalNode: React.FC<ExternalNodeProps> = (props) => {
  const cls = usePrefix('drag-tree-external-node');
  const [, drag, dragPreview] = useDrag({
    type: "EXTERNAL_NODE",
    item() {
      const data = {
        ...props.node,
        id: Math.random(),
      };
      return data;
    },
  });

  useEffect(() => {
    dragPreview(getEmptyImage(), { captureDraggingState: true });
  }, [dragPreview]);

  return (
    <div ref={drag} className={cls}>
      <div className="label">
        {props.node.text}
      </div>
    </div>
  );
};

ExternalNode.displayName = 'ExternalNodeProps';
