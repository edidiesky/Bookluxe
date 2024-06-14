import React from "react";
import Widget from "./widget";
import ReservationList from "./ReservationList";
import Statistics from "./statistics";
import { useSelector } from "react-redux";
const DashboardIndex = () => {
  const { currentUser } = useSelector((store) => store.auth);
  return (
    <div className="w-full py-8">
      <div className="w-full flex flex-col gap-12">
        <h2 className="text-4xl font-booking_font_normal">
          Dashboard
          <span className="text-base block text-dark font-booking_font_bold font-bold family1">
            <span className="font-normal font-booking_font text-sm text-dark">
              Welcome back,
            </span>{" "}
            {currentUser?.name}
          </span>
        </h2>
        <Widget />
        <Statistics />
        <ReservationList />
      </div>
      {/* <DashboardBanner/> */}
    </div>
  );
};

export default DashboardIndex;
