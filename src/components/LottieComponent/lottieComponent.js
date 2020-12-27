import React from "react";
import Lottie from "react-lottie-player";

const LottieAnimation = ({ source, looping }) => {
  return (
    <Lottie
      loop={looping}
      animationData={source}
      play
      style={{ width: "100%", height: "100%" }}
      rendererSettings={{ preserveAspectRatio: "none" }}
    />
  );
};

export default LottieAnimation;
