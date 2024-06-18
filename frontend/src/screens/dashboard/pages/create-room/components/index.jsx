"use client";
import React, { useState, useEffect } from "react";
import RoomForms from "./roomsform";
import RoomDetail from "./roomdetail";
import { useDispatch, useSelector } from "react-redux";
import { CreateRoom } from "@/features/room/roomReducer";
import Loader from "@/components/home/loader";
import { useNavigate } from "react-router-dom";
import { handleClearRoomAlert } from "@/features/room/roomSlice";
const DashboardIndex = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [images, setImages] = useState([]);

  const [features, setFeatures] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [rooms, setRooms] = useState(0);
  const [bathrooms, setBathRooms] = useState(0);
  const [description, setDescription] = useState("");
  const [shortdescription, setShortDescription] = useState("");

  const dispatch = useDispatch();
  const { creatingRoomisLoading, creatingRoomisSuccess } = useSelector(
    (store) => store.room
  );
  //  const [bookingdata, setBookingData] = useState(null);
  const roomData = {
    title: title,
    price: price,
    images: images,
    city: city,
    address: address,
    features: features,
    // amenities: amenities,
    bedroom: rooms,
    bathroom: bathrooms,
    description: description,
  };
  // console.log(roomData);
  const handleRoomCreation = () => {
    dispatch(CreateRoom(roomData));
  };
  useEffect(() => {
    dispatch(handleClearRoomAlert());
    if (creatingRoomisSuccess) {
      const timeout = setTimeout(() => {
        navigate(`/dashboard/rooms`);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [creatingRoomisSuccess, navigate]);
  return (
    <div className="w-full relative">
      <div className="w-full relative pb-20 flex flex-col gap-12">
        <div className="w-full grid md:grid-cols-2 md:items-center gap-4 justify-between">
          <h3 className="text-3xl lg:text-4xl font-booking_font4">
            Add Your Room
            <span className="block font-normal text-dark pt-2 text-base font-booking_font">
              The most important idea about this section is that it gives u
              ability to add your rooms. When adding your room product idea do
              not forget to fill out the forms else errors are bound to occur
            </span>
          </h3>
          <div className="flex items-center md:justify-end">
            <button
              disabled={creatingRoomisLoading}
              onClick={handleRoomCreation}
              className="btn text-sm p-3 px-8 text-white rounded-lg"
            >
              {creatingRoomisLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader type="dots" />
                  Room Creating
                </span>
              ) : (
                "Create Room"
              )}
            </button>
          </div>
        </div>
        <div className="w-full relative flex gap-8 flex-col-reverse lg:grid items-start lg:grid-cols-custom">
          <RoomForms
            description={description}
            setTitle={setTitle}
            title={title}
            setDescription={setDescription}
            setShortDescription={setShortDescription}
            shortdescription={shortdescription}
            setPrice={setPrice}
            price={price}
            rooms={rooms}
            setRooms={setRooms}
            setBathRooms={setBathRooms}
            bathrooms={bathrooms}
            setImages={setImages}
            images={images}
            features={features}
            setFeatures={setFeatures}
            setAmenities={setAmenities}
            amenities={amenities}
            setAddress={setAddress}
            address={address}
            city={city}
            setCity={setCity}
          />
          <div className="w-full md:w-[350px] relative lg:sticky top-[15%] left-0">
            <RoomDetail
              images={images}
              title={title}
              price={price}
              rooms={rooms}
              bathrooms={bathrooms}
              shortdescription={shortdescription}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardIndex;
