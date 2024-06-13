"use client";
import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { BiCheck, BiChevronDown, BiChevronUp, BiStar } from "react-icons/bi";
import { apartmentDataList } from "../../../data/apartmentData";
import RoomCard from "../../common/RoomCard";
import { FaStar } from "react-icons/fa";
import { RoomFeaturesList } from "../../../data/feature";
const MainContent = () => {
  return (
    <div className="w-full relative min-h-[100vh] flex flex-col">
      <Hero />

      <RoomLists />
      <RecommendedList />
    </div>
  );
};

const Hero = () => {
  return (
    <div
      className="w-full min-h-[50vh] py-32 relative flex items-center justify-center
   gap-8"
    >
      <div className="w-full h-full z-30 bg-[rgba(0,0,0,.6)] absolute top-0 left-0"></div>
      <img
        src="https://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/hotel/wp-content/uploads/sites/2/revslider/parallax-9.jpg"
        alt=""
        className="absolute z-10 object-cover top-0 left-0 h-full w-full"
      />
      <div
        className="w-[90%] mx-auto z-40 flex items-center justify-center flex-col
       gap-4"
      >
        <div className="w-full absolute bottom-0 left-0 z-[35] flex  gap-8 items-center justify-center py-6">
          <div className="flex items-center w-[90%]  max-w-custom_1 lg:flex-row flex-col gap-8 mx-auto justify-between">
            <div className="w-full md:w-[70%] flex  md:flex-row flex-col md:justify-start items-center gap-6 md:gap-8 h-full">
              <span
                style={{ letterSpacing: "4px" }}
                className="text-[9px] md:text-xs font-normal uppercase flex items-center gap-4 font-booking_font"
              >
                <span className="text-white">Description</span>
              </span>
              <span
                style={{ letterSpacing: "4px" }}
                className="text-[9px] md:text-xs font-normal uppercase flex items-center gap-4 font-booking_font"
              >
                <span className="text-white">Around the Room</span>
              </span>
              <span
                style={{ letterSpacing: "4px" }}
                className="text-[9px] md:text-xs font-normal uppercase flex items-center gap-4 font-booking_font"
              >
                <span className="text-white">ROOM SERVICES</span>
              </span>
              <span
                style={{ letterSpacing: "4px" }}
                className="text-[9px] md:text-xs font-normal uppercase flex items-center gap-4 font-booking_font"
              >
                <span className="text-white">SIMILAR ROOMS</span>
              </span>
            </div>
            <div className="flex items-center justify-end">
              <h3 className="text-5xl justify-end gap-2 flex text-white">
                50{" "}
                <div className="flex flex-col">
                  <span className="text-base uppercase">$</span>
                  <span className="text-base uppercase">/ per night</span>
                </div>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RoomLists = () => {
  const room = {
    userid: "66476760ef11a9967074c22c",
    bedroom: 2,
    bathroom: 4,
    city: "London",
    address: "101 London Rad",
    images: [
      "/images/hazel_1.jpeg",
      "/images/hazel_2.jpeg",
      "/images/hazel_3.jpeg",
      "/images/hazel_4.jpeg",
      "/images/hazel_5.jpeg",
      // "/images/hazel_6.jpeg",
      // "/images/hazel_7.jpeg",
      // "/images/hazel_8.jpeg",
      // "/images/hazel_9.jpeg",
      // "/images/hazel_10.jpeg",
      // "/images/hazel_11.jpeg",
    ],
    title: "Hazel",
    description:
      "Family room, nice and spacious with a double and single bed with the fabulous shower room. You won’t want to leave.",
    price: 100,
  };
  const [tabindex, setTabIndex] = useState(0);
  const handleImagePosition = (position) => {
    if (position === "left") {
      setTabIndex(tabindex < 0 ? room?.images?.length - 1 : tabindex - 1);
    }
    if (position === "right") {
      setTabIndex(tabindex >= room?.images?.length ? 0 : tabindex + 1);
    }
  };
  return (
    <div
      className="w-full relative py-24 border-b flex items-center justify-center
   gap-8"
    >
      <div
        className="w-[90%] relative mx-auto max-w-custom_1 z-40 flex flex-col-reverse lg:grid lg:grid-cols-custom items-start justify-center
       gap-12"
      >
        <div className="w-full">
          <div className="flex flex-col gap-6 w-full">
            {/* room title */}
            <h3 className="text-5xl font-booking_font4">
              {room?.title}

              <span className="text-base text-grey font-normal font-booking_font4 flex items-center gap-3">
                Room, London{" "}
                <span className="flex items-center gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
              </span>
            </h3>
            {/* room image */}
            <div className="w-full relative">
              {/* <div className="w-full h-full z-30 bg-[rgba(0,0,0,.5)] absolute top-0 left-0"></div> */}
              <div
                style={{ gridTemplateColumns: "repeat(4, 100%)" }}
                className="w-full h-[460px] overflow-hidden grid"
              >
                {room.images?.map((image, index) => {
                  return (
                    <div
                      style={{
                        transform: `translateX(-${tabindex * 100}%)`,
                        transition: "all .6s ease",
                      }}
                      key={index}
                      className="w-full h-full"
                    >
                      <img
                        key={index}
                        //   alt="Cotion"
                        //   width={0}
                        //   sizes="100vw"
                        //   height={0}
                        //   loading="lazy"
                        //   placeholder="blur"
                        style={{
                          transition:
                            "filter 0.6s cubic-bezier(0.4, 0, 0.2, 1), -webkit-filter 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                        //   blurDataURL={image}
                        src={image}
                        className={`w-full z-10 h-[460px] object-cover hover:grayscale-[1]`}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center gap-3 mt-4 ">
                {/* <div
                  onClick={() => handleImagePosition("left")}
                  className="w-12 h-[100px] text-lg bg-[#00000013] hover:bg-[#00000072] hover:scale-[1.09] cursor-pointer text-white flex items-center justify-center z-[40]"
                >
                  <BiChevronLeft fontSize={"30px"} />
                </div> */}
                <div className="grid md:w-[400px] grid-cols-4 items-center gap-2">
                  {room.images.slice(0, 4).map((image, index) => {
                    return (
                      <div
                        onClick={() => setTabIndex(index)}
                        key={index}
                        className="relative h-[100px]"
                      >
                        <img
                          style={{
                            transition:
                              "filter 0.2s cubic-bezier(0.4, 0, 0.2, 1), -webkit-filter 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                          }}
                          src={image}
                          alt=""
                          className={`${
                            tabindex === index
                              ? "grayscale-[1] border-4 border-[rgba(0,0,0,1)]"
                              : "grayscale-[0] border-0"
                          } h-full cursor-pointer w-full hover:grayscale-[1] grayscale-0`}
                        />
                      </div>
                    );
                  })}
                </div>
                {/* <div
                  onClick={() => handleImagePosition("right")}
                  className="w-12 h-[100px] text-lg bg-[#00000013] hover:bg-[#00000072] hover:scale-[1.09] cursor-pointer text-white flex items-center justify-center z-[40]"
                >
                  <BiChevronRight fontSize={"30px"} />
                </div> */}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 items-center mt-4 py-4 gap-8">
              <div className="flex flex-col gap-1 text-xs font-light text-grey">
                <img
                  src="https://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/hotel/wp-content/plugins/nd-booking/templates/icon-bed-grey.svg"
                  alt=""
                  className="w-12"
                />
                56 $ / PER NIGHT
              </div>
              <div className="flex flex-col gap-2 text-sm font-light text-grey">
                <img
                  src="https://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/hotel/wp-content/plugins/nd-booking/templates/icon-user-grey.svg"
                  alt=""
                  className="w-10"
                />
                4 GUESTS
              </div>

              <div className="flex flex-col gap-2 uppercase text-sm font-light text-grey">
                <img
                  src="https://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/hotel/wp-content/uploads/sites/2/2022/04/television.png"
                  alt=""
                  className="w-10"
                />
                Television
              </div>

              <div className="flex flex-col uppercase gap-1 text-sm font-light text-grey">
                <img
                  src="https://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/hotel/wp-content/uploads/sites/2/2022/04/private-bathroom.png"
                  alt=""
                  className="w-12"
                />
                Bathroom
              </div>
            </div>

            {/* room description */}
            <div className="w-full py-12 mt-3  border-t border-b flex flex-col gap-6">
              <h4 className="text-base leading-[1.8] font-booking_font font-normal">
                1 Free single kayak or Standup Paddleboard, or 50% off a double
                kayak for 2 hours. Or take 15% off all rental e-bikes,
                paddleboards, or kayaks for your entire family.
              </h4>
              <h4 className="text-base leading-[1.8] font-booking_font font-normal">
                BEST LOCATION! Located in central Big Bear where you are no more
                than 3.5 miles from EVERY fun activity that Big Bear has to
                offer. This cabin is adorable with an incredible forest feel, a
                fenced yard, and a patio with a gas firepit!
              </h4>
              <div className="flex flex-col">
                <h4 className="text-base leading-[1.8] font-booking_font font-normal">
                  LOCATION: 0.7 Miles to the VILLAGE (3 Minute drive, 13 Minute
                  walk) <br /> 0.8 Miles to the LAKE (4 Minute Drive, 16 Minute
                  Walk) <br /> 1.3 Miles to SNOW SUMMET SLOPES (8 Minute Drive){" "}
                  <br /> 2.0 Miles to VONS (6 Minute Drive) <br /> 2.8 Miles to
                  the ALPINE ZOO (6 Minute Drive)
                  <br /> 3.4 Miles to BEAR MOUNTAIN SLOPES (9 Minute Drive)
                </h4>
              </div>
              <h4 className="text-base leading-[1.8] font-booking_font font-normal">
                SLEEPS 3 People - 1 Bedroom, 1 Bathroom. 600 sq ft. - 1 Cars
                MAXIMUM!
              </h4>
              <h4 className="text-xl font-booking_font_normal font-normal"></h4>
            </div>
            {/* room services */}
            <div className="w-full flex flex-col gap-12 border-b py-8 pb-24">
              <h3 className="text-3xl font-booking_font4">
                Room Services
                <span className="block pt-3 text-sm">
                  Enjoy the comforts of home and beyond with these distinctive
                  features.
                </span>
              </h3>
              <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8">
                {RoomFeaturesList.map((x, index) => {
                  return (
                    <div
                      key={index}
                      className="flex text-sm md:text-base gap-4 font-light items-center text-grey font-booking_font5"
                    >
                      {x?.icon}
                      <span className="w-full"> {x.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* room images */}
            <div className="w-full py-12 flex flex-col gap-4">
              <h3 className="text-3xl font-booking_font4">
                Room Photos
                <span className="block pt-3 text-sm">
                  Enjoy the comforts of home and beyond with these distinctive
                  features.
                </span>
              </h3>
              <div className="w-full py-4 grid grid-cols-2 md:grid-cols-3 gap-6">
                {room?.images?.slice(0, 6).map((image, index) => {
                  return (
                    <img
                      key={index}
                      src={image}
                      alt="room"
                      className="h-[200px] w-full md:h-[300px] object-cover"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[95%] lg:sticky top-[10%] flex flex-col gap-8">
          <div className="w-full py-8 flex flex-col items-center gap-4 justify-center md:w-[400px] bg-[#1C1C1C]">
            <div className="w-[90%] mx-auto grid grid-cols-2 gap-4">
              <div className="py-8 cursor-pointer bg-[#151515] flex items-center justify-center flex-col gap-4">
                <span className="uppercase text-sm text-white">CHECK-IN</span>
                <div className="flex items-center gap-2">
                  <span
                    style={{ letterSpacing: "4px" }}
                    className="text-xl text-[var(--gold-1)] pt-3 md:text-4xl block font-booking_font4 uppercase leading-[1.5] text-center text-dark"
                  >
                    19
                  </span>
                  <span
                    style={{ letterSpacing: "4px" }}
                    className="text-[8px] text-[var(--gold-1)] uppercase leading-[1.5] flex flex-col text-dark font-normal"
                  >
                    JUN
                    <BiChevronDown fontSize={"24px"} />
                  </span>
                </div>
              </div>
              <div className="py-8 cursor-pointer bg-[#151515] flex items-center justify-center flex-col gap-4">
                <span className="uppercase text-xs text-white">CHECK-Out</span>
                <div className="flex items-center gap-2">
                  <span
                    style={{ letterSpacing: "4px" }}
                    className="text-xl text-[var(--gold-1)] pt-3 md:text-4xl block font-booking_font4 uppercase leading-[1.5] text-center text-dark"
                  >
                    19
                  </span>
                  <span
                    style={{ letterSpacing: "4px" }}
                    className="text-[8px] text-[var(--gold-1)] uppercase leading-[1.5] flex flex-col text-dark font-normal"
                  >
                    JUN
                    <BiChevronDown fontSize={"16px"} />
                  </span>
                </div>
              </div>
              <div className="py-8 cursor-pointer bg-[#151515] flex items-center justify-center flex-col gap-4">
                <span className="uppercase text-xs text-white">GUEsTS</span>
                <div className="flex items-center gap-2">
                  <span
                    style={{ letterSpacing: "4px" }}
                    className="text-xl text-[var(--gold-1)] pt-3 md:text-4xl block font-booking_font4 uppercase leading-[1.5] text-center text-dark"
                  >
                    19
                  </span>
                  <span
                    style={{ letterSpacing: "4px" }}
                    className="text-[8px] text-[var(--gold-1)] uppercase leading-[1.5] flex flex-col text-dark font-normal"
                  >
                    <BiChevronDown fontSize={"16px"} />
                    <BiChevronUp fontSize={"16px"} />
                  </span>
                </div>
              </div>
              <div className="py-8 cursor-pointer bg-[#151515] flex items-center justify-center flex-col gap-4">
                <span className="uppercase text-xs text-white">Nights</span>
                <div className="flex items-center gap-2">
                  <span
                    style={{ letterSpacing: "4px" }}
                    className="text-xl text-[var(--gold-1)] pt-3 md:text-4xl block font-booking_font4 uppercase leading-[1.5] text-center text-dark"
                  >
                    19
                  </span>
                  <span
                    style={{ letterSpacing: "4px" }}
                    className="text-[8px] text-[var(--gold-1)] uppercase leading-[1.5] flex flex-col text-dark font-normal"
                  >
                    <BiChevronDown fontSize={"16px"} />
                    <BiChevronUp fontSize={"16px"} />
                  </span>
                </div>
              </div>
            </div>
            <div className="w-[90%] p-4 mx-auto flex flex-col gap-4">
              <div className="w-full flex flex-col gap-2">
                {/* price */}
                <div className="w-full text-base font-light font-booking_font4 text-[var(--gold-1)] flex items-center justify-between">
                  <span className="text-white">{room?.price} x 1 nights</span>
                  <span>
                    {room?.price * 2} <span className="text-base">USD</span>
                  </span>
                </div>
                {/* taxes */}
                <div className="w-full text-base font-light font-booking_font4 text-[var(--gold-1)] flex items-center justify-between">
                  <span className="text-white">Fees and taxess</span>
                  <span>
                    {room?.price * 2 * 0.1} <span className="text-lg">USD</span>
                  </span>
                </div>
                {/* total */}
                <div className="w-full text-base font-light font-booking_font4 text-[var(--gold-1)] flex items-center justify-between">
                  <span className="text-white">Total</span>
                  <span>
                    {100} <span className="text-lg">USD</span>
                  </span>
                </div>
              </div>
              {/* summary */}
              <div
                className="w-full text-xl font-normal text-white font-booking_font4
                    flex items-center justify-between"
              >
                <span>You Pay</span>
                <span className="text-[var(--gold-1)] ">
                  {100} <span className="text-base">USD</span>
                </span>
              </div>
              <div
                style={{ letterSpacing: "4px" }}
                className="btn text-center text-sm uppercase text-white py-6 px-8 w-full"
              >
                Book Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RecommendedList = () => {
  return (
    <div className="w-full py-8 mt-8 flex flex-col gap-8">
      <div className="w-[90%]  max-w-custom mx-auto flex flex-col gap-12">
        <h3 className="text-4xl md:text-5xl font-booking_font4">
          Similar Rooms
          <span className="block pt-3 text-sm">
            Enjoy the comforts of home and beyond with these distinctive
            features.
          </span>
        </h3>

        <div className="w-full gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {apartmentDataList?.slice(0, 3).map((apartment, index) => {
            return (
              <RoomCard type={"Search"} apartment={apartment} key={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
