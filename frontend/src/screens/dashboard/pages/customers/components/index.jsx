"use client";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ReservationRoomsModal from "@/components/modals/ReservationRoomsModal";
import RoomsList from "./customerlist";
const DashboardIndex = () => {
  const [roommodal, setRoomModal] = useState(false);
  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {roommodal && (
          <ReservationRoomsModal modal={roommodal} setModal={setRoomModal} />
        )}
      </AnimatePresence>
      <div className="w-full pb-20 flex flex-col gap-12">
        <div className="w-full grid lg:grid-cols-2 lg:items-center gap-4 justify-between">
          <h3 className="text-3xl font-booking_font_normal">
            Customers List
            <span className="block text-grey pt-2 text-base font-booking_font_normal">
              Make a review of your customers either by adding or modifying
              their content
            </span>
          </h3>
        </div>
        <RoomsList />
      </div>
    </div>
  );
};

export default DashboardIndex;
