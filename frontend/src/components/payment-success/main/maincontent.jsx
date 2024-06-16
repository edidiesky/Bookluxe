"use client";
import React, { useState } from "react";
import { BiCheck, BiChevronDown, BiChevronUp } from "react-icons/bi";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useSelector } from "react-redux";
import Confettis from "@/components/common/Confetti";
const MainContent = () => {
  const [showconfetti, setShowConfetti] = useState(true);
  return (
    <>
      {showconfetti && <Confettis />}
      <div className="w-full relative min-h-[100vh] flex flex-col">
        <Hero />
        <RoomLists />
      </div>
    </>
  );
};

const Hero = () => {
  return (
    <div
      className="w-full min-h-[47vh] py-32 relative flex items-center justify-center
   gap-8"
    >
      <div className="w-full h-full z-30 bg-[rgba(0,0,0,.6)] absolute top-0 left-0"></div>
      <img
        src="/images/hazel_8.jpeg"
        alt=""
        className="absolute z-10 object-cover top-0 left-0 h-full w-full"
      />
      <div
        className="w-[90%] mx-auto z-40 flex items-center justify-center flex-col
       gap-4"
      >
        <h1 className="text-white text-center leading-[1.3] text-5xl md:text-6xl font-booking_font4">
          Thank You!!
          <span className="block md:mx-auto md:text-center md:w-[450px] text-base text-grey font-booking_font">
            Your payment has been carried out successfull! We appreciate you
          </span>
        </h1>
        <div className="w-full absolute bottom-0 left-0 z-[35] flex items-center justify-center py-8">
          <div className="w-[90%] lg:w-[50%] mx-auto grid grid-cols-2  sm:grid-cols-4 items-center justify-center gap-4 max-w-custom_1 h-full">
            <span
              style={{ letterSpacing: "4px" }}
              className="text-[9px] md:text-xs font-normal uppercase flex items-center gap-4 font-booking_font"
            >
              <div className="w-6 h-6 rounded-full bg-white text-dark flex items-center justify-center">
                1
              </div>{" "}
              <span className="text-white">My Trips</span>
            </span>

            <span
              style={{ letterSpacing: "4px" }}
              className="text-[9px] md:text-xs font-normal uppercase flex items-center gap-4 font-booking_font"
            >
              <div className="w-6 h-6 rounded-full bg-white text-dark flex items-center justify-center">
                2
              </div>
              <span className="text-white">BOOKING</span>
            </span>

            <span
              style={{ letterSpacing: "4px" }}
              className="text-[9px] md:text-xs font-normal uppercase flex items-center gap-4 font-booking_font"
            >
              <div className="w-6 h-6 rounded-full bg-white text-dark flex items-center justify-center">
                3
              </div>
              <span className="text-white">CHECKOUT</span>
            </span>

            <span
              style={{ letterSpacing: "4px" }}
              className="text-[9px] md:text-xs font-normal uppercase flex items-center gap-4 font-booking_font"
            >
              <div className="w-6 h-6 rounded-full border-white border text-white flex items-center justify-center">
                4
              </div>{" "}
              <span className="text-white">THANK YOU</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const RoomLists = () => {
  const { reservations } = useSelector((store) => store.reservation);
  return (
    <div
      className="w-full relative py-24 flex items-center justify-center
   gap-8"
    >
      <div
        className="w-[90%]  relative mx-auto max-w-custom_1 z-40 grid md:grid-cols-1 items-start justify-center flex-col
       gap-12"
      >
        <div className="w-full flex flex-col gap-12">
          <div className="p-24 bg-[var(--grey-1)] flex items-center flex-col gap-8 justify-center">
            <FaRegCircleCheck fontSize={"80px"} color="var(--gold-1)" />
            <h3 className="text-4xl text-center font-booking_font4">
              Your Payment has been confirmed
              <span className="block md:mx-auto pt-4 md:text-center md:w-[400px] text-lg font-booking_font text-grey">
                Your payment has been carried out successfull! We appreciate you
              </span>
            </h3>
          </div>
          <div className="w-full pb-8 border-b flex flex-col gap-8">
            <h3 className="text-4xl font-booking_font4">Order Details</h3>
            <div className="w-full grid grid-cols-custom md:items-center gap-20">
              <div className="w-full">
                <div className="grid grid-cols-custom_4 items-center gap-8">
                  <img
                    src="/images/hazel_1.jpeg"
                    alt=""
                    className="w-[300px] object-cover h-[300px]"
                  />
                  <div className="w-full flex flex-col gap-4">
                    <h3 className="text-4xl font-booking_font4">Hazel</h3>
                    <ul className="flex flex-col gap-2">
                      <li className="text-lg flex items-center gap-3 font-booking_font">
                        <span className="font-bold">Check In:</span>
                        Dec 24 2024
                      </li>
                      <li className="text-lg flex items-center gap-3 font-booking_font">
                        <span className="font-bold">Check Out:</span>
                        Dec 29 2024
                      </li>
                      <li className="text-lg flex items-center gap-3 font-booking_font">
                        <span className="font-bold">Guests:</span>4
                      </li>
                      <li className="text-lg flex items-center gap-3 font-booking_font">
                        <span className="font-bold">Total Days:</span>4 Days 3
                        Nights
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-[400px]">
                <div className="w-full flex flex-col gap-4">
                  <h3 className="text-4xl font-booking_font4">
                    Reservation Details
                  </h3>
                  <ul className="flex flex-col gap-2">
                    <li className="text-lg flex items-center gap-3 font-booking_font">
                      <span className="font-bold">Order No:</span>
                      3947565tggfjf48
                    </li>
                    <li className="text-lg flex items-center gap-3 font-booking_font">
                      <span className="font-bold">Order Date:</span>
                      Dec 29 2024
                    </li>
                    <li className="text-lg flex items-center gap-3 font-booking_font">
                      <span className="font-bold">Transaction Id:</span>{" "}
                      3746r5fhfjd773geb
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-end">
            <h3 className="text-3xl md:text-4xl font-booking_font4">
              Amount Paid: <span>#300000</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
