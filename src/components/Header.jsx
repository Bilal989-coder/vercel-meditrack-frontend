import React, { useState, useEffect } from "react";

const Header = () => {
  const images = [
    "src/assets/sir.jpg", // Replace with actual image paths
    "src/assets/sir.jpg",
    "src/assets/sir.jpg",
  ];
  // State to track the current background image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Use useEffect to change the image index at a regular interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="relative bg-cover bg-center h-[30vh] md:h-[60vh]"
      style={{
        backgroundImage: `url('${images[currentImageIndex]}')`,
      }}
    >

      {/* Overlay for better text readability */}
      <div className="h-full flex items-center justify-center bg-black bg-opacity-50">
      </div>
    </div>
  );
};

export default Header