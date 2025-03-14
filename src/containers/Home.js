import { Link } from "react-router-dom/cjs/react-router-dom.min";
import CarouselTab from "./Carousel";

const Home = () => {
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
              fontSize: "50px",
              margin: "50px",
            }}
          >
            Click on these for curated products{" "}
          </div>
          <div className="all-content">
            {
              <>
                <div className="image-content">
                  <Link to="/groceries">
                    <img
                      style={{ width: 150, height: 150, borderRadius: "50%" }}
                      className=""
                      src="https://www.shutterstock.com/shutterstock/photos/2431622169/display_1500/stock-vector--d-shopping-paper-bag-with-fresh-products-render-grocery-store-supermarket-food-and-drinks-milk-2431622169.jpg"
                      alt="groceries-img"
                    ></img>
                  </Link>
                  <h1>Groceries</h1>
                </div>
                <div className="image-content">
                  <Link to="/fashion">
                    <img
                      style={{ width: 150, height: 150, borderRadius: "50%" }}
                      className=""
                      src="https://img.freepik.com/free-photo/portrait-smiling-beautiful-girl-her-handsome-boyfriend-laughing_158538-4877.jpg?w=740&t=st=1724922519~exp=1724923119~hmac=c43c134b7412bf07b8c3b0a4c02a0b3ea546d8e226bb02da9009e0670b942055"
                      alt="fashion-img"
                    ></img>
                  </Link>
                  <h1>Fashion</h1>
                </div>
                <div className="image-content">
                  <Link to="/electronics">
                    <img
                      style={{ width: 150, height: 150, borderRadius: "50%" }}
                      className=""
                      src="https://media.istockphoto.com/id/178716575/photo/mobile-devices.jpg?s=1024x1024&w=is&k=20&c=rlU3q33ymn435DCxGZF1WDHL0hX6QCHyTMStsv8_3yc="
                      alt="electronics-img"
                    ></img>
                  </Link>
                  <h1>Electronics</h1>
                </div>
                <div className="image-content">
                  <Link to="/mobiles">
                    <img
                      style={{ width: 150, height: 150, borderRadius: "50%" }}
                      className=""
                      src="https://images.samsung.com/is/image/samsung/assets/in/explore/brand/5-best-android-mobile-phones-2022-in-india/banner-desktop-684x723-080422.jpg?$684_N_JPG$"
                      alt="mobiles-img"
                    ></img>
                  </Link>
                  <h1>Mobiles</h1>
                </div>
                <div className="image-content">
                  <Link to="/appliances">
                    <img
                      style={{ width: 150, height: 150, borderRadius: "50%" }}
                      className=""
                      src="https://media.istockphoto.com/id/1415799772/photo/home-interior-with-vintage-furniture.jpg?s=1024x1024&w=is&k=20&c=n0h3Vpk-pLM7PK_kUu5WxoO4zRUTf6OMZV1dYv9CyRA="
                      alt="homeappliances-img"
                    ></img>
                  </Link>
                  <h1>Appliances</h1>
                </div>
                <div className="image-content">
                  <Link to="/beauty-products">
                    <img
                      style={{ width: 150, height: 150, borderRadius: "50%" }}
                      className=""
                      src="https://media.istockphoto.com/id/1320934166/photo/cosmetic-skin-care-products-on-green-leaves.jpg?s=1024x1024&w=is&k=20&c=H946vAlFymqQNX4bj67wHRX4mthmMwe2Rq-sER5nMXM="
                      alt="beautyproducts-img"
                    ></img>
                  </Link>
                  <h1>Beauty</h1>
                </div>
                <div className="image-content">
                  <Link to="/misc">
                    <img
                      style={{ width: 150, height: 150, borderRadius: "50%" }}
                      className=""
                      src="https://images.squarespace-cdn.com/content/v1/547a3834e4b053a861c4874e/ae4ecac8-eb46-460f-9fd1-0d3f29e87c4b/Sustainably+Chic+%7C+Sustainable+Fashion+Blog+%7C+Best+Sustainable+Mens+Clothing+Brands+.jpg?format=1500w"
                      alt="misc-img"
                    ></img>
                  </Link>
                  <h1>Miscelleneous</h1>
                </div>
              </>
            }
          </div>
          <div
            style={{
              paddingTop: "180px",
              fontFamily: "Lora,sans-serif",
              fontSize: "50px",
            }}
          >
            Check out some Cool offers below!
          </div>
          <CarouselTab />
        </>
      }
    </div>
  );
};

export default Home;
