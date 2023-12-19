import React from "react";

export const TypeIcon = (props) => {
  if (props.droppable) {
    return '[+]';
  }

  return '-';
};
