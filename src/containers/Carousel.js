import React, { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Carousel1 from '../CarouselImages/Carousel1.jpg';
import Carousel2 from '../CarouselImages/Carousel2.jpg';
import Carousel3 from '../CarouselImages/Carousel3.jpg';

const data = [Carousel1, Carousel2, Carousel3];

const CarouselTab = () => {
  const [index, setIndex] = useState(0);
  const [val, setVal] = useState(0);
  const length = 3;
  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % length);
    }, 2500);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [length]);

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <div className="carousel">
      <Link to={`/fashion`}>
        <img
          src={data[index]}
          alt="mens"
          style={{
            position: 'relative',
            height: '100%',
            width: '100%',
            transition: 'transform 2.5s ease-in-out', // Add transition effect
            // translate:`${-100*index}%`,
            transform:`${-100*index}%`
          }}
        ></img>
      </Link>
    </div>
  );
};

export default CarouselTab;
