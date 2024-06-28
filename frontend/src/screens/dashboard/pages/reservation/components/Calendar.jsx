"use client";
import React, { useState } from "react";
import moment from "moment";
import { AnimatePresence } from "framer-motion";
import BookingReservationModal from "@/components/modals/BookingReservationModal";
import { Scheduler } from "@bitnoi.se/react-scheduler";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
const ReservationCalendar = () => {
  const [filterButtonState, setFilterButtonState] = useState(0);
  // const isLoading = false;
  const { reservations, getsingleReservationisLoading } = useSelector(
    (store) => store.reservation
  );
  const [reservationtab, setReservationTab] = useState({
    modal: false,
    data: null,
  });
  const newFormattedData = (reservations || []).map((booking) => {
    return {
      id: booking?.id,
      booking:booking,
      label: {
        icon: booking?.images && booking?.images[0],
        title: booking?.title,
      },
      data: (booking?.reservations || []).map((data, index) => {
        const formattedStartDate = moment(data?.startDate);
        const formattedEndDate = moment(data?.endDate);
        const duration = formattedEndDate.diff(formattedStartDate, "hours");
        return {
          startDate: new Date(data?.startDate),
          endDate: new Date(data?.endDate),
          id: data?.id,
          occupancy: `${duration}`,
          title: data?.user?.name || "No title",
          roomprice:`${booking?.price}`,
          bgColor: "#0e7b10",
          subtitle: `${data?.user?.name || "Unknown user"} has booked it`,
          title:`${booking?.title}`,
          ...data
        };
      }),
    };
  });
  // console.log(newFormattedData);
  return (
    <>
      <AnimatePresence mode="wait">
        {reservationtab?.modal && (
          <BookingReservationModal
            modal={reservationtab?.modal}
            setModal={setReservationTab}
            room={reservationtab?.data}

          />
        )}
      </AnimatePresence>
      <ReservationCalendarStyle className="relative p4 bg-white overflow-hidden shadow-lg border rounded-[10px] min-h-[500px]">
        {getsingleReservationisLoading === false && (
          <Scheduler
            data={newFormattedData}
            isLoading={getsingleReservationisLoading}
            onRangeChange={(newRange) => console.log(newRange)}
            onTileClick={(item) =>
              setReservationTab({
                modal: true,
                data: item,
              })
            }
            // onItemClick={(item) =>
            //   setReservationTab({
            //     modal: true,
            //     data: item,
            //   })
            // }
            onFilterData={() => {
              // Some filtering logic...
              setFilterButtonState(1);
            }}
            onClearFilterData={() => {
              // Some clearing filters logic...
              setFilterButtonState(0);
            }}
            config={{
              zoom: 1,
              filterButtonState,
            }}
          />
        )}
      </ReservationCalendarStyle>
    </>
  );
};

const ReservationCalendarStyle = styled.section`
  /* calendar */
  #reactSchedulerOutsideWrapper,
  #reactSchedulerOutsideWrapper *,
  #reactSchedulerOutsideWrapper ::before,
  #reactSchedulerOutsideWrapper ::after {
    /* font-family: "playfair" !important; */
    font-weight: normal !important;
  }

  .sc-gjLKRp.gqsWwT {
    font-family: "Booking_Normal_Medium" !important;
    font-size: 15px !important;
  }

  .sc-cCzKKE.bwVOYM {
    font-family: "Booking_Normal_Medium" !important;
    /* font-weight: normal !important; */
    font-size: 12px !important;
  }

  .sc-cCzKKE.fOgBaC {
    font-family: "playfair" !important;
    font-size: 14px !important;
    font-weight: normal !important;
  }

  .sc-gjLKRp.gqsWwT {
    font-family: "playfair" !important;
    font-size: 14px !important;
  }

  .sc-gjLKRp.eAzhgx {
    font-family: "Booking_Normal_Medium" !important;
    font-size: 12px !important;
  }

  .jMfbsI {
    min-width: 196px;
    max-width: 196px;
    min-height: 100vh;
    position: sticky;
    left: 0px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1) !important;
    border-right: 1px solid rgba(0, 0, 0, 0.1) !important;
    z-index: 2;
  }

  .jwOjdZ {
    margin-right: 0.6rem;
    width: 5rem !important;
    height: 3rem !important;
    border-radius: 10px !important;

    overflow: hidden;
    flex-shrink: 0;
  }

  .sc-cCzKKE.bwVOYM {
    display: block !important;
    font-family: "Booking_Normal_Medium" !important;
  }

  .sc-cCzKKE.fOgBaC::after {
    display: none !important;
  }

  /* @media (max-width:580px) {
  html {
    font-size: 60%;
  }
} */
`;

export default ReservationCalendar;
