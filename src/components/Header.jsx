import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const images = [
  assets.background_img,
  assets.background_img,
  assets.background_img,
];

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative bg-cover bg-center h-[30vh] md:h-[60vh]"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    >
      <div className="h-full flex items-center justify-center bg-black bg-opacity-50">
        {/* Optional content */}
      </div>
    </div>
  );
};

export default Header;
