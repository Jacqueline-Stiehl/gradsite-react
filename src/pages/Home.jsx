import '../App.css'

// import { Button } from "@chakra-ui/react";

const Home = () => {

  return (
    <div className="home-container">
      <div className="home-header">
        <h1 className="header-text" style={{ position: "fixed" }}>
          {/* Planting success <br/>
          in the land of 10,000 lakes */}
          </h1>
      </div>
      {/* <div className="img-container"> */}
        {/* <div
          className="img"
          style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: 'cover',
            width: '100%',
            height: '100vh',
          }}
        ></div> */}
      {/* </div> */}
      <div className="home-container">
        <div style={{ position: "fixed" }}>
          {/* <Button
            className='homeButton'
            colorScheme="orange"
            onClick={() => {
              window.open("https://arb.umn.edu/", "_blank");
            }}
            style={buttonStyles}
            size="lg"
          >
            Click for Resources <br />
            from the Minnesota Arboretum!
          </Button> */}
        </div>
      </div>
    </div>
  )
}

export default Home
