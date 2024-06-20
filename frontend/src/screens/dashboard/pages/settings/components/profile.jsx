"use client";
import React, { useState } from "react";
import { BiCamera, BiLock, BiSearch, BiUser } from "react-icons/bi";
import { DashboardProfileInputData } from "@/constants/data/formdata";
import { RegisterUser } from "@/features/auth/authReducer";

import { useSelector } from "react-redux";

const Profile = () => {
  const [index,setIndex] = useState(0)
  const [formvalue, setFormValue] = useState({
    name: "",
    username: "",
    email: "",
    location: "",
  });
  const handleFormChange = (e) => {
    setFormValue({
      ...formvalue,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="w-full md:grid-cols-custom_2 relative items-start gap-8 grid">
      <div className="w-full sticky top-[10%] py-8 bg-white border rounded-[20px]">
        <div
          onClick={() => setIndex(0)}
          className={`px-6  ${
            index === 0 ? "bg-[#fafafa] border-r-4" : " bg-white border-0"
          }  text-base font-booking_font4 py-4 flex items-center justify-start gap-4`}
        >
          <BiUser /> Profile Settings
        </div>

        <div
          onClick={() => setIndex(1)}
          className={`px-6  ${
            index === 1 ? "bg-[#fafafa] border-r-4" : " bg-white border-0"
          }  text-base font-booking_font4 py-4 flex items-center justify-start gap-4`}
        >
          <BiLock /> Password
        </div>
      </div>
      <>
        {index === 0 ? (
          <div className="w-full p-8 px-6 bg-white border rounded-[20px]">
            <div className="w-full flex flex-col gap-8">
              <div className="w-full flex items-center gap-8">
                <div className="w-32 h-32 relative">
                  <img
                    src="https://fundednext.fra1.digitaloceanspaces.com/dashboard/demo-avatar.jpg"
                    alt=""
                    className="w-full absolute object-cover h-full rounded-full"
                  />
                  <div className="absolute text-white text-2xl rounded-full border-4 border-[rgba(255,255,255,1)] flex items-center justify-center w-12 h-12 bottom-5 -right-5 bg-[#5542F6]">
                    <BiCamera />
                  </div>
                </div>
                <div
                  style={{ letterSpacing: "2px" }}
                  className="btn btn-2 text-xs font-booking_font p-4 px-6 uppercase font-normal rounded-[40px] text-white"
                >
                  Upload Now
                </div>
              </div>
              <form className="w-full grid grid-cols-1 gap-4">
                {DashboardProfileInputData?.map((input, index) => {
                  return (
                    <label
                      key={index}
                      htmlFor={input.label}
                      className="text-sm font-booking_font_normal rounded-[10px] flex flex-col gap-2 text-dark"
                    >
                      <span className="text-grey font-bold">{input.label}</span>
                      <div className="input flex item-center gap-1">
                        {/* <MdOutlineMailOutline fontSize={'18px'} className="text-grey" /> */}
                        <input
                          className="w-full rounded-2xl text-dark font-normal text-sm"
                          required={true}
                          name={input?.name}
                          id={input.label}
                          value={formvalue[input.name]}
                          type={input.type}
                          placeholder={input.label}
                          onChange={handleFormChange}
                        ></input>
                      </div>
                    </label>
                  );
                })}

                <div className="flex mt-8">
                  <div
                    style={{ letterSpacing: "2px" }}
                    className="btn btn-2 text-xs font-booking_font p-4 px-6 uppercase font-normal rounded-[40px] text-white"
                  >
                    Save Changes
                  </div>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="w-full p-8 px-6 bg-white border rounded-[20px]">
            <div className="w-full flex flex-col gap-8">
              <div className="w-full flex items-center gap-8">
               <h4 className="text-xl font-booking_font4">
                Change Password
               </h4>
              </div>
              <form className="w-full grid grid-cols-1 gap-4">
                {DashboardProfileInputData?.map((input, index) => {
                  return (
                    <label
                      key={index}
                      htmlFor={input.label}
                      className="text-sm font-booking_font_normal rounded-[10px] flex flex-col gap-2 text-dark"
                    >
                      <span className="text-grey font-bold">{input.label}</span>
                      <div className="input flex item-center gap-1">
                        {/* <MdOutlineMailOutline fontSize={'18px'} className="text-grey" /> */}
                        <input
                          className="w-full rounded-2xl text-dark font-normal text-sm"
                          required={true}
                          name={input?.name}
                          id={input.label}
                          value={formvalue[input.name]}
                          type={input.type}
                          placeholder={input.label}
                          onChange={handleFormChange}
                        ></input>
                      </div>
                    </label>
                  );
                })}

                <div className="flex mt-8">
                  <div
                    style={{ letterSpacing: "2px" }}
                    className="btn btn-2 text-xs font-booking_font p-4 px-6 uppercase font-normal rounded-[40px] text-white"
                  >
                    Save Changes
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default Profile;
