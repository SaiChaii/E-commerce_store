import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel1 from "../CarouselImages/Carousel1.jpg";
import Carousel2 from "../CarouselImages/Carousel2.jpg";
import Carousel3 from "../CarouselImages/Carousel3.jpg";

const originalData = [Carousel1, Carousel2, Carousel3];
// 1. Add the first image to the end to create a seamless loop
const data = [...originalData, Carousel1];

const CarouselTab = () => {
  const [index, setIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const length = originalData.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
      setTransitionEnabled(true);
    }, 3000);

    return () => clearInterval(timer);
  }, [length]);

  // 2. The "Teleport" Logic
  useEffect(() => {
    if (index === length) {
      // Wait for the transition to the 'clone' to finish (matches the 1s transition)
      const timeout = setTimeout(() => {
        setTransitionEnabled(false); // Disable animation
        setIndex(0); // Snap back to the real first image instantly
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [index, length]);

  return (
    <div style={{ width: "100%", overflow: "hidden", background: "#eee" }}>
      <Link to="/fashion">
        <div
          style={{
            display: "flex",
            width: "60%",
            // 3. Toggle transition on/off based on state
            transition: transitionEnabled ? "transform 1s ease-in-out" : "none",
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {data.map((imgSrc, i) => (
            <img
              key={i}
              src={imgSrc}
              alt="carousel"
              style={{
                width: "100%",
                flexShrink: 0, // Keeps images from squeezing
                display: "block",
              }}
            />
          ))}
        </div>
      </Link>
    </div>
  );
};

export default CarouselTab;
