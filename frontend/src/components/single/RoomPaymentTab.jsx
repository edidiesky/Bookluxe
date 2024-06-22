"use client";
import React, { useRef, useState, useEffect } from "react";
import { BiCheck, BiChevronDown, BiChevronUp, BiStar } from "react-icons/bi";
import moment from "moment";
import { addDays, format } from "date-fns";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../home/loader";
import { onLoginModal } from "@/features/modals/modalSlice";
export default function RoomPaymentTab({
  setDateModal,
  dateRange,
  adults,
  childrens,
  setGuestsModal,
  setLoginModal,
  room,
}) {
  // states of the reservation booking either loading or
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [bookingloading, setBookingLoading] = useState(false);
  const [bookingdata, setBookingData] = useState(null);

  // console.log(moment(startdate).format("MMMM Do"));
  const { currentUser, token } = useSelector((store) => store.auth);

  // console.log(token)

  const today = new Date();
  const [date, setDate] = React.useState({
    from: today,
    to: addDays(today, 3),
  });
  const startdate = date?.from;
  const enddate = date?.to;
  let date1 = moment(startdate);
  let date2 = moment(enddate);
  const differenceInDays = date2?.diff(date1, "days"); // Convert milliseconds to days
  // console.log(moment(startdate)?.date());

  const totalPrice =
    room?.price * differenceInDays + room?.price * differenceInDays * 0.1;
  const reservationData = {
    totalPrice: totalPrice,
    startDate: moment(startdate).format("MMMM Do YYYY"),
    endDate: moment(enddate).format("MMMM Do YYYY"),
  };

  // console.log(reservationData);
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
          const config = {
            headers: {
              authorization: `Bearer ${token}`,
            },
          };
          const { data } = await axios.post(
            `${import.meta.env.VITE_API_BASE_URLS}/reservation/${room?.id}`,
            reservationData,
            config
          );
          toast.success("Room has been succesfully booked!!");
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
      dispatch(onLoginModal());
    }
  };
  useEffect(() => {
    if (bookingdata !== null) {
      const interval = setTimeout(() => {
        navigate(`/reservation/payment/${bookingdata?.id}`);
      }, 4000);
      return () => clearTimeout(interval);
    }
  }, [bookingdata]);

  return (
    <div className="w-[95%] lg:sticky top-[10%] flex flex-col gap-8">
      <div className="w-full py-8 flex flex-col items-center gap-4 justify-center md:w-[400px] bg-[#1C1C1C]">
        <div className="w-[90%] mx-auto grid grid-cols-1 gap-4">
          <Popover>
            <PopoverTrigger>
              <div className="grid w-full grid-cols-2 gap-4">
                <div className="py-8 cursor-pointer bg-[#151515] flex items-center justify-center flex-col gap-4">
                  <span className="uppercase text-sm text-white">CHECK-IN</span>
                  <div className="flex items-center gap-2">
                    <span
                      style={{ letterSpacing: "4px" }}
                      className="text-3xl text-[var(--gold-1)] pt-3 md:text-4xl block font-booking_font4 uppercase leading-[1.5] text-center text-dark"
                    >
                      {moment(startdate)?.date()}
                    </span>
                    <span
                      style={{ letterSpacing: "4px" }}
                      className="text-[8px] text-[var(--gold-1)] uppercase leading-[1.5] flex flex-col text-dark font-normal"
                    >
                      {moment(startdate).format("MMM").toUpperCase()}
                      <BiChevronDown fontSize={"24px"} />
                    </span>
                  </div>
                </div>
                <div className="py-8 cursor-pointer bg-[#151515] flex items-center justify-center flex-col gap-4">
                  <span className="uppercase text-xs text-white">
                    CHECK-Out
                  </span>
                  <div className="flex items-center gap-2">
                    <span
                      style={{ letterSpacing: "4px" }}
                      className="text-3xl text-[var(--gold-1)] pt-3 md:text-4xl block font-booking_font4 uppercase leading-[1.5] text-center text-dark"
                    >
                      {moment(enddate)?.date()}
                    </span>
                    <span
                      style={{ letterSpacing: "4px" }}
                      className="text-[8px] text-[var(--gold-1)] uppercase leading-[1.5] flex flex-col text-dark font-normal"
                    >
                      {moment(enddate).format("MMM").toUpperCase()}
                      <BiChevronDown fontSize={"16px"} />
                    </span>
                  </div>
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
          <div className="w-full grid grid-cols-2 gap-4">
            <div className="py-8 cursor-pointer bg-[#151515] flex items-center justify-center flex-col gap-4">
              <span className="uppercase text-xs text-white">GUEsTS</span>
              <div className="flex items-center gap-2">
                <span
                  style={{ letterSpacing: "4px" }}
                  className="text-3xl text-[var(--gold-1)] pt-3 md:text-4xl block font-booking_font4 uppercase leading-[1.5] text-center text-dark"
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
                  className="text-3xl text-[var(--gold-1)] pt-3 md:text-4xl block font-booking_font4 uppercase leading-[1.5] text-center text-dark"
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
        </div>
        <div className="w-[90%] p-4 mx-auto flex flex-col gap-4">
          <div className="w-full flex flex-col gap-2">
            {/* price */}
            <div className="w-full text-base font-light font-booking_font4 text-[var(--gold-1)] flex items-center justify-between">
              <span className="text-grey text-lg block font-booking_font font-normal">
                {room?.price} x {differenceInDays} nights
              </span>
              <span>
                {room?.price * differenceInDays}{" "}
                <span className="text-base">USD</span>
              </span>
            </div>
            {/* taxes */}
            <div className="w-full font-light font-booking_font4 text-[var(--gold-1)] flex items-center justify-between">
              <span className="text-grey text-lg block font-booking_font font-normal">
                Fees and taxess
              </span>
              <span>
                {room?.price * differenceInDays * 0.1}{" "}
                <span className="text-lg">USD</span>
              </span>
            </div>
            {/* total */}
            <div className="w-full font-light font-booking_font4 text-[var(--gold-1)] flex items-center justify-between">
              <span className="text-grey text-lg block font-booking_font font-normal">
                Total
              </span>
              <span>
                {100} <span className="text-lg">USD</span>
              </span>
            </div>
          </div>
          {/* summary */}
          <div
            className="w-full text-xl font-normal text-grey font-booking_font4
                    flex items-center justify-between"
          >
            <span className="text-base font-booking_font font-normal">
              You Pay
            </span>
            <span className="text-[var(--gold-1)] ">
              {totalPrice} <span className="text-base">USD</span>
            </span>
          </div>
          {currentUser ? (
            <button
              type="submit"
              disabled={bookingloading}
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
