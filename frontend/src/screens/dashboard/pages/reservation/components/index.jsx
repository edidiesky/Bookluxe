"use client";
import React, { useState, useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { GetAllRoomAndReservations } from "@/features/reservation/reservationReducer";

import { motion, useInView, AnimatePresence } from "framer-motion";
import ReservationRoomsModal from "@/components/modals/ReservationRoomsModal";
import ReservationCalendar from "./Calendar";
const DashboardIndex = () => {
  const [reservationmodal, setReservationModal] = useState(false);
  const [roommodal, setRoomModal] = useState(false);
  const dispatch = useDispatch();
  const { reservations } = useSelector((store) => store.reservation);

  useEffect(() => {
    dispatch(GetAllRoomAndReservations());
  }, []);
  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {reservationmodal && (
          <ReservationRoomsModal
            modal={reservationmodal}
            setModal={setReservationModal}
          />
        )}
      </AnimatePresence>
      <div className="w-full relative flex flex-col gap-12">
        <div className="w-full grid lg:grid-cols-2 lg:items-center gap-4 justify-between">
          <h3 className="text-3xl lg:text-4xl font-booking_font4">
            My Reservation
          </h3>
          <div className="flex items-center lg:justify-end gap-2">
            {/* <div
              onClick={() => setReservationModal(true)}
              className="p-4 btn cursor-pointer text-base
             bg-[#000] px-8 font-booking_font rounded-[10px] font-bold text-white"
            >
              Add a reservation
            </div> */}
          </div>
        </div>
        <ReservationCalendar />
      </div>
    </div>
  );
};

export default DashboardIndex;
