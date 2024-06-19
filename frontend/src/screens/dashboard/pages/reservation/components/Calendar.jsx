"use client";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import BookingReservationModal from "@/components/modals/BookingReservationModal";
import { Scheduler } from "@bitnoi.se/react-scheduler";

const ReservationCalendar = () => {
  const [filterButtonState, setFilterButtonState] = useState(0);
  const isLoading = false;

  const [reservationtab, setReservationTab] = useState({
    modal: false,
    data: null,
  });
  return (
    <>
      <AnimatePresence mode="wait">
        {reservationtab?.modal && (
          <BookingReservationModal
            modal={reservationtab?.modal}
            setModal={setReservationTab}
          />
        )}
      </AnimatePresence>
      <section className="relative p4 bg-white overflow-hidden shadow-lg border rounded-[10px] min-h-[450px]">
        <Scheduler
          data={mockedSchedulerData}
          isLoading={isLoading}
          onRangeChange={(newRange) => console.log(newRange)}
          onTileClick={(item) =>
            setReservationTab({
              modal: true,
              data: item,
            })
          }
          onItemClick={(item) =>
            setReservationTab({
              modal: true,
              data: item,
            })
          }
          onFilterData={() => {
            // Some filtering logic...
            setFilterButtonState(1);
          }}
          onClearFilterData={() => {
            // Some clearing filters logic...
            setFilterButtonState(0);
          }}
          config={{
            zoom: 0,
            filterButtonState,
          }}
        />
      </section>
    </>
  );
};

const mockedSchedulerData = [
  {
    id: "070ac5b5-8369-4cd2-8ba2-0a209130cc60",
    label: {
      icon: "https://picsum.photos/24",
      title: "Joe Doe",
      subtitle: "Frontend Developer",
    },
    data: [
      {
        id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3762",
        startDate: new Date("2024-04-13T15:31:24.272Z"),
        endDate: new Date("2024-04-28T10:28:22.649Z"),
        occupancy: 3600,
        title: "Room",
        subtitle: "Subtitle A",
        description: "array indexing Salad West Account",
        bgColor: "#0e7b10",
      },
      {
        id: "22fbe237-6344-4c8e-affb-64a1750f33bd",
        startDate: new Date("2024-10-07T08:16:31.123Z"),
        endDate: new Date("2024-10-15T21:55:23.582Z"),
        occupancy: 2852,
        title: "Project B",
        subtitle: "Subtitle B",
        description: "Tuna Home pascal IP drive",
        bgColor: "#0e7b10",
      },
      {
        id: "3601c1cd-f4b5-46bc-8564-8c983919e3f5",
        startDate: new Date("2024-03-30T22:25:14.377Z"),
        endDate: new Date("2024-04-01T07:20:50.526Z"),
        occupancy: 1800,
        title: "Project C",
        subtitle: "Subtitle C",
        bgColor: "#0e7b10",
      },
      {
        id: "b088e4ac-9911-426f-aef3-843d75e714c2",
        startDate: new Date("2024-10-28T10:08:22.986Z"),
        endDate: new Date("2024-10-30T12:30:30.150Z"),
        occupancy: 11111,
        title: "Project D",
        subtitle: "Subtitle D",
        description: "Garden heavy an software Metal",
        bgColor: "#0e7b10",
      },
    ],
  },
  {
    id: "070ac5b5-8369-4cd2-8ba2-0a209130cc60",
    label: {
      icon: "https://picsum.photos/24",
      title: "Alfred Samuel",
      subtitle: "Frontend Developer",
    },
    data: [
      {
        id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3762",
        startDate: new Date("2024-04-20T15:31:24.272Z"),
        endDate: new Date("2024-04-28T10:28:22.649Z"),
        occupancy: 3600,
        title: "Room A",
        subtitle: "Subtitle A",
        description: "array indexing Salad West Account",
        bgColor: "#0e7b10",
      },
      {
        id: "22fbe237-6344-4c8e-affb-64a1750f33bd",
        startDate: new Date("2024-10-21T08:16:31.123Z"),
        endDate: new Date("2024-10-24T21:55:23.582Z"),
        occupancy: 2852,
        title: "Project B",
        subtitle: "Subtitle B",
        description: "Tuna Home pascal IP drive",
        bgColor: "#0e7b10",
      },
      {
        id: "3601c1cd-f4b5-46bc-8564-8c983919e3f5",
        startDate: new Date("2024-03-10T22:25:14.377Z"),
        endDate: new Date("2024-04-11T07:20:50.526Z"),
        occupancy: 1800,
        title: "Project C",
        subtitle: "Subtitle C",
        bgColor: "#0e7b10",
      },
      {
        id: "b088e4ac-9911-426f-aef3-843d75e714c2",
        startDate: new Date("2024-10-18T10:08:22.986Z"),
        endDate: new Date("2024-10-20T12:30:30.150Z"),
        occupancy: 11111,
        title: "Project D",
        subtitle: "Subtitle D",
        description: "Garden heavy an software Metal",
        bgColor: "#0e7b10",
      },
    ],
  },
];

export default ReservationCalendar;
