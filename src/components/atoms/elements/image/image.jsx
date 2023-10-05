import React from "react";
import "./image.style.css";

function Image({ src, alt, width, height, className }) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}

export default Image;
