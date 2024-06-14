"use client";
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const Statistics = () => {
  return (
    <div className="w-full grid md:grid-cols-custom items-start gap-4">
      <div className="flex w-full">
        <GrowthStat />
      </div>
      <div className="flex w-full md:w-[350px]">
        <SalesStat />
      </div>
    </div>
  );
};

const GrowthStat = () => {
  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: "line",
      fontFamily: "var(--font-work)",
      foreColor: "#333",
      fontSize: "30px",
      textTransform: "capitalize",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#FF1654", "#247BA0"],
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
    },
  });

  const [series, setSeries] = useState([
    {
      name: "Rooms",
      data: [14, 22, 45, 15, 40, 18, 58, 16],
    },
    {
      name: "Reservations",
      data: [16, 23, 39, 26, 44, 25, 50, 28],
    },
  ]);
  return (
    <div id="chart" className="w-full">
      <div className="w-full flex flex-col gap-8">
        <div className="p-6 w-full px-6 flex-col rounded-[10px] min-h-[500px] border bg-white flex gap-4">
          <h3 className="text-2xl font-semibold font-booking_booking_font_normal">
            This Year Growth
          </h3>
          <div className="flex w-full flex-col gap-8">
            <Chart
              options={options}
              series={series}
              type="line"
              width={"100%"}
              height={430}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SalesStat = () => {
  return (
    <div className="w-full p-6 flex flex-col gap-4 bg-white border rounded-[10px]">
      <h3 className="text-xl font-semibold font-booking_booking_font_normal">
       Transaction History
      </h3>
    </div>
  );
};

export default Statistics;