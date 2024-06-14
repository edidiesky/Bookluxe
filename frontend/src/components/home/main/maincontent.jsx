"use client";
import React, { useEffect } from "react";
import { BiCheck, BiChevronDown } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { apartmentDataList } from "../../../data/apartmentData";
import RoomCard from "../../common/RoomCard";
import { getAllRooms } from "../../../features/room/roomReducer";
const MainContent = () => {
  return (
    <div className="w-full flex flex-col gap-8">
      <Hero />
      <About />
      <Collections />
      <RoomsPrice />
      <RoomStructure />
      <RoomsBanner />
      <RoomFlex />
    </div>
  );
};

const Hero = () => {
  return (
    <div
      className="w-full min-h-[100vh] py-32 relative flex items-center justify-center
   gap-8"
    >
      <div className="w-full h-full z-30 bg-[rgba(0,0,0,.5)] absolute top-0 left-0"></div>
      <img
        src="/images/hazel_1.jpeg"
        alt=""
        className="absolute z-10 object-cover top-0 left-0 h-full w-full"
      />
      <div
        className="w-full z-40 flex items-center justify-center flex-col
       gap-4"
      >
        <h1 className="text-white text-center leading-[1.3] text-6xl md:text-7xl font-booking_font4">
          <span
            style={{ letterSpacing: "4px" }}
            className="text-xs pb-12 font-semibold uppercase block font-booking_font"
          >
            Luxury Home & Best Resort
          </span>
          Enjoy A Luxury <br /> Experience
        </h1>
        <div className="w-full items-center justify-center flex">
          <div
            style={{ letterSpacing: "4px" }}
            className="btn btn_2 text-xs text-white uppercase px-12 py-6"
          >
            Rooms & Suites
          </div>
        </div>

        <div className="w-[95%] lg:w-full py-4 lg:flex-row flex-col items-center justify-center flex">
          <div className="w-full lg:w-[700px] py-8  min-h-[160px] bg-white flex items-center justify-center">
            <span className="pr-3 md:pr-8 border-r">
              <span
                style={{ letterSpacing: "4px" }}
                className="text-[8px] md:text-xs block uppercase leading-[1.5] text-center text-dark font-normal"
              >
                CHECK IN
              </span>

              <div className="flex items-center gap-2">
                <span
                  style={{ letterSpacing: "4px" }}
                  className="text-2xl pt-3 md:text-6xl block font-booking_font4 uppercase leading-[1.5] text-center text-dark"
                >
                  19
                </span>
                <span
                  style={{ letterSpacing: "4px" }}
                  className="text-[8px] md:text-xs uppercase leading-[1.5] flex flex-col text-dark font-normal"
                >
                  JUN
                  <BiChevronDown fontSize={"24px"} />
                </span>
              </div>
            </span>
            <span className="px-4 md:px-8 border-r">
              <span
                style={{ letterSpacing: "4px" }}
                className="text-[8px] md:text-xs block uppercase leading-[1.5] text-center text-dark font-normal"
              >
                CHECK OUT
              </span>

              <div className="flex items-center gap-2">
                <span
                  style={{ letterSpacing: "4px" }}
                  className="text-2xl pt-3 md:text-6xl block font-booking_font4 uppercase leading-[1.5] text-center text-dark"
                >
                  19
                </span>
                <span
                  style={{ letterSpacing: "4px" }}
                  className="text-[8px] md:text-xs uppercase leading-[1.5] flex flex-col text-dark font-normal"
                >
                  JUN
                  <BiChevronDown fontSize={"24px"} />
                </span>
              </div>
            </span>
            <span className="px-4 md:px-8">
              <span
                style={{ letterSpacing: "4px" }}
                className="text-[8px] md:text-xs block uppercase leading-[1.5] text-center text-dark font-normal"
              >
                Guests
              </span>

              <div className="flex items-center gap-2">
                <span
                  style={{ letterSpacing: "4px" }}
                  className="text-2xl pt-3 md:text-6xl block font-booking_font4 uppercase leading-[1.5] text-center text-dark"
                >
                  19
                </span>
              </div>
            </span>
          </div>
          <div className="w-full lg:w-[250px] bg-[var(--dark-1)] min-h-[100px] md:min-h-[160px] flex items-center justify-center">
            <h5
              style={{ letterSpacing: "5px" }}
              className="text-[10px] md:text-sm uppercase leading-[1.5] text-center text-white font-semibold"
            >
              check <br /> availability
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
const About = () => {
  return (
    <div className="w-full flex py-20 flex-col gap-8">
      <div className="w-[90%] mx-auto gap-24 md:gap-16 max-w-custom_1 lg:items-center grid lg:grid-cols-custom_4">
        <div className="w-full lg:w-[450px] h-[400px] md:h-[650px] relative">
          <img
            src="/images/hazel_4.jpeg"
            alt=""
            className="w-full absolute h-full object-cover"
          />
          <div className="absolute -bottom-[6%] bg-[var(--gold-1)] -left-[1%] lg:-left-[10%] min-h-[190px] w-[180px] flex items-center justify-center">
            <div className="text-5xl text-center flex flex-col gap-1 uppercase text-white font-booking_font4">
              + 8
              <br />{" "}
              <span
                style={{ letterSpacing: "3px" }}
                className="text-xs font-booking_font uppercase"
              >
                Big Rooms
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-8">
          <span
            style={{ letterSpacing: "3px" }}
            className="text-xs font-booking_font uppercase"
          >
            HOTEL BAYVIEW
          </span>
          <h2 className="text-5xl md:text-7xl leading-[1.2] font-booking_font4">
            Relax in our <br /> Home Resort
          </h2>
          <span className="text-base font-booking_font">
            Quisque eu euismod arcu. Morbi et dapibus diam, sed interdum velit.
            Proin tempor nunc vel nisl condimentum, nec tempor risus. Quisque eu
            euismod arcu. Morbi et dapibus diam, sed interdum velit. Proin
            tempor nunc vel nisl condimentum, nec tempor risus.
          </span>
          <span className="text-base font-booking_font">
            Quisque eu euismod arcu. Morbi et dapibus diam, sed interdum velit.
            Proin tempor nunc vel nisl condimentum, nec tempor risus. Quisque eu
            euismod arcu. Morbi et dapibus diam, sed interdum velit. Proin
            tempor nunc vel nisl condimentum, nec tempor risus.
          </span>
        </div>
      </div>
    </div>
  );
};

const Collections = () => {
  const dispatch = useDispatch();
  const { rooms, getallRoomisLoading } = useSelector((store) => store.room);

  useEffect(() => {
    dispatch(getAllRooms());
  }, []);
  return (
    <div className="w-full py-16 flex flex-col gap-32 md:gap-40">
      <div className="w-[90%] mx-auto gap-4 max-w-custom_1 grid md:grid-cols-2 lg:grid-cols-3">
        {rooms?.map((apartment, index) => {
          return <RoomCard key={index} apartment={apartment} />;
        })}
      </div>

      <div
        className="w-[90%] mx-auto lg:items-center gap-16 md:gap-24 max-w-custom_1 grid 
      lg:grid-cols-custom_4"
      >
        <div className="w-full flex flex-col gap-8">
          <span
            style={{ letterSpacing: "3px" }}
            className="text-xs font-booking_font uppercase"
          >
            Carry out a view of
          </span>
          <h2 className="text-5xl md:text-7xl leading-[1.2] font-booking_font4">
            Our Amazing <br /> Home Resort
          </h2>
          <span className="text-base w-[90%] font-booking_font">
            Quisque eu euismod arcu. Morbi et dapibus diam, sed interdum velit.
            Proin tempor nunc vel nisl condimentum, nec tempor risus. Quisque eu
            euismod arcu. Morbi et dapibus diam, sed interdum velit. Proin
            tempor nunc vel nisl condimentum, nec tempor risus.
          </span>
          <span className="text-base w-[90%] font-booking_font">
            Quisque eu euismod arcu. Morbi et dapibus diam, sed interdum velit.
            Proin tempor nunc vel nisl condimentum, nec tempor risus. Quisque eu
            euismod arcu. Morbi et dapibus diam, sed interdum velit. Proin
            tempor nunc vel nisl condimentum, nec tempor risus.
          </span>
        </div>
        <div className=" w-full lg:w-[450px] h-[400px] md:h-[650px] relative">
          <img
            src="/images/hazel_2.jpeg"
            alt=""
            className="w-full absolute h-full object-cover"
          />
          <div className="absolute -bottom-[6%] bg-[var(--gold-1)] -left-[1%] lg:-left-[10%] min-h-[190px] w-[180px] flex items-center justify-center">
            <div className="text-5xl text-center flex flex-col gap-1 uppercase text-white font-booking_font4">
              + 8
              <br />{" "}
              <span
                style={{ letterSpacing: "3px" }}
                className="text-xs font-booking_font uppercase"
              >
                Big Rooms
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-[90%] md:w-[85%] mx-auto gap-8 md:gap-32 max-w-custom_1 grid 
      lg:grid-cols-2"
      >
        <div className=" w-full flex md:flex-row flex-col items-center md:justify-center gap-8 py-12 px-8 bg-white shadow-2xl rounded-xl relative">
          <img
            src="/images/hazel_2.jpeg"
            alt=""
            className="w-[130px]  md:-ml-24 h-[130px] rounded-full object-cover"
          />
          <div className=" flex items-center flex-col justify-center">
            <h4 className="text-3xl text-dark font-booking_font4">
              Reception 24h / 7 Days
              <span className="block text-base pt-2 font-booking_font text-start text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec
              </span>
            </h4>
          </div>
        </div>
        <div className=" w-full flex md:flex-row flex-col items-center md:justify-center gap-8 py-12 px-8 bg-white shadow-2xl rounded-xl relative">
          <img
            src="/images/hazel_3.jpeg"
            alt=""
            className="w-[130px]  md:-ml-24 h-[130px] rounded-full object-cover"
          />
          <div className=" flex items-center flex-col justify-center">
            <h4 className="text-3xl text-dark font-booking_font4">
              Reservation Online
              <span className="block text-base pt-2 font-booking_font text-start text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec
              </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

const RoomStructure = () => {
  const roomService = [
    {
      icon: "https://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/hotel/wp-content/uploads/sites/2/2022/04/icon-16.png",
      title: "Smart Key",
    },
    {
      icon: "https://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/hotel/wp-content/uploads/sites/2/2022/04/icon-15.png",
      title: "Store Luggage",
    },
    {
      icon: "https://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/hotel/wp-content/uploads/sites/2/2022/04/icon-17.png",
      title: "Room Service",
    },
    {
      icon: "https://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/hotel/wp-content/uploads/sites/2/2022/04/icon-18.png",
      title: "Disinfection",
    },
  ];
  return (
    <div className="w-full flex py-20 flex-col gap-20">
      <div className="w-[90%] mx-auto gap-24 md:gap-16 md:items-center max-w-custom_1 grid lg:grid-cols-2">
        <div className="w-full flex items-center gap-4 relative">
          <div className="w-full relative grid md:grid-cols-2 gap-12">
            <img
              src="/images/hazel_4.jpeg"
              alt=""
              className="object-cover md:min-h-[550px]"
            />
            <div className="min-h-[240px] shadow-2xl md:absolute px-8 left-[40%] top-[30%] bg-white flex flex-col gap-4 items-center justify-center">
              <div className="text-3xl font-bold text-center flex flex-col gap-1 uppercase text-dark font-booking_font4">
                23
                <br />{" "}
                <span
                  style={{ letterSpacing: "3px" }}
                  className="text-xs font-normal font-booking_font uppercase"
                >
                  ROOMS
                </span>
              </div>
              <div className="text-3xl font-bold text-center flex flex-col gap-1 uppercase text-dark font-booking_font4">
                12
                <br />{" "}
                <span
                  style={{ letterSpacing: "3px" }}
                  className="text-xs font-normal font-booking_font uppercase"
                >
                  suites
                </span>
              </div>
              <div className="text-3xl font-bold text-center flex flex-col gap-1 uppercase text-dark font-booking_font4">
                24
                <br />{" "}
                <span
                  style={{ letterSpacing: "3px" }}
                  className="text-xs font-normal font-booking_font uppercase"
                >
                  h /24
                </span>
              </div>
            </div>
            <img
              src="/images/hazel_4.jpeg"
              alt=""
              className="object-cover md:min-h-[550px]"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-8">
          <span
            style={{ letterSpacing: "3px" }}
            className="text-xs font-normal font-booking_font uppercase"
          >
            HOTEL FACILITIES
          </span>
          <h2 className="text-5xl md:text-7xl leading-[1.2] font-booking_font4">
            The Structure
          </h2>
          <span className="text-base leading-[1.6] font-booking_font">
            Quisque eu euismod arcu. Morbi et dapibus diam, sed interdum velit.
            Proin tempor nunc vel nisl condimentum, nec tempor risus. Quisque eu
            euismod arcu. Morbi et dapibus diam, sed interdum velit. Proin
            tempor nunc vel nisl condimentum, nec tempor risus.
          </span>
          <div className="flex flex-col gap-4 w-full">
            <div className="h-10 bg-[var(--gold-1)] px-4 text-white font-semibold text-sm w-[90%] flex items-center justify-between">
              <span className="">Room Service</span>
              <span className="">90%</span>
            </div>

            <div className="h-10 bg-[var(--dark-1)] px-4 text-white font-semibold text-sm w-[60%] flex items-center justify-between">
              <span className="">BreakFact Inclusion</span>
              <span className="">90%</span>
            </div>

            <div className="h-10 bg-[var(--dark-1)] px-4 text-white font-semibold text-sm w-[90%] flex items-center justify-between">
              <span className="">Laundry Service</span>
              <span className="">90%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] py-8 mx-auto gap-24 md:gap-16 md:items-center max-w-custom_1 grid md:grid-cols-2 lg:grid-cols-4">
        {roomService.map((room, index) => {
          return (
            <div key={index} className="flex items-center gap-4">
              <img src={room.icon} alt="room_images_icon" className="w-20" />
              <span className="text-xl font-booking_font4 font-bold">
                {room.title}
                <span className="block text-sm text-grey font-normal font-booking_font">
                  Lorem ipsum dolor sit amet
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const RoomsPrice = () => {
  const roompriceData = [
    {
      title: "Single Room",
      background: "var(-white-1)",
      price: 55,
      amenties: [
        "Free Wifi",
        "Free Wifi",
        "Free Wifi",
        "Free Wifi",
        "Free Wifi",
      ],
    },
    {
      title: "Small Suite",
      background: "var(-gold-1)",
      price: 55,
      amenties: [
        "Free Wifi",
        "Free Wifi",
        "Free Wifi",
        "Free Wifi",
        "Free Wifi",
      ],
    },
    {
      title: "Apartment",
      background: "var(-white-1)",
      price: 55,
      amenties: [
        "Free Wifi",
        "Free Wifi",
        "Free Wifi",
        "Free Wifi",
        "Free Wifi",
      ],
    },
  ];
  return (
    <div className="w-full min-h-[100vh] py-40 relative flex items-center justify-center gap-8">
      <img
        src="/images/hazel_11.jpeg"
        alt=""
        className="w-full h-full absolute top-0 left-0 object-cover"
      />
      <div className="w-full h-full z-30 bg-[rgba(0,0,0,.5)] absolute top-0 left-0"></div>
      <div
        className="w-full z-40 flex items-center justify-center flex-col
       gap-16"
      >
        <h1 className="text-white text-center leading-[1.3] text-6xl md:text-7xl font-booking_font4">
          <span
            style={{ letterSpacing: "4px" }}
            className="text-xs pb-6 font-semibold uppercase block font-booking_font"
          >
            OUR ROOM PRICES
          </span>
          The Best Prices
        </h1>

        <div className="w-[90%] mx-auto py-4 lg:flex-row gap-4 flex-col items-center justify-center flex">
          {roompriceData.map((room, index) => {
            return (
              <div
                key={index}
                className={`w-full ${
                  index === 1
                    ? "bg-[var(--gold-1)] text-white md:scale-[1.12]"
                    : "bg-white"
                } flex items-center justify-center flex-col gap-6 py-16`}
              >
                <h3 className="text-3xl font-booking_font4">{room?.title}</h3>
                <h3 className="text-6xl md:text-7xl font-booking_font4">
                  <span className="text-xl">$</span>
                  {room?.price}
                  <span className="pl-3 text-xl">/ night</span>
                </h3>
                <div className="flex flex-col gap-4">
                  {room.amenties.map((am, index) => {
                    return (
                      <div
                        key={index}
                        className="w-full flex items-center gap-4 text-base"
                      >
                        <BiCheck /> {am}
                      </div>
                    );
                  })}
                </div>
                <div className="btn btn_2 py-3 mt-6 px-8 text-sm">
                  More Info
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
const RoomsBanner = () => {
  return (
    <div
      className="w-full min-h-[100vh] py-32 relative flex items-center justify-center
   gap-8"
    >
      <div className="w-full h-full z-30 bg-[rgba(0,0,0,.6)] absolute top-0 left-0"></div>
      <img
        src="/images/hazel_8.jpeg"
        alt=""
        className="absolute z-10 object-cover top-0 left-0 h-full w-full"
      />
      <div
        className="w-[90%] max-w-custom mx-auto z-40 grid items-center lg:grid-cols-2
       gap-12"
      >
        <div className="flex flex-col gap-6">
          <h1 className="text-white text-start leading-[1.3] text-6xl md:text-7xl font-booking_font4">
            <span
              style={{ letterSpacing: "4px" }}
              className="text-xs pb-8 font-semibold uppercase block font-booking_font"
            >
              BUS STATION NEAR
            </span>
            Enjoy A Luxury <br /> Experience
            <span className="block py-6 text-base leading-[1.6] font-normal font-booking_font">
              Suspendisse commodo bibendum purus at hendrerit. Vivamus aliquam
              bibendum fringilla. Praesent cursus felis nunc, quis vulputate
              sapien posuere vitae. Aliquam erat volutpat. Cras egestas porta
              massa eget pulvinar. Cras non enim et dui pharetra hendrerit
              mattis.
            </span>
          </h1>
          <div className="w-full items-start flex">
            <div
              style={{ letterSpacing: "4px" }}
              className="btn btn_2 text-xs text-white uppercase px-12 py-6"
            >
              Rooms & Suites
            </div>
          </div>
        </div>

        <div className="w-[95%] lg:w-full py-4 gap-8 flex-col items-start flex">
          {/* <div className="w-64 text-2xl text-white h-64 rounded-full items-center justify-center flex bg-[var(--gold-1)]">
            <span>50%</span>
          </div> */}
          <img
            src="https://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/hotel/wp-content/uploads/sites/2/2022/03/towels-1024x837.png"
            alt=""
            className="w-[70%]"
          />
        </div>
      </div>
    </div>
  );
};

const RoomFlex = () => {
  return (
    <div className="w-full flex py-32 flex-col gap-40">
      <div className="w-[90%] mx-auto gap-24 md:gap-24 md:items-center max-w-custom_1 flex md:justify-center">
        <h1 className="text-dark text-center leading-[1.3] text-5xl md:text-6xl font-booking_font4">
          <span
            style={{ letterSpacing: "4px" }}
            className="text-xs pb-12 font-semibold uppercase block font-booking_font"
          >
            Luxury Home & Best Resort
          </span>
          Enjoy A Luxury <br /> Experience
          <span className="text-sm w-full md:w-[600px] md:mx-auto pt-6 font-normal block font-booking_font">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
            reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ad, reprehenderit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ad, reprehenderit. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ad, reprehenderit.
          </span>
        </h1>
      </div>
      <div className="w-[90%] mx-auto gap-24 md:gap-24 md:items-center max-w-custom_1 grid lg:grid-cols-custom_4">
        <div className="w-full lg:w-[450px] h-[400px] md:h-[550px] relative">
          <img
            src="/images/pearl_1.jpeg"
            alt=""
            className="w-full absolute h-full object-cover"
          />
          <div className="absolute -bottom-[6%] bg-[var(--gold-1)] -left-[1%] lg:-left-[10%] min-h-[190px] w-[180px] flex items-center justify-center">
            <div className="text-5xl text-center flex flex-col gap-1 uppercase text-white font-booking_font4">
              + 8
              <br />{" "}
              <span
                style={{ letterSpacing: "3px" }}
                className="text-xs font-booking_font uppercase"
              >
                Big Rooms
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-8">
          <span
            style={{ letterSpacing: "3px" }}
            className="text-xs font-booking_font uppercase"
          >
            enjoy your life
          </span>
          <h2 className="text-5xl md:text-7xl leading-[1.2] font-booking_font4">
            Flex your Life <br /> in our amazing <br /> Home Resort
          </h2>
          <span className="text-base leading-[1.5] font-booking_font">
            Quisque eu euismod arcu. Morbi et dapibus diam, sed interdum velit.
            Proin tempor nunc vel nisl condimentum, nec tempor risus. Quisque eu
            euismod arcu. Morbi et dapibus diam, sed interdum velit. Proin
            tempor nunc vel nisl condimentum, nec tempor risus.
          </span>
          <span className="text-base leading-[1.5] font-booking_font">
            Quisque eu euismod arcu. Morbi et dapibus diam, sed interdum velit.
            Proin tempor nunc vel nisl condimentum, nec tempor risus. Quisque eu
            euismod arcu. Morbi et dapibus diam, sed interdum velit. Proin
            tempor nunc vel nisl condimentum, nec tempor risus.
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
