import React from "react";
import { Calendar, Stat, XXXWhite } from "./Icons";
import UploadButton from "./UploadButton";

type Props = {
  name?: string;
};

const Banner = ({ name }: Props) => {
  return (
    <div className="flex flex-col items-center md:mt-10 mt-0 w-full">
      {/* Upload Button */}
      <UploadButton />
      {/* Banner Boxes Starts */}
      <div className="mt-5 border-[2px] border-black rounded-lg w-full flex md:flex-row flex-col">
        {/* Banner Box 1 */}
        <div className="flex w-full">
          {/* Check Stats Starts */}
          <div className="bg-secondary h-[121px] w-11/12 polygon flex items-center pl-6 space-x-2 md:rounded-none rounded-bl-lg">
            {/* Stats Icon */}
            <Stat />
            <h3 className="text-white text-xl font-rota_extrabold">
              Chek stats
            </h3>
          </div>
          {/* Check Stats End */}
          {/* Gold Member Starts */}
          <div className="w-6/12 flex flex-col items-center justify-center mt-1">
            <p className="text-dark_gray text-[14px] font-rota_semibold">
              Current plan
            </p>
            <p className="font-bold text-xl text-black font-rota_extrabold">
              Gold Member
            </p>
          </div>
          {/* Gold Member Ends */}
        </div>
        {/* Banner Box  2 */}
        <div className="flex w-full">
          {/* Gold Member Starts */}
          <div className="w-6/12 flex justify-end items-center p-4">
            <div className="flex flex-col">
              <p className="text-dark_gray text-[14px] font-rota_semibold">
                Payment Type
              </p>
              <p className="font-bold text-xl text-black font-rota_extrabold">
                Onetime
              </p>
              <span className="flex items-center">
                <p className="text-dark_gray font-rota_semibold text-sm">
                  Paypal
                </p>
                <span className="font-rota_bold text-blue underline text-[15px] ml-2">
                  change
                </span>
              </span>
            </div>
          </div>
          {/* Gold Member Ends */}
          {/* Redeem  Starts */}
          <div className="bg-secondary h-[121px] w-11/12 flex justify-center items-center space-x-3 pl-5 md:rounded-none rounded-tr-xl polygon2">
            {/* xxx Icon */}
            <XXXWhite />
            <h3 className="font-rota_bold text-white text-xl mt-3">
              Redeem
              <br />
              Codes
            </h3>
          </div>
          {/* Redeem End */}
        </div>
      </div>
      {/* Banner Boxes Ends */}
      {/* Calendar */}
      <div className="flex md:justify-end justify-center w-full mt-[14px]">
        <div className="flex items-center justify-center space-x-2 w-[104px] h-[29px] border-[1px] border-gray rounded">
          <p className="text-[12px] font-rota_black">March 2020</p>
          {/* Calendar Icon */}
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default Banner;
