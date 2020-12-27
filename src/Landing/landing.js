import React from "react";
import "./landing.scss";
import Button from "../components/button/button";
import NavBar from "../components/navBar/navBar";
import LottieAnimation from "../components/LottieComponent/lottieComponent";
import mowingJson from "./landingsvg/mowing.json";
import forestJson from "./landingsvg/forest.json";

class Landing extends React.Component {
  render() {
    return (
      <>
        <div className="landing__container">
          <NavBar />
          <div className="landing__container-animation">
            <LottieAnimation source={forestJson} looping={false} />
          </div>
        </div>
      </>
    );
  }
}

export default Landing;
