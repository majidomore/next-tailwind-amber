import { NextPage } from "next";
import React from "react";
import { Down } from "~/components/Icons";
import ManageCTA2 from "~/components/ManageCTA2";

const ManageCta2: NextPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center md:w-[469.8px] md:pb-96">
        <div className="ml-auto sm:ml-0 sm:-mr-[600px]">
          <button className="border-2 border-black w-[31px] mt-4 font-bold text-[17.82px]">
            X
          </button>
        </div>
        <div className="input px-2 h-[45px] mt-5 flex justify-between items-center">
          <input
            type="text"
            className="border-0 h-full text-dark_grey font-rota_semibold"
            placeholder="Select your goal"
          />
          <div className="flex items-center whitespace-nowrap">
            <p className="text-[13.05px] text-dark_grey font-rota_bold mr-2 mt-1">
              Promote Link / Grow Email List
            </p>
            <Down />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[10px] h-[97px] mt-5 w-full">
          <div className="border-[0.87px] border-black"></div>
          <div className="border-[0.87px] border-black"></div>
          <div className="border-[0.87px] border-black"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 w-full">
          <div className="flex items-center justify-center border-[0.87px] border-black rounded-[4.35px] mt-5 p-1 md:pr-5 px-5 md:w-[230px] w-full">
            <input
              type="text"
              className="border-0 h-full font-rota_bold text-[13.92px]"
              placeholder="Background Color "
            />
            <p className="text-[12.82px] font-rota_bold">FFFFFF</p>
          </div>
          <div className="mt-5 h-[33.06px] md:h-11 bg-nevada w-full md:w-[230px] flex items-center justify-center text-white font-rota_semibold rounded-[4.35px] whitespace-nowrap">
            <input type="file" className="hidden w-full" id="upload-bg" />
            <label htmlFor="upload-bg" className="">
              or upload background Image
            </label>
          </div>
        </div>
        <ManageCTA2 />
      </div>
    </div>
  );
};

export default ManageCta2;
