import React, { useEffect } from "react";
import HomeIndex from "../components/home";
import LocomotiveScroll from "locomotive-scroll";

const Home = () => {
  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector("[data-scroll-container]"),
  //     smooth: true,
  //   });
  // }, []);
  return (
    <div>
      <HomeIndex />
    </div>
  );
};

export default Home;
