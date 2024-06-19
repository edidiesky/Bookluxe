
import React, { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { BiMinus, BiPlus, BiCheck } from "react-icons/bi";
import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";
import Loader from "../home/loader";
import { useDispatch, useSelector } from "react-redux";
export default function BookingReservationModal({ setModal, room }) {
  const { deleteRoomisLoading, deleteRoomisSuccess } = useSelector(
    (store) => store.room
  );

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [night, setNight] = useState(5);
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  // const [images, setImages] = useState([]);
  const [images, setImages] = useState([]);

  const [features, setFeatures] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [rooms, setRooms] = useState(0);
  const [bathrooms, setBathRooms] = useState(0);
  const [description, setDescription] = useState("");
  const [shortdescription, setShortDescription] = useState("");

  const dispatch = useDispatch();
  const handleClearAlert = () => {
    setModal({
      modal: false,
    });
  };
  const handleDeleteRoom = useCallback(() => {
  }, []);
  useEffect(() => {
    // dispatch(handleClearRoomAl());
  }, []);
  // useEffect(() => {
  //   // dispatch(handleClearRoomAlert());
  //   if (deleteRoomisSuccess) {
  //     setModal({
  //       modal: false,
  //     });
  //     dispatch(handleClearRoomAlert());
  //   }
  // }, [setModal, deleteRoomisSuccess]);

  return (
    <ReservationModalStyles
      as={motion.div}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        initial={{
          y: "100vh",
        }}
        animate={{
          y: "0",
          transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
        }}
        exit={{
          y: "100vh",
          transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
        }}
        className={"deleteCard gap-2"}
      >
        <div className="cross" onClick={handleClearAlert}>
          <RxCross2 />
        </div>
        <div className="deleteCardTop w-full sticky top-0 left-0 border-b p-8 pb-0 px-4 flex flex-col gap-4">
          <h3 className="text-xl font-bold font-booking_font_bold family1">
            BeachFront Oasis
            <span className="block font-font_booking_font font-normal text-sm text-grey">
              # 2937r4648hdd
            </span>
          </h3>
          <div className="flex items-center gap-4">
            <span className="p-3 px-8 font-booking_font_normal rounded-[4px] text-center bg-[#f5f5f5] text-xs">
              Pearl
            </span>
            <span className="p-3 px-8 font-booking_font_normal rounded-[4px] text-center text-white bg-[#0e7b10] text-xs">
              Fully Paid
            </span>
          </div>
          <div className="grid w-full gap-4 grid-cols-3">
            <div className="w-full border-b-2 border-[#0e7b10] pb-3 text-sm font-booking_font_bold">
              Booking Details
            </div>
          </div>
        </div>

        <div className="p-4 h-[300px] md:h-[350px] overflow-auto  px-4 grid w-full gap-8 md:grid-cols-3">
          <div className="w-full flex flex-col gap-8">
            <h3 className="text-sm w-full pb-4 border-b font-booking_font_normal family1">
              Room Terms
            </h3>
            <div className="w-full flex flex-col gap-4">
              <div className="w-full grid grid-cols-2 gap-4">
                <label
                  htmlFor="titlprice"
                  className="text-xs font-bold flex flex-col gap-2 font-booking_font_normal"
                >
                  From
                  <input
                    name="price"
                    value={price}
                    id="price"
                    type="number"
                    onChange={(e) => setPrice(parseFloat(e.target.value))}
                    className="text-xs w-full input"
                  />
                </label>
                <label
                  htmlFor="titlprice"
                  className="text-xs font-bold flex flex-col gap-2 font-booking_font_normal"
                >
                  To
                  <input
                    name="price"
                    value={price}
                    id="price"
                    type="number"
                    onChange={(e) => setPrice(parseFloat(e.target.value))}
                    className="text-xs w-full input"
                  />
                </label>
              </div>
              <div className="w-full flex flex-col gap-2">
                <h5 className="text-xs font-booking_font_normal">
                  Number of Nights
                </h5>
                <div
                  className="flex items-center justify-between border p-2 rounded-[5px]"
                  style={{ gap: "1rem" }}
                >
                  <button
                    onClick={() => setNight(night - 1)}
                    disabled={night === 0}
                    className="w-8 h-8 rounded-full flex bg-[#fafafa] items-center justify-center"
                  >
                    <BiMinus fontSize={"14px"} />
                  </button>{" "}
                  <h4 className="text-sm flex-1 text-center text-dark text-extra-bold">
                    {night}
                  </h4>
                  <button
                    // disabled={limit >= 6}
                    onClick={() => setNight(night + 1)}
                    className="w-8 h-8 rounded-full flex bg-[#fafafa] items-center justify-center"
                  >
                    <BiPlus fontSize={"14px"} />
                  </button>
                </div>
              </div>

              <div className="w-full flex flex-col gap-4 pt-2">
                <h3 className="text-sm w-full pb-4 border-b font-booking_font_normal family1">
                  Booking Status
                </h3>
                <div className="w-full grid grid-cols-2 gap-2">
                  <div className="text-xs p-4 bg-[#f5f5f5] font-bold flex items-center gap-4 font-booking_font_normal">
                    Fully Paid
                    <div className="w-4 h-4 flex items-center text-white justify-center rounded-full text-dark bg-[#0e7b10] text-end text-xs font-booking_font_normal">
                      <BiCheck />
                    </div>
                  </div>
                  <div className="text-xs p-4 bg-[#f5f5f5] font-bold flex items-center gap-4 font-booking_font_normal">
                    Down Payment Made
                    <div className="w-4 h-4 flex items-center text-white justify-center rounded-full text-dark bg-[#0e7b10] text-end text-xs font-booking_font_normal">
                      <BiCheck />
                    </div>
                  </div>
                  <div className="text-xs p-4 bg-[#f5f5f5] font-bold flex items-center gap-4 font-booking_font_normal">
                    Lack of Payment
                    <div className="w-4 h-4 flex items-center text-white justify-center rounded-full text-dark bg-[#0e7b10] text-end text-xs font-booking_font_normal">
                      <BiCheck />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* room price */}
          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex flex-col gap-8">
              <h3 className="text-sm w-full pb-4 border-b font-booking_font_normal family1">
                Room Price
              </h3>
              <div className="w-full flex flex-col gap-4">
                <label
                  htmlFor="titlprice"
                  className="text-xs font-bold flex flex-col gap-2 font-booking_font_normal"
                >
                  Final Price
                  <input
                    name="price"
                    value={price}
                    id="price"
                    type="number"
                    onChange={(e) => setPrice(parseFloat(e.target.value))}
                    className="text-xs w-full input"
                  />
                </label>

                <div className="text-xs font-bold flex flex-col gap-2 font-booking_font_normal">
                  Payment on Place
                  <div className="p-4 text-dark rounded-[5px] bg-[#f5f5f5] text-end text-xs font-booking_font_normal">
                    #500,000
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4 pt-2">
              <h3 className="text-sm w-full pb-4 border-b font-booking_font_normal family1">
                Number of Guests
              </h3>
              <div className="w-full grid grid-cols-2 gap-4">
                <div className="w-full flex text-xs font-booking_font_normal flex-col gap-2">
                  Adults
                  <div
                    className="flex items-center justify-between border p-2 rounded-[5px]"
                    style={{ gap: "1rem" }}
                  >
                    <button
                      onClick={() => setNight(night - 1)}
                      disabled={night === 0}
                      className="w-8 h-8 rounded-full flex bg-[#fafafa] items-center justify-center"
                    >
                      <BiMinus fontSize={"14px"} />
                    </button>{" "}
                    <h4 className="text-xs flex-1 text-center text-dark text-extra-bold">
                      {night}
                    </h4>
                    <button
                      // disabled={limit >= 6}
                      onClick={() => setNight(night + 1)}
                      className="w-8 h-8 rounded-full flex bg-[#fafafa] items-center justify-center"
                    >
                      <BiPlus fontSize={"14px"} />
                    </button>
                  </div>
                </div>
                <div className="w-full flex text-xs font-booking_font_normal flex-col gap-2">
                  Children
                  <div
                    className="flex items-center justify-between border p-2 rounded-[5px]"
                    style={{ gap: "1rem" }}
                  >
                    <button
                      onClick={() => setNight(night - 1)}
                      disabled={night === 0}
                      className="w-8 h-8 rounded-full flex bg-[#fafafa] items-center justify-center"
                    >
                      <BiMinus fontSize={"14px"} />
                    </button>{" "}
                    <h4 className="text-sm flex-1 text-center text-dark text-extra-bold">
                      {night}
                    </h4>
                    <button
                      // disabled={limit >= 6}
                      onClick={() => setNight(night + 1)}
                      className="w-8 h-8 rounded-full flex bg-[#fafafa] items-center justify-center"
                    >
                      <BiPlus fontSize={"14px"} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Client Profile */}
          <div className="w-full flex flex-col gap-8">
            <h3 className="text-sm w-full pb-4 border-b font-booking_font_normal family1">
              Client Profile
            </h3>
            <div className="w-full flex flex-col gap-4"></div>
          </div>
        </div>

        <div className="deleteCardBottom py-2 w-full flex flex-row gap-2 items-center md:justify-end px-4">
          <button
            className="family1 font-booking_font_normal flex items-center justify-center text-sm"
            onClick={handleClearAlert}
          >
            Cancel
          </button>
          <button
            disabled={deleteRoomisLoading}
            onClick={handleDeleteRoom}
            className="deleteBtn family1 font-booking_font_normal flex items-center justify-center text-sm"
            // onClick={() => dispatch(AdminDeleteUserProfile({ Detailsdata: id }))}
          >
            {deleteRoomisLoading ? (
              <span className="flex items-center justify-center gap-2">
                <Loader type="dots" />
                Deleting in progress
              </span>
            ) : (
              " Delete Reservation"
            )}
          </button>
        </div>
      </motion.div>
    </ReservationModalStyles>
  );
}

