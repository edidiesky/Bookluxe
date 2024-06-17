"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import moment from "moment";
import {Link} from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import DeleteModal from "../modals/DeleteModal";

const TableCard = ({ x, type }) => {
  const [userdeletemodal, setUserDeleteModal] = useState(false);

  const handleDeleteClient = () => {
    setUserDeleteModal(true);
  };

  if (type === "customerlist") {
    return (
      <>
        <AnimatePresence>
          {userdeletemodal && (
            <DeleteModal
              id={x?.id}
              modal={userdeletemodal}
              setModal={setUserDeleteModal}
            />
          )}
        </AnimatePresence>
        {/* <Delete /> */}
        <tr key={x?._id}>
          <td>
            <div className="flex flex-col">
              <span className="text-xs  font-semibold text-dark text-bold">
                {x?.name}
              </span>
              {/* <span className="text-xs  font-semibold family1 text-dark">{x?.email}</span> */}
            </div>
          </td>
          <td>
            <span className="text-xs  font-semibold family1  text-dark">{x?.email}</span>
          </td>
          <td>
            <span className=" text-dark text-xs  font-semibold family1">
              {x?.country ? x?.country : "-"}
            </span>
          </td>

          <td>
            <span className="text-dark text-xs  font-semibold family1 text-light">
              24th May 2024
            </span>
          </td>
          <td>
            <div className="flex items-center justify-center">
              <Link
                // href={`/account/admin/dashboard/Manage_Customers/${x?._id}`}
                href={"#"}
                className="w-12 h-12 rounded-full flex hover:shadow-xs hover:bg-[#ddd] items-center justify-center"
              >
                <MdEdit />
              </Link>
              <div
                onClick={handleDeleteClient}
                className="w-12 h-12 rounded-full flex hover:shadow-xs hover:bg-[#ddd] items-center justify-center"
              >
                <BsTrash />
              </div>
            </div>
          </td>
        </tr>
      </>
    );
  }
  if (type === "rooms") {
    const startDate = moment(x?.createdAt).format("MMMM Do YYYY");
    return (
      <>
        <AnimatePresence>
          {userdeletemodal && (
            <DeleteModal
              type="rooms"
              room={x}
              modal={userdeletemodal}
              setModal={setUserDeleteModal}
            />
          )}
        </AnimatePresence>
        <tr key={x?._id}>
          <td>
            <div className="flex w-full justify-center flex-col items-center gap-2">
              <img src={x?.images[0]} alt="" className="w-28 h-20 object-cover rounded-lg" />
              <span className="text-xs  font-semibold family1 text-center text-dark">
                {x?.title}
              </span>
            </div>
          </td>
          <td className="text-xs  font-semibold">{x?.address}</td>

          <td className="text-xs  font-semibold">{x?.city}</td>

          <td className="text-xs  font-semibold">{startDate}</td>

          <td className="text-xs  font-semibold">
            <div className="flex items-center justify-center">
              <Link
                href={`/account/admin/dashboard/Manage_Customers/${x?._id}`}
                className="w-12 h-12 rounded-full flex hover:shadow-xs hover:bg-[#ddd] items-center justify-center"
              >
                <MdEdit />
              </Link>
              <div
                onClick={handleDeleteClient}
                className="w-12 h-12 rounded-full flex hover:shadow-xs 
                hover:bg-[#ddd] items-center justify-center"
              >
                <BsTrash />
              </div>
            </div>
          </td>
        </tr>
      </>
    );
  }
  if (type === "Reservation") {
    return (
      <>
        <AnimatePresence>
          {userdeletemodal && (
            <DeleteModal
              id={x?._id}
              modal={userdeletemodal}
              setModal={setUserDeleteModal}
            />
          )}
        </AnimatePresence>
        <tr key={x?._id}>
          <td>
            <span className="text-xs  font-semibold text-center family1 text-dark">
              {x?.user}
            </span>
          </td>
          <td className="text-xs  font-semibold">
            {x?.status === "booked" ? (
              <span className="text-xs  font-semibold font-booking_font_bold text-center success">
                {x?.status}
              </span>
            ) : (
              <span className="text-xs  font-semibold font-booking_font_bold text-center danger">
                {x?.status}
              </span>
            )}
          </td>

          <td className="text-xs  font-semibold">{x?.venue}</td>

          <td className="text-xs  font-semibold">
            24th May - <span>25th Dec</span> 2024
          </td>
          <td className="text-xs  font-semibold">09:00 - 12:00</td>
        </tr>
      </>
    );
  }

  return (
    <>
      {/* <Delete /> */}
      <tr key={x?._id}>
        <td>
          <span className="text-xs  font-semibold family1 text-dark">{x?.plan}</span>
        </td>
        <td>
          <span className="text-dark text-xs  font-semibold family1">$ {x?.price}</span>
        </td>

        <td>
          <span className="text-dark text-xs  font-semibold family1 text-light">
            Type 1
          </span>
        </td>
        <td>
          <span className="text-dark text-xs  font-semibold family1 text-light">
            {x?.date}
          </span>
        </td>
      </tr>
    </>
  );
};

export default TableCard;
