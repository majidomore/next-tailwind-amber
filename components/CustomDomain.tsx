import React from "react";
import { ChevronRight } from "./Icons";

type Props = {
  name?: string;
};

const CustomDomain = ({ name }: Props) => {
  return (
    <div className="border-[1px] border-grey h-[192px]">
      <div className="h-[35px] bg-flow_blue flex items-center justify-between px-5">
        <p className="font-rota_black">Setup custom domain by adding cNAME</p>
        <ChevronRight />
      </div>
      <div className="p-2 px-6">
        <div className="bg-dark_yellow h-[30px] w-[33.91px] ml-auto"></div>
        <div className="flex items-center space-x-3 mt-2">
          <input
            type="password"
            placeholder="Enter your domain"
            className="border-0 bg-aqua_haze w-full h-[42px] rounded-md mt-2 font-rota_semibold text-[17px] pl-6"
          />
          <button className="bg-light_indigo text-indigo h-[45px] w-[112px] rounded-md font-rota_bold text-[17px] mt-1">
            Add
          </button>
        </div>
        <p className="mt-2 text-[15px] text-indigo font-rota_semibold">
          Please allow uo to 24 hours for vour suo-doman to propopote
        </p>
      </div>
    </div>
  );
};

export default CustomDomain;
