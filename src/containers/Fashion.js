import { Link } from 'react-router-dom/cjs/react-router-dom';

const Fashion = () => {
  const fashion = () => {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)', // Create 2 columns with equal width
          gap: '100px',
          height: '700px',
          width: '1900px',
          position: 'relative',
          left: '60px',
        }}
      >
        {
          <>
            <div
              style={{
                height: '580px',
                width: '350px',
                position: 'relative',
                left: '130px',
                top: '100px',
                backgroundColor: '#e6813e',
                borderRadius: '5px',
              }}
            >
              {
                <Link to={'/mens'}>
                  <div
                    style={{
                      height: '530px',
                      width: '300px',
                      position: 'relative',
                      left: '25px',
                      top: '20px',
                      backgroundColor: '#fcf56a',
                      borderRadius: '2px',
                    }}
                  >
                    {
                      <div style={{backgroundColor:"#fcf56a"}}>
                        <img
                          src="https://daman.co.id/_next/image?url=https%3A%2F%2Fbackend.daman.co.id%2Fwp-content%2Fuploads%2F2019%2F08%2Fbrad1.jpg&w=828&q=75"
                          style={{ height: '450px', width: '300px' }}
                        />
                        <h2 style={{color:"black"}}>MENS FASHION</h2>
                      </div>
                    }
                  </div>
                </Link>
              }
            </div>
            <div
              style={{
                height: '580px',
                width: '350px',
                position: 'relative',
                left: '130px',
                top: '100px',
                backgroundColor: '#e6813e',
                borderRadius: '5px',
              }}
            >
              {
                <Link to="/women">
                  <div
                    style={{
                      height: '530px',
                      width: '300px',
                      position: 'relative',
                      left: '25px',
                      top: '20px',
                      backgroundColor: '#fcf56a',
                    }}
                  >
                    {
                      <div style={{backgroundColor: '#fcf56a',}}>
                        <img
                          src="https://ekaya.in/cdn/shop/products/89128528d879b42ca16357ea3cfcbefa-xxlarge_3d1a05d3-e1e7-4159-a3f4-bcfe993b8206.jpg?v=1705564819&width=713"
                          style={{ height: '450px', width: '300px' }}
                        />
                        <h2 style={{color:"black"}}>WOMEN FASHION</h2>
                      </div>
                    }
                  </div>
                </Link>
              }
            </div>
            <div
              style={{
                height: '580px',
                width: '350px',
                position: 'relative',
                left: '130px',
                top: '100px',
                backgroundColor: '#e6813e',
                borderRadius: '5px',
              }}
            >
              {
                <Link to="/kids">
                  <div
                    style={{
                      height: '530px',
                      width: '300px',
                      position: 'relative',
                      left: '25px',
                      top: '20px',
                      backgroundColor: '#fcf56a',
                    }}
                  >
                    {
                      <div style={{backgroundColor: '#fcf56a',}}>
                        <img
                          src="https://www.shutterstock.com/shutterstock/photos/2206444923/display_1500/stock-photo-happy-indian-kids-dancing-together-wearing-traditional-or-ethnic-cloths-isolated-on-studio-2206444923.jpg"
                          style={{ height: '450px', width: '300px' }}
                        />
                        <h2 style={{color:"black"}}>KIDS FASHION</h2>
                      </div>
                    }
                  </div>
                </Link>
              }
            </div>
          </>
        }
      </div>
    );
  };
  return <>{fashion()}</>;
};

export default Fashion;
