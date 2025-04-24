import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const Header = () => {
  // Store just the image URLs
  const images = [assets.sir];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="relative bg-cover bg-center h-[30vh] md:h-[60vh]"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    >
      {/* Optional Overlay */}
      <div className="h-full flex items-center justify-center bg-black bg-opacity-50">
        {/* You can add text or buttons here */}
      </div>
    </div>
  );
};

export default Header;
