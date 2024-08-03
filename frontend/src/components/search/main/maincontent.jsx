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
    <div className="w-full relative gap-8 min-h-[100vh] pb-24 flex flex-col">
      <Hero />
      <RoomLists />
      <Banner />
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
        <h2 className="text-8xl lg:text-9xl leading-[.89] text-center family2">
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
      mouseXMovement(pageX );
      mouseYMovement(pageY );
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
        className="w-[80px] z-[42] absolute h-[80px] font-semibold family1 rounded-full shadow-2xl hidden lg:flex items-center justify-center text-[13px] text-white bg-[#2e2e30]"
      >
        View
      </motion.span>
      <div
        className="w-full relative py-12 flex items-center justify-center
        gap-8"
      >
       
        <div
          className="w-[90%] relative mx-auto max-w-custom_1 z-40 grid lg:grid-cols-1 items-start lg:justify-center flex-col
       gap-12"
        >
          {getallRoomisLoading ? (
            <Loader />
          ) : (
            <div className=" gap-x-8 gap-y-20 w-full grid md:grid-cols-2 lg:grid-cols-3">
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

const Banner = () => {
  return (
    <div
      className="w-full relative flex flex-col items-center justify-center
   gap-8"
    >
      <div
        className="w-full min-h-[100vh] py-32 relative flex items-center justify-center
   gap-8"
      >
        {/* <div className="w-full h-full z-30 bg-[rgba(0,0,0,.6)] absolute top-0 left-0"></div> */}
        <img
          src="https://thedamai.codebydennis.com/media/pages/stay/23aa167c14-1703172474/kien-the-damai-223-1440x-q72.webp"
          alt=""
          className="absolute z-10 object-cover top-0 left-0 h-full w-full"
        />
        <div
          className="w-[90%] mx-auto z-40 flex items-center justify-center flex-col
       gap-4"
        ></div>
      </div>
      <div
        className="w-full z-[600] relative flex flex-col items-center justify-center
   gap-8"
      >
        <div className="max-w-[700px] px-4 max-auto flex flex-col gap-16 items-center justify-center">
          <img
            src="https://thedamai.codebydennis.com/media/pages/stay/bbc7af2bcd-1703172473/kien-the-damai-352-cropped-1080x-q72.webp"
            alt=""
            className="w-[300px] -mt-64"
          />
          <div className="w-full flex flex-col gap-8 items-center justify-center mx-auto">
            <h2 className="text-7xl md:text-8xl leading-[.9] text-center family2">
              Discover our harmonious retreat
            </h2>
            <p className="text-center max-w-[500px] text-grey mx-auto text-base font-normal">
              With all the luxuries that matter, and none that don't. Our villas
              are surrounded by gardens and decorated in a personal style, that
              makes you feel like staying in the home of a friend, rather than
              in a resort.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
