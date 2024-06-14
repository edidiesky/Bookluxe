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
        <h2 className="text-3xl lg:text-4xl font-bold">
          Dashboard
          <span className="text-sm pt-3 block text-dark font-booking_font_bold font-semibold family1">
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
