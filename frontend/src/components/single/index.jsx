"use client";
import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Hero from "./Hero";
import RoomLists from "./RoomLists";
import RecommendedList from "./RecommendedList";
import useGetRoomById from "@/app/hooks/useGetRoomById";
import Navbar from "../common/navbar";
import Footer from "../common/Footer";
import Loader from "../home/loader";
import { getSingleRooms } from "@/features/room/roomReducer";
export default function BookingItem({ roomid, currentUser }) {
  // const { loading, room } = useGetRoomById(roomid);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { rooms, getallRoomisLoading } = useSelector((store) => store.room);
  useEffect(() => {
    if (id) {
      dispatch(getSingleRooms(id));
    }
  }, [id]);
  if (getallRoomisLoading) {
    return <Loader />;
  }
  return (
    <div>
      <Navbar currentUser={currentUser} />
      {/* <Hero room={room} /> */}
      {/* <RoomLists currentUser={currentUser} loading={loading} room={room} />
      <RecommendedList
        currentUser={currentUser}
        loading={loading}
        room={room}
      /> */}
      {/* <RoomLists currentUser={currentUser} loading={loading} room={room} />
      <RecommendedList
        currentUser={currentUser}
        loading={loading}
        room={room}
      /> */}
      <Footer />
    </div>
  );
}
