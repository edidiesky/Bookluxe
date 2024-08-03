import { Link, NavLink } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRooms } from "@/features/room/roomReducer";
import AnimateText from "@/animations/AnimateText";
const linkData = [
  {
    title: "Buy",
    path: "",
  },
  {
    title: "Rent",
    path: "search",
  },
  {
    title: "Sell",
    path: "savedhomes",
  },
  {
    title: "Agents",
    path: "trips",
  },
];
const Footer = () => {
  const dispatch = useDispatch();
  const { rooms, getallRoomisLoading } = useSelector((store) => store.room);
  useEffect(() => {
    dispatch(getAllRooms());
  }, []);
  return (
    <div className="w-full relative">
      <div
        className="w-full grid md:grid-cols-custom_2
       border-t border-[rgba(0,0,0,.1)]"
      >
        <div className="w-[500px] border-b md:border-b-0 md:border-r border-[rgba(0,0,0,.1)] h-full p-12 md:p-24 relative flex flex-col gap-8">
          <p className="text-start text-grey text-base font-normal">Menu</p>
          <div className="flex flex-col gap-1">
            {linkData?.map((nav, index) => {
              return (
                <NavLink end className={"text-6xl family2 "} to={"/"}>
                  <AnimateText children={nav?.title} />
                </NavLink>
              );
            })}
          </div>
        </div>
        <div className="w-full relative grid md:grid-cols-2 h-full gap-4">
          <div className="border-b md:border-b-0 md:border-r border-[rgba(0,0,0,.1)] h-full py-8 md:py-24 px-12 relative flex flex-col gap-8">
            <p className="text-start text-grey text-sm font-normal">Stay</p>
            <div className=" grid grid-cols-2 items-center justify-between gap-2">
              {rooms?.map((data, index) => {
                return (
                  <Link
                    to={"/"}
                    key={index}
                    className="text-start text-grey text-sm font-normal"
                  >
                    {data?.subtitle}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="border-b md:border-b-0 md:border-r border-[rgba(0,0,0,.1)] h-full py-8 md:py-24 px-12 relative flex flex-col gap-8">
            <p className="text-start text-grey text-sm font-normal">Contact</p>
            <div className="flex flex-col gap-1">
              <p className="text-start text-grey text-sm font-normal">
                Jl. Damai, Kayu Putih
              </p>{" "}
              <p className="text-start text-grey text-sm font-normal">
                Kayu Putih, Lovina, Buleleng, Bali, Indonesia
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-start text-grey text-sm font-normal">
                T: +62 877 888 41008
              </p>{" "}
              <p className="text-start text-grey text-sm font-normal">
                E: resort@thedamai.com
              </p>{" "}
              <p className="text-start text-grey text-sm font-normal">
                Reception: WhatsApp
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full grid grid-cols-2 md:grid-cols-custom_2
       border-t  border-b border-[rgba(0,0,0,.1)]"
      >
        <div className=" md:w-[500px] border-r border-[rgba(0,0,0,.1)] h-full p-4 px-24 relative flex flex-col gap-8">
          <p className="text-start text-grey text-base font-normal">Menu</p>
        </div>
        <div className="w-full relative grid grid-cols-2 h-full gap-4">
          <div className="border-r border-[rgba(0,0,0,.1)] h-full py-4 px-4 relative flex flex-col gap-8">
            <p className="text-start text-grey text-sm font-normal">Stay</p>
          </div>
          <div className="border-r border-[rgba(0,0,0,.1)] h-full py-4 px-4 relative flex flex-col gap-8">
            <p className="text-start text-grey text-sm font-normal">Contact</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
