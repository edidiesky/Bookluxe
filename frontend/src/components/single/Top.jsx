"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import { motion, useInView, AnimatePresence, Variant } from "framer-motion";

import {
  opacity,
  slideup,
  smallslideup,
  slideup2,
} from "@/constants/utils/framer";
import GuestsModal from "@/components/modals/Guests";
import DateModal from "@/components/modals/Date";
import Imagewrapper from "./Imagewrapper";
import RoomTitleAndDescription from "./RoomTitleAndDescription";
import RoomFeatures from "./RoomFeatures";
import RoomCalendar from "./RoomCalendar";
import RoomLocation from "./RoomLocation";
import RoomDetails from "./RoomDetails";
import RoomGallery from "./RoomGallery";
import RoomPaymentTab from "./RoomPaymentTab";
import LoginModal from "@/components/modals/Login";
import RegisterModal from "@/components/modals/Register";
import useGetRoomById from "@/app/hooks/useGetRoomById";
export default function RoomInfo({ currentUser, roomid }) {
  const [datemodal, setDateModal] = useState(false);
  const [guestsmodal, setGuestsModal] = useState(false);
  const [loginmodal, setLoginModal] = useState(false);
  const [registermodal, setRegisterModal] = useState(false);
  const [gallerymodal, setGalleryModal] = useState(false);
  const { loading, error, room } = useGetRoomById(roomid);
  // console.log(roomid);
  // data for filtering
  const [childrens, setChildrens] = useState(1);
  const [adults, setAdults] = useState(2);

  const [dateRange, setDateRange] = useState({
    selection: {
      startDate: null,
      endDate: null,
      key: "selection",
    },
  });

  const handleSelect = (ranges) => {
    // console.log(ranges);
    const selectedStartDate = ranges?.range1?.startDate;
    const selectedendDate = ranges?.range1?.endDate;
    // console.log(selectedStartDate, selectedendDate, ranges);

    setDateRange({
      ...ranges.range1,
      selection: {
        startDate: selectedStartDate,
        endDate: selectedendDate,
      },
    });
  };

  const ctaText_1 = useRef(null);
  const ctaText_2 = useRef(null);

  const inView = useInView(ctaText_1, {
    margin: "0px 100px -50px 0px",
  });
  // const ctaText1 = `${room?.title}`;

  return (
    <>
      <AnimatePresence mode="wait">
        {guestsmodal && (
          <GuestsModal
            setChildrens={setChildrens}
            childrens={childrens}
            adults={adults}
            setAdults={setAdults}
            modal={guestsmodal}
            setModal={setGuestsModal}
          />
        )}
      </AnimatePresence>
      {/* // register modal */}
      <AnimatePresence mode="wait">
        {loginmodal && (
          <LoginModal
            registermodal={registermodal}
            modal={loginmodal}
            setModal={setLoginModal}
            setRegisterModal={setRegisterModal}
          />
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {registermodal && (
          <RegisterModal
            setLoginModal={setLoginModal}
            modal={registermodal}
            setModal={setRegisterModal}
          />
        )}
      </AnimatePresence>
      {/* RegisterModal */}
      {/* date modal */}
      <AnimatePresence mode="wait">
        {datemodal && (
          <DateModal
            setAdults={setAdults}
            modal={datemodal}
            setModal={setDateModal}
            handleSelect={handleSelect}
            dateRange={dateRange}
          />
        )}
      </AnimatePresence>
      {gallerymodal && (
        <RoomGallery room={room} setGalleryModal={setGalleryModal} />
      )}
      <div className="w-full py-4 flex flex-col gap-24 justify-end items-end">
        <div className="w-[95%] relative md:w-[90%] mx-auto max-w-custom_2 justify-end items-end flex flex-col">
          <div className="w-full flex flex-col gap-20 justify-end">
            <Imagewrapper
              loading={loading}
              room={room}
              setGalleryModal={setGalleryModal}
            />
            {/* // title section */}
            <div className="w-full flex flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-custom_5 gap-20">
              {loading ? (
                <div className="w-full flex flex-col gap-4">
                  <Skeleton width={"40%"} height={20} />
                  <Skeleton width={"60%"} height={40} />
                  <ul className="flex items-center gap-8">
                    <Skeleton width={"50%"} height={10} />
                    <Skeleton width={"50%"} height={10} />
                    <Skeleton width={"50%"} height={10} />
                  </ul>
                  <div className="w-full flex flex-col gap-2">
                    <Skeleton width={"100%"} height={10} />
                    <Skeleton width={"80%"} height={10} />
                    <Skeleton width={"50%"} height={10} />
                    <Skeleton width={"100%"} height={10} />
                    <Skeleton width={"80%"} height={10} />
                    <Skeleton width={"50%"} height={10} />
                  </div>
                </div>
              ) : (
                <div className="w-full flex flex-col gap-4">
                  <h2
                    // ref={ctaText_1}
                    className="text-4xl md:text-5xl font-bold flex flex-wrap gap-x-[8px] gap-y-[8px]  leading-[1] font-booking_font2"
                  >
                    {/* {ctaText1.split(" ").map((x, index) => {
                      return (
                        <span key={index} className="inline-flex hide relative">
                          <motion.span
                            variants={slideup}
                            custom={index}
                            initial="initial"
                            animate={inView ? "animate" : "exit"}
                          >
                            {x}
                          </motion.span>
                        </span>
                      );
                    })} */}
                    {room?.title}
                  </h2>
                  <ul className="flex items-center gap-8">
                    <li className="text-base font-booking_font_normal font-normal">
                      3 Guests
                    </li>

                    <li
                      style={{ listStyleType: "square" }}
                      className="text-base font-booking_font_normal font-normal"
                    >
                      1 Bedrooms
                    </li>

                    <li
                      style={{ listStyleType: "square" }}
                      className="text-base font-booking_font_normal font-normal"
                    >
                      1 Bathrooms
                    </li>
                  </ul>
                  <RoomTitleAndDescription />
                </div>
              )}

              <div className="w-full relative lg:sticky top-[10%] lg:w-[420px] flex flex-col gap-16">
                {loading ? (
                  <div className="w-full flex flex-col gap-2">
                    <Skeleton width={"100%"} height={460} />
                    <Skeleton width={"60%"} height={50} />
                  </div>
                ) : (
                  <RoomPaymentTab
                    currentUser={currentUser}
                    setAdults={setAdults}
                    datemodal={datemodal}
                    setDateModal={setDateModal}
                    handleSelect={handleSelect}
                    dateRange={dateRange}
                    adults={adults}
                    setChildrens={setChildrens}
                    childrens={childrens}
                    guestsmodal={guestsmodal}
                    setGuestsModal={setGuestsModal}
                    loginmodal={loginmodal}
                    setLoginModal={setLoginModal}
                    room={room}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        {loading ? (
          <div className="w-[90%] max-w-custom_2 mx-auto grid md:grid-cols-2 gap-4">
            <Skeleton width={"100%"} height={350} />
            <Skeleton width={"100%"} height={350} />
          </div>
        ) : (
          <RoomFeatures loading={loading} room={room} />
        )}

        {/* <RoomCalendar /> */}
        <RoomLocation loading={loading} room={room} />
      </div>
    </>
  );
}
