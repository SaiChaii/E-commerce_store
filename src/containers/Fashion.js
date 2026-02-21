import { Link } from "react-router-dom/cjs/react-router-dom";
import ProductListing from "./ProductListing";

const Fashion = () => {
  const fashion = () => {
    return (
      <>
        <div
          className="m-3 p-2"
          style={{
            display: "flex",
            gap: "100px",
            justifyContent: "center",
            gridTemplateColumns: "repeat(3, 1fr)", // Create 3 columns with equal width
            position: "relative",
          }}
        >
          {
            <>
              <div
                style={{
                  position: "relative",
                  backgroundColor: "#d1d0cd",
                  borderRadius: "5px",
                  border: "1px solid black",
                }}
              >
                {
                  <Link
                    to={"/mens"}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <div
                      style={{
                        width: "300px",
                      }}
                    >
                      <h3>Men Fashion</h3>
                    </div>
                  </Link>
                }
              </div>
              <div
                style={{
                  position: "relative",
                  backgroundColor: "#d1d0cd",
                  borderRadius: "5px",
                  border: "1px solid black",
                }}
              >
                {
                  <Link
                    to={"/women"}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <div
                      style={{
                        width: "300px",
                      }}
                    >
                      <h3>Women Fashion</h3>
                    </div>
                  </Link>
                }
              </div>
              <div
                style={{
                  position: "relative",
                  backgroundColor: "#d1d0cd",
                  borderRadius: "5px",
                  border: "1px solid black",
                }}
              >
                {
                  <Link
                    to={"/kids"}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <div
                      style={{
                        width: "300px",
                      }}
                    >
                      <h3>Kids Fashion</h3>
                    </div>
                  </Link>
                }
              </div>{" "}
            </>
          }
        </div>
        <hr style={{ border: "1px solid black", width: "100%" }} />
        <>
          <h3 className="m-3 p-2">
            Here are some more Miscellenious products for you to explore. Click
            on the product to view details.
          </h3>
          <ProductListing />
        </>
      </>
    );
  };
  return <>{fashion()}</>;
};

export default Fashion;
