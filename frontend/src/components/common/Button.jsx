import React from "react";
import Magnetic from "@/animations/Magnetic";

const Button = ({ text, bgColor, color, type }) => {
  if (type === "dark") {
    return (
      <button
        style={{ transition: "all .6s", borderRadius: "inherit" }}
        className={`w-full border border-[rgba(0,0,0,.4)] 
              text-dark h-full family1 hover:text-[#fff] text-[ #000] text-light`}
      >
        <Magnetic bgColor={bgColor}> {text}</Magnetic>
      </button>
    );
  }

  if (type === "full_dark") {
    return (
      <button
        style={{ transition: "all .6s", borderRadius: "inherit" }}
        className={`w-full bg-[#1C1D20] h-full family1 text-[#fff] text-light`}
      >
        <Magnetic bgColor={bgColor}> {text}</Magnetic>
      </button>
    );
  }

  if (type === "white") {
    return (
      <button
        style={{ transition: "all .6s", background: `#fff` }}
        className={`w-[190px]
              text-dark h-full family1 text-light`}
      >
        <Magnetic bgColor={bgColor}> {text}</Magnetic>
      </button>
    );
  }
  return (
    <button
      style={{ transition: "all .6s", borderRadius: "inherit" }}
      className={`w-full bg-[#1C1D20] h-full family1 text-[#fff] text-light`}
    >
      <Magnetic bgColor={bgColor}> {text}</Magnetic>
    </button>
  );
};

export default Button;
