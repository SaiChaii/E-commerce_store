import { Link } from "react-router-dom/cjs/react-router-dom.min";
import CarouselTab from "./Carousel";

const Home = () => {
  const itemCategoryStyle = { width: 100, height: 100, borderRadius: "5px" };
  const titleStyle = {
    fontSize: "16px",
    fontFamily: "Lora,sans-serif",
    marginTop: "6px",
    fontWeight: "bold",
  };
  return (
    <div>
      {
        <>
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
            }}
          >
            Click on these for curated products{" "}
          </div>
          <div className="all-content">
            {
              <div
                className="all-content px-3"
                style={{
                  height: "167px",
                  backgroundColor: "burlywood",
                  border: "5px",
                }}
              >
                <div className="image-content">
                  <Link to="/groceries">
                    <img
                      style={itemCategoryStyle}
                      className=""
                      src="https://img.icons8.com/?size=100&id=enZOTH5kGrxd&format=png&color=000000"
                      alt="groceries-img"
                    ></img>
                  </Link>
                  <div className="titles" style={titleStyle}>
                    Groceries
                  </div>
                </div>
                <div className="image-content">
                  <Link to="/fashion">
                    <img
                      style={itemCategoryStyle}
                      className=""
                      src="https://img.icons8.com/?size=100&id=U1DbmZzsp9bC&format=png&color=000000"
                      alt="fashion-img"
                    ></img>
                  </Link>
                  <div className="titles" style={titleStyle}>
                    Fashion
                  </div>
                </div>
                <div className="image-content">
                  <Link to="/electronics">
                    <img
                      style={itemCategoryStyle}
                      className=""
                      src="https://img.icons8.com/?size=100&id=Xw6mO0RPsly9&format=png&color=000000"
                      alt="electronics-img"
                    ></img>
                  </Link>
                  <div className="titles" style={titleStyle}>
                    Electronics
                  </div>
                </div>
                <div className="image-content">
                  <Link to="/mobiles">
                    <img
                      style={itemCategoryStyle}
                      className=""
                      src="https://img.icons8.com/?size=100&id=XHTBEjS9Wx14&format=png&color=000000"
                      alt="mobiles-img"
                    ></img>
                  </Link>
                  <div className="titles" style={titleStyle}>
                    Mobiles
                  </div>
                </div>
                <div className="image-content">
                  <Link to="/appliances">
                    <img
                      style={itemCategoryStyle}
                      className=""
                      src="https://img.icons8.com/?size=100&id=aXVUU8HwqMNi&format=png&color=000000"
                      alt="homeappliances-img"
                    ></img>
                  </Link>
                  <div className="titles" style={titleStyle}>
                    Appliances
                  </div>
                </div>
              </div>
            }
          </div>
          <CarouselTab />
        </>
      }
    </div>
  );
};

export default Home;
