"use client";
import React, { useCallback } from "react";
import { BiSearch, BiUpload } from "react-icons/bi";
const ImageUpload = ({ images, setImages }) => {
  const handleUpload = useCallback(
    (result) => {
      setImages([...images, result.info?.secure_url]);
    },
    [setImages]
  );
  return (
    <div className="w-full bg-[#fff] border p-6 px-2 rounded-[10px]">
      <div className="w-[95%] md:w-[90%] mx-auto flex flex-col gap-8">
        <div className="w-full flex items-center justify-between">
          <h4 className="text-2xl font-booking_font_bold font-bold">
            Room Images
            <span className="font-normal font-booking_font text-base block">
              Share what makes your rooms images special.
            </span>
          </h4>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-col gap-4 text-sm font-booking_font_bold">
            <span>Photos</span>
            {images.length >0 ? (
              <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-2">
                {images.map((image, index) => {
                  return (
                    <div className="w-full border p-2">
                      <img
                        alt="Cotion"
                        loading="lazy"
                        src={images}
                      />
                    </div>
                  );
                })}
              </div>
              // <div className="w-full border p-2">
              //   <img
              //     alt="Cotion"
              //     width={0}
              //     sizes="100vw"
              //     height={0}
              //     loading="lazy"
              //     src={images}
              //   />
              // </div>
            ) : (
              // <CldUploadWidget
              //   multiple
              //   onSuccess={handleUpload}
              //   uploadPreset="dl93zl9fn"
              //   folder="uploads"
              //   sources={["local", "url", "camera"]}
              // >
              //   {({ open }) => {
              //     return (
              //       <div className="w-full bg-[#fafafa] rounded-lg flex items-center justify-center h-[300px]">
              //         <div
              //           onClick={() => open()}
              //           className="text-sm font-bold cursor-pointer flex items-center shadow-xl border rounded-lg justify-center bg-white p-4 gap-3 font-booking_font_bold"
              //         >
              //           <BiUpload /> Select the photos for your room
              //         </div>
              //       </div>
              //     );
              //   }}
              // </CldUploadWidget>
              <div className="w-full"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
