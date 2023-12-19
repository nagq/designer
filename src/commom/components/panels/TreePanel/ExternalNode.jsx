import React, { useEffect } from "react";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import { TypeIcon } from "./TypeIcon";
import styles from "./ExternalNode.module.css";

export const ExternalNode = (props) => {
  const { droppable } = props.node;
  const [, drag, dragPreview] = useDrag({
    type: "EXTERNAL_NODE",
    item() {
      const data = {
        ...props.node,
        id: Math.random(),
      };
      console.info(data);
      return data;
    },
    end: console.info,
  });

  useEffect(() => {
    dragPreview(getEmptyImage(), { captureDraggingState: true });
  }, [dragPreview]);

  return (
    <div ref={drag} className={styles.root}>
      <div className={styles.filetype}>
        <TypeIcon droppable={droppable || false} />
      </div>
      <div className={styles.label}>
        {props.node.text}
      </div>
    </div>
  );
};
