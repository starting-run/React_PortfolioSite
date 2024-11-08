import React, { useState } from "react";
import "./ImageZoom.css";

const ImageZoom = ({ src, alt, width, height, className }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClick = () => {
    setIsZoomed(true);
  };

  const handleCloseClick = () => {
    setIsZoomed(false);
  };

  return (
    <>
      {/* 기본 상태의 이미지 */}
      <img
        src={src}
        alt={alt}
        onClick={handleImageClick}
        className={`image-thumbnail ${className || ""}`}
        style={{
          width: width || "auto",
          height: height || "auto",
        }}
      />

      {/* 확대된 이미지와 배경 흐림 처리 */}
      {isZoomed && (
        <div className="image-zoom-overlay fade-in" onClick={handleCloseClick}>
          <img src={src} alt={alt} className="image-zoomed fade-in" />
          <button className="image-zoom-close-btn" onClick={handleCloseClick}>
            ✕
          </button>
        </div>
      )}
    </>
  );
};

export default ImageZoom;
