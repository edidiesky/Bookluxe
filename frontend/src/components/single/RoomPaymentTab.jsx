"use client";
import React, { useRef, useState, useEffect } from "react";
import { BiCheck, BiChevronDown, BiChevronUp, BiStar } from "react-icons/bi";
import moment from "moment";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Loader from "@/components/loader";
import { redirect } from "next/navigation";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
export default function RoomPaymentTab({
  setDateModal,
  dateRange,
  adults,
  childrens,
  setGuestsModal,
  setLoginModal,
  currentUser,
  room,
}) {
  // states of the reservation booking either loading or
  const [bookingloading, setBookingLoading] = useState(false);
  const [bookingdata, setBookingData] = useState(null);
  const [startdate, setStartDate] = React.useState(Date.now());
  const [enddate, setEndDate] = React.useState(Date.now());
  console.log(moment(startdate).format("MMMM Do"));

  let date1 = moment(startdate);
  let date2 = moment(enddate);
  const differenceInDays = date2.diff(date1, "days"); // Convert milliseconds to days
  console.log(moment(startdate, "MMMM Do YYYY"));
  const router = useRouter();

  const totalPrice =
    room?.price * differenceInDays + room?.price * differenceInDays * 0.1;
  const reservationData = {
    totalPrice: totalPrice,
    startDate: moment(startdate, "MMMM Do YYYY"),
    endDate: moment(enddate, "MMMM Do YYYY"),
  };
  const handleReservationBooking = async () => {
    if (currentUser) {
      // console.log('Reservation has been booked')
      // window.location.href = `/reservation/payment`;
      if (differenceInDays <= 2) {
        toast.error("Reservation date should be more than 2 days");
      } else {
        // toast.success("Reservation date is fine");
        try {
          setBookingLoading(true);
          const { data } = await axios.post(
            `/api/reservation/${room?.id}`,
            reservationData
          );
          setBookingData(data);
        } catch (error) {
          const erroMessage =
            error?.response?.data?.message || "An error occurred";
          toast.error(erroMessage);
        } finally {
          setBookingLoading(false);
        }
      }
    } else {
      setLoginModal(true);
    }
  };
  //   // // console.log(bookingdata);
  // let newStartDate = startdate &&  startdate?.split("")[0]
  //  console.log(newStartDate);
  useEffect(() => {
    if (bookingdata !== null) {
      redirect(`/reservation/payment?reservationId=${bookingdata?.id}`);
    }
  }, [bookingdata]);

  return (
    <div className="w-[95%] lg:sticky top-[10%] flex flex-col gap-8">
      <div className="w-full py-8 flex flex-col items-center gap-4 justify-center md:w-[400px] bg-[#1C1C1C]">
        <div className="w-[90%] mx-auto grid grid-cols-2 gap-4">
          <Popover>
            <PopoverTrigger>
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
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={startdate}
                onSelect={setStartDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
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
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={enddate}
                  onSelect={setEndDate}
                  initialFocus
                />
              </PopoverContent>
            </PopoverTrigger>
          </Popover>
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
              <span className="text-white">
                {room?.price} x {differenceInDays} nights
              </span>
              <span>
                {room?.price * differenceInDays}{" "}
                <span className="text-base">USD</span>
              </span>
            </div>
            {/* taxes */}
            <div className="w-full text-base font-light font-booking_font4 text-[var(--gold-1)] flex items-center justify-between">
              <span className="text-white">Fees and taxess</span>
              <span>
                {room?.price * differenceInDays * 0.1}{" "}
                <span className="text-lg">USD</span>
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
              {totalPrice} <span className="text-base">USD</span>
            </span>
          </div>
          {currentUser ? (
            <button
              type="submit"
              onClick={handleReservationBooking}
              style={{ letterSpacing: "4px" }}
              className="btn text-center text-sm uppercase text-white py-6 px-8 w-full"
            >
              {bookingloading ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader type="dots" />
                  Placing Reservation
                </span>
              ) : (
                "Place Reservation"
              )}{" "}
            </button>
          ) : (
            <button
              onClick={handleReservationBooking}
              style={{ letterSpacing: "4px" }}
              className="btn text-center text-sm uppercase text-white py-6 px-8 w-full"
            >
              Sign in to Book
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
