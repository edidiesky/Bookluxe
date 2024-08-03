import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { BiCheck, BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { motion, useInView } from "framer-motion";
import { apartmentDataList } from "../../../data/apartmentData";
import RoomCard from "../../common/RoomCard";
import { getAllRooms } from "@/features/room/roomReducer";
import Loader from "@/components/home/loader";
import { scaleAnimations } from "@/constants/utils/framer";
const MainContent = () => {
  return (
    <div className="w-full relative min-h-[100vh] flex flex-col">
      <Hero />
      <RoomLists />
    </div>
  );
};

const Hero = () => {
  return (
    <div
      className="w-full py-32 relative flex items-center justify-center
   gap-8"
    >
      <div className="max-w-custom_1 flex flex-col gap-8 items-center justify-center mx-auto w-[90%]">
        <h2 className="text-8xl leading-[1.2] text-center font-booking_bold">
          Stay in elegant <br /> Simplicity
        </h2>
        <p className="text-center max-w-[500px] text-grey mx-auto text-base font-semibold">
          With all the luxuries that matter, and none that don't. Our villas are
          surrounded by gardens and decorated in a personal style, that makes
          you feel like staying in the home of a friend, rather than in a
          resort.
        </p>
      </div>
    </div>
  );
};

const RoomLists = () => {
  const [mouseposition, setMousePosition] = useState({
    active: false,
    index: 0,
  });
  const mouseRef = useRef(null);
  const dispatch = useDispatch();
  const { rooms, getallRoomisLoading } = useSelector((store) => store.room);

  useEffect(() => {
    dispatch(getAllRooms());
  }, []);
  useEffect(() => {
    let mouseXMovement = gsap.quickTo(mouseRef.current, "left", {
      duration: 0.7,
      ease: "power3",
    });

    let mouseYMovement = gsap.quickTo(mouseRef.current, "top", {
      duration: 0.7,
      ease: "power3",
    });

    const handleMouseMotion = (e) => {
      const { pageX, pageY } = e;
      // const {} = e.target.getBoundingClientRect();
      // const rect = mouseRef.current?.getBoundingClient()
      mouseXMovement(pageX);
      mouseYMovement(pageY);
    };

    window.addEventListener("mousemove", handleMouseMotion);
    return () => {
      window.removeEventListener("mousemove", handleMouseMotion);
    };
  }, []);
  return (
    <>
      <motion.span
        ref={mouseRef}
        variants={scaleAnimations}
        initial="initial"
        animate={mouseposition?.active ? "enter" : "exit"}
        className="w-[80px] z-[42] absolute h-[80px] font-semibold text-xl rounded-full shadow-2xl hidden lg:flex items-center justify-center text-[12px] text-white font-portfolio_bold bg-[#2e2e30]"
      >
        View
      </motion.span>
      <div
        className="w-full relative py-12 flex items-center justify-center
        gap-8"
      >
        <div
          onMouseEnter={() =>
            setMousePosition({
              active: false,
            })
          }
          className="absolute top-0 w-full h-full z-[36]"
        ></div>
        <div
          className="w-[90%] relative mx-auto max-w-custom_1 z-40 grid lg:grid-cols-1 items-start lg:justify-center flex-col
       gap-12"
        >
          {getallRoomisLoading ? (
            <Loader />
          ) : (
            <div className=" gap-x-8 gap-y-20 w-full grid md:grid-cols-3">
              {rooms?.map((apartment, index) => {
                return (
                  <RoomCard
                    setMousePosition={setMousePosition}
                    type={"Search"}
                    key={index}
                    apartment={apartment}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MainContent;
