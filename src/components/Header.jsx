import React, { useState, useEffect } from "react";
import sir1 from "src/assets/sir.jpg";
import sir2 from "src/assets/sir.jpg";
import sir3 from "src/assets/sir.jpg";

const Header = () => {
  const images = [sir1, sir2, sir3];
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
