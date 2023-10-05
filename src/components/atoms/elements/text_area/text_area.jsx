import React from "react";
import "./text_area.style.css";

function TextArea(id, field, className) {
  return (
    <textarea id={id} {...field} className={className} />
  );
}

export default TextArea;
