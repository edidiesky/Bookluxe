import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
const Word = ({ children }) => {
  const words = children?.split("");
  const text_1_ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: text_1_ref,
    offset: ["start .7", "start .25"],
  });
  return (
    <span ref={text_1_ref}>
      {words.map((word, index) => {
        const start = index / words?.length;
        const end = start + 1 / words?.length;
        const opacityonScroll = useTransform(
          scrollYProgress,
          [start, end],
          [0, 1]
        );
        return (
          <span key={index} className="relative w-full">
            <span className="absolute w-full left-0 right-0 opacity-[.1]">
              {word}
            </span>
            <motion.span style={{ opacity: opacityonScroll }} className="">
              {word}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
};

export default Word;
