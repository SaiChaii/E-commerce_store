import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const CarouselTab = () => {
  const [index, setIndex] = useState(0);
  const length = 3;
  const data = [
    {
      image:
        'https://www.rollingstone.com/wp-content/uploads/2024/01/Best-Sites-for-Womenswear-15-Gap-1.jpg?w=1581&h=1054&crop=1',
      ccolor: "#f6fa82",
      discount: 40,
      brands: ['zara', 'biba'],
      gender: 'women',
      title:"Popular women Collection",
      caption1: 'Get branded deals upto ',
      caption2: '% off here',
    },
    {
      image:
        'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600',
      ccolor: "#a7d6ce",
      discount: 35,
      brands: ['USPA', 'Tommy Hilfiger'],
      gender: 'mens',
      title:"Largest Men Collection",
      caption1: '',
      caption2: ' % off here on every Men product',
    },
    {
      image:
        'https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto/untitled-11604555003981.jpg',
      ccolor: "#f8d4fc",
      discount: 50,
      brands: ['kb1', 'kb2'],
      gender: 'kids',
      title:"Flashy Kids Wear",
      caption1: 'Get min. of ',
      caption2: '% off on a pusrchase',
    },
  ];
  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  setTimeout(() => {
    setIndex((index + 1) % length);
  }, 2500);

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  const car = useMemo(() => {
    console.log(data[index].ccolor)
    return (
      <div className="carousel">
        <button
          style={{ left: '20px', height: '500px', position: 'absolute' }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <Link to={`/${data[index].gender}`}>
        <div
          style={{
            position: 'absolute',
            width: '1071px',
            height: '500px',
            marginLeft: '90px',
            paddingTop: '100px',
            backgroundColor: data[index].ccolor,
          }}
        >
          {
            <div>
              <h1
                style={{
                  fontSize: '50px',
                  color: 'red',
                }}
              >
                {data[index].title}
              </h1>
              <h2
                style={{
                  paddingTop: '20px',
                  paddingBottom: '20px',
                }}
              >
                {
                    data[index].caption1+data[index].discount+data[index].caption2
                }
              </h2>
              <h1
                style={{
                  paddingTop: '20px',
                  paddingBottom: '20px',
                  fontSize: '45px',
                  color: 'green',
                }}
              >
                Popular brands availaible at discount!
              </h1>
            </div>
          }
        </div>

        <img
          style={{
            position: 'relative',
            left: '548px',
            height: '500px',
            width: '798px',
          }}
          src={data[index].image}
          alt="mens"
        ></img>
        </Link>
        <button
          style={{ right: '20px', height: '500px', position: 'absolute' }}
          onClick={handleNext}
        >
          Next
        </button>
        {/* <p>{index}</p> */}
      </div>
    );
  }, [index]);

  return <>{car}</>;
};

export default CarouselTab;
