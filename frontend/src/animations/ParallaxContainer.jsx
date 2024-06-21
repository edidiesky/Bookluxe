import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import Card from "./Card";

const projects = [
  {
    title: "Matthias Leidinger",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: "/images/hazel_1.jpeg",
    link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    color: "#BBACAF",
  },
  {
    title: "Clément Chapillon",
    description:
      "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
    src: "/images/hazel_2.jpeg",
    link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    color: "#977F6D",
  },
  {
    title: "Zissou",
    description:
      "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
    src: "/images/hazel_1.jpeg",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#C2491D",
  },
  {
    title: "Mathias Svold and Ulrik Hasemann",
    description:
      "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.",
    src: "/images/hazel_1.jpeg",
    link: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
    color: "#B62429",
  },
  {
    title: "Mark Rammers",
    description:
      "Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote. Titled ‘Beginnings’, the mesmerizing collection of images is a visual and meditative journey into the origins of regrets and the uncertainty of stepping into new unknowns.",
    src: "/images/hazel_1.jpeg",
    link: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/",
    color: "#88A28D",
  },
];
const ParallaxContainer = () => {
      const containerRef = useRef(null);
      const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
      });
    return (
      <div className="w-full flex flex-col">
        <div ref={containerRef} className="w-full">
          <div className="w-[90%] mx-auto max-w-custom_1">
            {projects.map((data, index) => {
              const targetScale = 1 - (projects.length - 1) * 0.05;
              return (
                <Card
                  progress={scrollYProgress}
                  targetScale={targetScale}
                  range={[index * 0.25, 1]}
                  data={data}
                  index={index}
                  key={`p_${index}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
}


export default ParallaxContainer;