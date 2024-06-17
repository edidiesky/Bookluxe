"use client";
import { GetPaymentHistory } from "@/features/payment/paymentReducer";
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Statistics = () => {
  return (
    <div className="w-full grid md:grid-cols-custom_6 items-start gap-4">
      <div className="flex w-full">
        <GrowthStat />
      </div>
      <div className="flex w-full">
        <SalesStat />
      </div>
    </div>
  );
};

const GrowthStat = () => {
  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: "bar",
      fontFamily: "playfair",
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
    colors: ["var(--dark-1)", "#247BA0"],
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
    },
  });

  const [series, setSeries] = useState([
    {
      name: "Transactions",
      data: [14, 22, 45, 15, 40, 18, 58, 16],
    },
    // {
    //   name: "Reservations",
    //   data: [16, 23, 39, 26, 44, 25, 50, 28],
    // },
  ]);
  return (
    <div id="chart" className="w-full">
      <div className="w-full flex flex-col gap-8">
        <div className="p-6 w-full px-6 flex-col rounded-[10px] min-h-[500px] border bg-white flex gap-4">
          <h3 className="text-2xl font-booking_font4">This Year Growth</h3>
          <div className="flex w-full flex-col gap-8">
            <Chart
              options={options}
              series={series}
              type="bar"
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
  const dispatch = useDispatch();
  
  // const transactionList = [
  //   {
  //     name: "Jonas Felix",
  //     email: "jonasfelix@gmail.com",
  //     totalPrice: 19373,
  //   },
  //   {
  //     name: "Blessed Dan",
  //     email: "lessDan@gmail.com",
  //     totalPrice: 19373,
  //   },
  //   {
  //     name: "Tereas Jonas",
  //     email: "jterejonas@gmail.com",
  //     totalPrice: 3643,
  //   },
  // ];

  useEffect(() => {
    dispatch(GetPaymentHistory());
  }, []);
  const { payments } = useSelector((store) => store.payment);
  return (
    <div className="w-full py-6 flex flex-col gap-4 bg-white border rounded-[10px]">
      <div className="w-full flex flex-col gap-4">
        <div className="w-full px-6 flex items-center justify-between">
          <h3 className="text-xl font-booking_font4">Transaction History</h3>
          <Link
            style={{ textDecoration: "underline" }}
            className="text-sm text-[var(--dark-1)] font-booking_font_bold"
            to={"/dashboard/orders"}
          >
            View All
          </Link>
        </div>
        <ul className="flex flex-col gap-2 w-full">
          {payments?.map((data, index) => {
            return (
              <li
                key={index}
                className="text-base py-2 px-6 cursor-pointer hover:bg-[#fafafa] font-booking_font4 flex items-center justify-between w-full"
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#000] flex items-center justify-center text-white text-base">
                    {data?.user?.name[0]}
                  </div>
                  <span className="text-base">
                    {data?.user?.name}
                    <div className="block font-booking_font text-xs text-grey">
                      {data?.user?.email}
                    </div>
                  </span>
                </div>
                <span>+{data?.amount}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Statistics;
