"use client";
import React, { useEffect } from "react";
import { BiCheck, BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { apartmentDataList } from "../../../data/apartmentData";
import RoomCard from "../../common/RoomCard";
import { getAllRooms } from "@/features/room/roomReducer";
import Loader from "@/components/home/loader";
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
      className="w-full min-h-[47vh] py-32 relative flex items-center justify-center
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
  const dispatch = useDispatch();
  const { rooms, getallRoomisLoading } = useSelector((store) => store.room);

  useEffect(() => {
    dispatch(getAllRooms());
  }, []);
  return (
    <div
      className="w-full relative py-24 flex items-center justify-center
   gap-8"
    >
      <div
        className="w-[90%] relative mx-auto max-w-custom_1 z-40 grid lg:grid-cols-1 items-start lg:justify-center flex-col
       gap-12"
      >
        {/* <div className="w-[90%] lg:sticky top-[11%] flex flex-col gap-8">
          <div className="w-full py-12 flex items-center justify-center lg:w-[400px] bg-[#1C1C1C]">
            <div className="w-[90%] mx-auto grid grid-cols-2 gap-4">
              <div className="py-8 cursor-pointer bg-[#151515] flex items-center justify-center flex-col gap-4">
                <span className="uppercase text-sm text-white">CHECK-IN</span>
                <div className="flex items-center gap-2">
                  <span
                    style={{ letterSpacing: "4px" }}
                    className="text-4xl text-[var(--gold-1)] pt-3 md:text-6xl block font-booking_font4 uppercase leading-[1.5] text-center text-dark"
                  >
                    19
                  </span>
                  <span
                    style={{ letterSpacing: "4px" }}
                    className="text-[8px] text-[var(--gold-1)] md:text-xs uppercase leading-[1.5] flex flex-col text-dark font-normal"
                  >
                    JUN
                    <BiChevronDown fontSize={"24px"} />
                  </span>
                </div>
              </div>
              <div className="py-8 cursor-pointer bg-[#151515] flex items-center justify-center flex-col gap-4">
                <span className="uppercase text-sm text-white">CHECK-Out</span>
                <div className="flex items-center gap-2">
                  <span
                    style={{ letterSpacing: "4px" }}
                    className="text-4xl text-[var(--gold-1)] pt-3 md:text-6xl block font-booking_font4 uppercase leading-[1.5] text-center text-dark"
                  >
                    19
                  </span>
                  <span
                    style={{ letterSpacing: "4px" }}
                    className="text-[8px] text-[var(--gold-1)] md:text-xs uppercase leading-[1.5] flex flex-col text-dark font-normal"
                  >
                    JUN
                    <BiChevronDown fontSize={"24px"} />
                  </span>
                </div>
              </div>
              <div className="py-8 cursor-pointer bg-[#151515] flex items-center justify-center flex-col gap-4">
                <span className="uppercase text-sm text-white">GUEsTS</span>
                <div className="flex items-center gap-2">
                  <span
                    style={{ letterSpacing: "4px" }}
                    className="text-4xl text-[var(--gold-1)] pt-3 md:text-6xl block font-booking_font4 uppercase leading-[1.5] text-center text-dark"
                  >
                    19
                  </span>
                  <span
                    style={{ letterSpacing: "4px" }}
                    className="text-[8px] text-[var(--gold-1)] md:text-xs uppercase leading-[1.5] flex flex-col text-dark font-normal"
                  >
                    <BiChevronDown fontSize={"24px"} />
                    <BiChevronUp fontSize={"24px"} />
                  </span>
                </div>
              </div>
              <div className="py-8 cursor-pointer bg-[#151515] flex items-center justify-center flex-col gap-4">
                <span className="uppercase text-sm text-white">Nights</span>
                <div className="flex items-center gap-2">
                  <span
                    style={{ letterSpacing: "4px" }}
                    className="text-4xl text-[var(--gold-1)] pt-3 md:text-6xl block font-booking_font4 uppercase leading-[1.5] text-center text-dark"
                  >
                    19
                  </span>
                  <span
                    style={{ letterSpacing: "4px" }}
                    className="text-[8px] text-[var(--gold-1)] md:text-xs uppercase leading-[1.5] flex flex-col text-dark font-normal"
                  >
                    <BiChevronDown fontSize={"24px"} />
                    <BiChevronUp fontSize={"24px"} />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="py-8 border-t border-b px-4 w-full text-xl">
            <div className="flex items-center justify-between w-full">
              <h4 className="font-booking_font4">Maximum Price:</h4>
              <h4 className="font-booking_font4">₦100,000</h4>
            </div>
          </div>
        </div> */}
        {/* <div className="w-full">
          {getallRoomisLoading ? (
            <Loader />
          ) : (
            <div className=" gap-8 w-full grid md:grid-cols-2">
              {rooms?.map((apartment, index) => {
                return (
                  <RoomCard type={"Search"} key={index} apartment={apartment} />
                );
              })}
            </div>
          )}
        </div> */}
        {getallRoomisLoading ? (
          <Loader />
        ) : (
          <div className=" gap-8 w-full grid md:grid-cols-3">
            {rooms?.map((apartment, index) => {
              return (
                <RoomCard type={"Search"} key={index} apartment={apartment} />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContent;
