import React, { useState, useEffect } from "react";

function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  return (
    <div
      style={{
        width: "500px",
        margin: "20px auto",
        textAlign: "center",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
        }}
      />

      <div style={{ marginTop: "10px" }}>
        <button onClick={prevImage}>Previous</button>
        <button
          onClick={nextImage}
          style={{ marginLeft: "10px" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const imageUrls = [
    "https://picsum.photos/id/1015/600/300",
    "https://picsum.photos/id/1016/600/300",
    "https://picsum.photos/id/1018/600/300",
    "https://picsum.photos/id/1020/600/300",
  ];

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Image Carousel</h2>
      <ImageCarousel images={imageUrls} />
    </div>
  );
}