const ReservationModalStyles = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  display: flex;
  z-index: 4900;
  align-items: center;
  justify-content: center;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
  padding:2rem 0;
  .deleteCard {
    max-width: 650px;
    min-width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.4);
    position: relative;
    @media (max-width: 980px) {
      max-width: 90%;
      min-width: 90%;
    }
    .cross {
      position: absolute;
      right: 15px;
      top: 2%;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &:hover {
        background: #eee;
      }
      svg {
        font-size: 20px;
      }
    }
    .deleteCardBottom {
      display: flex;
      gap: 1.5rem;
      button {
        padding: 0.5rem 2rem;
        min-height: 46px;
        border: none;
        font-weight: 600;
        background: #eee;
        color: #000;
        outline: none;
        border-radius: 10px;
        cursor: pointer;
        text-transform: none;
        &:hover {
          background: #c4c4c4;
        }
        &.deleteBtn {
          background: var(--red);
          color: #fff;
          &:hover {
            opacity: 0.8;
            color: #fff;
          }
        }
      }
    }
    .deleteCardCenter {
      padding: 2rem 0;
      width: 100%;
      background: var(--grey-3);
      border-left: 5px solid var(--red);
      display: flex;
      align-items: center;
      svg {
        font-size: 2rem;
        color: var(--red);
      }
    }

    .deleteCardTop {
      display: flex;
      flex-direction: column;
    }
  }
`;
