import React, { useRef } from "react";
import TextGradient from "./TextGradient";
import HorizontalScroll from "./HorizontalScroll";
import ParallaxContainer from "./ParallaxContainer";
const Animation = () => {
  return (
    <div className="w-full flex flex-col">
      {/* <TextGradient/> */}
      <HorizontalScroll />
      {/* <ParallaxContainer/> */}
    </div>
  );
};

export default Animation;
