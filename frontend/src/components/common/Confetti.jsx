import React from 'react';
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
const Confettis = () => {
      const { width, height } = useWindowSize();
      return <Confetti style={{zIndex:"3000000"}} width={width} height={height} />;

}


export default Confettis;