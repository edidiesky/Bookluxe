const Newsletter = () => {
  return (
    <div
      className="w-full mt-12 py-32 relative flex items-center justify-center
   gap-8"
    >
      <div className="w-full h-full z-30 bg-[rgba(0,0,0,.6)] absolute top-0 left-0"></div>
      <img
        src="https://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/hotel/wp-content/uploads/sites/2/2022/03/parallax-5.jpeg"
        alt=""
        className="absolute z-10 object-cover top-0 left-0 h-full w-full"
      />
      <div
        className="w-[90%] mx-auto max-w-custom_1 z-40 flex items-center justify-center flex-col
       gap-4"
      >
        <h1 className="text-white text-center leading-[1.3] text-5xl md:text-6xl font-booking_font4">
          <span
            style={{ letterSpacing: "4px" }}
            className="text-base pb-5 font-semibold uppercase block font-booking_font"
          >
            get updates regularly
          </span>
          Subscribe to our Newsletter
          <span className="text-sm w-full md:w-[600px] md:mx-auto pt-6 font-normal block font-booking_font">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
            reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ad, reprehenderit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ad, reprehenderit. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ad, reprehenderit.
          </span>
        </h1>
        <div className="w-[90%] mt-8 md:w-[500px] items-center justify-center flex">
          <input
            type="text"
            placeholder="Your Email address"
            className="input text-base w-full flex items-center"
          />
        </div>
      </div>
    </div>
  );
};


export default Newsletter