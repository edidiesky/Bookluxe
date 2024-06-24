import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Character from "./Character";
// animattions to staggerText
const TextGradient = () => {
  const text_1_ref = useRef(null);
  const text_2 = useRef(null);
  const text_3 = useRef(null);

    const { scrollYProgress } = useScroll({
      target: text_1_ref,
      offset: ["start .9", "start .25"],
    });
  return (
    <div className="w-full flex flex-col">
      <div className="w-full bg-[#000] h-[100vh] flex items-center justify-center"></div>
      <div className="w-full bg-[#000] h-[100vh] flex items-center justify-center"></div>
      <div className="w-full bg-[#000] h-[50vh] flex items-center justify-center">
        <div className="w-[80%] mx-auto">
          <h2
            ref={text_1_ref}
            className="text-white leading-[1.5] text-4xl font-booking_font4"
          >
            <Character
              children={`Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, ipsum aut perspiciatis cupiditate ab explicabo
            consequatur velit, nesciunt iste itaque sapiente commodi similique
            consectetur pariatur error vitae quidem. Blanditiis, iusto?`}
            />
          </h2>
        </div>
      </div>
      <div className="w-full bg-[#000] h-[50vh] flex items-center justify-center"></div>
      <div className="w-full bg-[#000] h-[100vh] flex items-center justify-center">
        {/* <div className="w-[80%] mx-auto">
          <h2
            ref={text_3}
            className="text-white leading-[1.5] text-4xl font-booking_font4"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, ipsum aut perspiciatis cupiditate ab explicabo
            consequatur velit, nesciunt iste itaque sapiente commodi similique
            consectetur pariatur error vitae quidem. Blanditiis, iusto?
          </h2>
        </div> */}
        <div className="w-[80%] mx-auto">
          <h2
            ref={text_1_ref}
            className="text-white leading-[1.5] text-4xl font-booking_font4"
          >
            <Character
              children={`Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, ipsum aut perspiciatis cupiditate ab explicabo
            consequatur velit, nesciunt iste itaque sapiente commodi similique
            consectetur pariatur error vitae quidem. Blanditiis, iusto?`}
            />
          </h2>
        </div>
      </div>
      <div className="w-full bg-[#000] h-[50vh] flex items-center justify-center"></div>
    </div>
  );
};

export default TextGradient;
