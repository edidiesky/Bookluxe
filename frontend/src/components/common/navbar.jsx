"use client";
import React from "react";
import { Link } from "react-router-dom";
import { HiBars3BottomRight } from "react-icons/hi2";

  const linkData = [
    {
      title: "Home",
      path: "",
    },
    {
      title: "Search",
      path: "search",
    },
    {
      title: "Saved Homes",
      path: "savedhomes",
    },
    {
      title: "My Trips",
      path: "trips",
    },
    {
      title: "About & FAQ",
      path: "about",
    },
  ];

const Navbar = () => {
  return (
    <div className="p-3 z-[50] bg-[var(--grey-1)] px-8 min-h-[72px] sticky top-0 left-0 flex items-center justify-center">
      <div className="w-full flex items-center gap-2 justify-between">
        <Link to={"/"} className=" flex items-center gap-1 justify-start">
          <img
            alt="Cotion"
            width={0}
            sizes="100vw"
            height={0}
            loading="lazy"
            src="https://www.hopper.com/assets/treasure-D-5S8iOp.svg"
            className="w-14 h-14 rounded-full object-cover"
          />
          <h4 className="hidden lg:flex flex-col text-base font-bold font-booking_font4 text-dark">
            HOME & VILLAS{" "}
            <span className="block font-semibold text-xs font-booking_font">
              {" "}
              Benneth Okeke
            </span>
          </h4>
        </Link>
        <div className="items-center justify-start hidden lg:flex gap-3">
          {linkData?.map((list, index) => {
            return (
              <Link
                to={`/${list.path}`}
                key={index}
                className={`text-sm hover:text-grey font-semibold flex items-center gap-2 p-3 px-3 rounded-[40px]`}
              >
                {/* <img src={list?.icon} className="w-4" alt="" /> */}
                {list?.title}
              </Link>
            );
          })}
        </div>

        {/* <img src="/images/TestLogo.png" alt="" className="w-40" /> */}

        <div className="flex justify-end items-center gap-8">
          {/* <div className="hidden md:flex items-center gap-2">
            <img
              src="/images/image_9.png"
              alt=""
              className="w-12 h-12 rounded-full"
            />
            <h4 className="text-sm font-bold">
              Dr Jose Simmons
              <span className="block text-xs text-grey font-semibold">
                John@gmail.com
              </span>
            </h4>
          </div> */}
          <span className="flex items-center gap-4">
            <div className="btn text-xs text-center p-4 font-semibold text-white px-6 rounded-[40px]">
              Book Your Stay
            </div>
            <span className="flex text-3xl lg:hidden">
              <HiBars3BottomRight />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
