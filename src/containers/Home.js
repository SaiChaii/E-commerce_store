import { Link } from "react-router-dom/cjs/react-router-dom.min";
import CarouselTab from "./Carousel";
import Exclusives from "./Exclusives";

const Home = () => {
  const itemCategoryStyle = { width: 100, height: 100, borderRadius: "5px" };
  const titleStyle = {
    fontSize: "16px",
    fontFamily: "Lora,sans-serif",
    marginTop: "6px",
    fontWeight: "bold",
  };

  const ImageContent = ({ src, alt, title, link }) => (
    <div className="image-content">
      <Link to={link}>
        <img style={itemCategoryStyle} className="" src={src} alt={alt} />
      </Link>
      <div className="titles" style={titleStyle}>
        {title}
      </div>
    </div>
  );

  const categories = [
    {
      src: "https://img.icons8.com/?size=100&id=enZOTH5kGrxd&format=png&color=000000",
      alt: "groceries-img",
      title: "Groceries",
      link: "/groceries",
    },
    {
      src: "https://img.icons8.com/?size=100&id=U1DbmZzsp9bC&format=png&color=000000",
      alt: "fashion-img",
      title: "Fashion",
      link: "/fashion",
    },
    {
      src: "https://img.icons8.com/?size=100&id=Xw6mO0RPsly9&format=png&color=000000",
      alt: "electronics-img",
      title: "Electronics",
      link: "/electronics",
    },
    {
      src: "https://img.icons8.com/?size=100&id=XHTBEjS9Wx14&format=png&color=000000",
      alt: "mobiles-img",
      title: "Mobiles",
      link: "/mobiles",
    },
    {
      src: "https://img.icons8.com/?size=100&id=aXVUU8HwqMNi&format=png&color=000000",
      alt: "homeappliances-img",
      title: "Appliances",
      link: "/appliances",
    },
  ];

  return (
    <div className="d-flex flex-column align-items-center gap-1">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Lora,sans-serif",
          fontSize: "10px",
          marginTop: "6px",
          backgroundColor: "black",
          color: "white",
          width: "100%",
        }}
      >
        Click on these for curated products{" "}
      </div>
      <div
        className="all-content p-4"
        style={{ height: "auto", backgroundColor: "burlywood" }}
      >
        {categories.map((category) => (
          <ImageContent
            key={category.src}
            src={category.src}
            alt={category.alt}
            title={category.title}
            link={category.link}
          />
        ))}
      </div>
      <div
        className="my-2"
        style={{ fontSize: "40px", fontFamily: "Trebuchet MS" }}
      >
        Find your own Style in Chai-Commerce Fashions
      </div>
      <CarouselTab />
      <div className="d-flex flex-column align-items-center gap-3">
        <div
          className="my-4"
          style={{ fontSize: "40px", fontFamily: "Trebuchet MS" }}
        >
          Checkout these Exclusive Offers only on Chai-Commerce !!
        </div>
        <Exclusives />
      </div>
    </div>
  );
};

export default Home;
