"use client";
import React, { useState } from "react";

const RoomDetail = ({
  title,
  bathrooms,
  shortdescription,
  price,
  images,
  rooms,
}) => {

  return (
    <div className="w-full bg-[#fff] border p-6 rounded-[10px]">
      <div className="w-full flex flex-col gap-8">
        <h4 className="text-2xl font-booking_font_bold font-semibold">Preview</h4>
        <div className="w-full flex flex-col gap-4">
          {images?.length > 0 ? (
            <img
              alt="Cotion"
              loading="lazy"
              style={{
                transition:
                  "filter 0.2s cubic-bezier(0.4, 0, 0.2, 1), -webkit-filter 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              src={images[0]}
              className="w-full h-[200px] rounded-lg object-cover hover:grayscale-[1] grayscale-0"
            />
          ) : (
            <>
              <div className="w-full h-[200px] bg-[#fafafa] border"></div>
            </>
          )}

          <div className="w-full flex flex-col gap-2">
            <h4
              style={{ letterSpacing: "3px" }}
              className="text-xs text-grey uppercase font-booking_font_bold font-semibold"
            >
              for settling in castle
            </h4>
            <h3 className="text-2xl lg:text-2xl font-booking_font_bold font-medium text-text_dark_1 ">
              {title}
            </h3>
            <div className="w-full flex flex-wrap gap-2">
              <h4
                style={{ letterSpacing: "2px" }}
                className="text-xs text-dark uppercase font-booking_font_bold font-semibold"
              >
                Price: ${price}
              </h4>
              <h4
                style={{ letterSpacing: "2px" }}
                className="text-xs text-dark uppercase font-booking_font_bold font-semibold"
              >
                Rooms: {rooms}
              </h4>
              <h4
                style={{ letterSpacing: "2px" }}
                className="text-xs text-dark uppercase font-booking_font_bold font-semibold"
              >
                BathRooms: {bathrooms}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
