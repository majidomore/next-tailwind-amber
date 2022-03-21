import React from "react";
import { Camera, ChevronDown } from "./Icons";

type Props = {
  name?: string;
};

const PricingPlan = ({ name }: Props) => {
  return (
    <div className="mt-14 space-y-3">
      <h3 className="font-rota_bold text-xl border-b-2 w-44 pb-1">
        Add Pricing Plan
      </h3>
      <div className="flex items-center space-x-3">
        <input
          type="text"
          className="border-0 bg-transparent font-rota_semibold text-[17px] input bg-aqua_haze "
          placeholder="Enter plan name"
        />
        <Camera />
      </div>
      <div className="flex space-x-3">
        <div className="flex justify-between items-center bg-aqua_haze w-10/12">
          <input
            type="text"
            className="border-0 bg-transparent font-rota_semibold text-[17px] input bg-aqua_haze "
            placeholder="Enter Price"
          />
          <p className="text-dark_grey pr-2">$</p>
        </div>
        <div className="flex justify-between items-center bg-aqua_haze w-full">
          <input
            type="text"
            className="border-0 bg-transparent font-rota_semibold text-[17px] input bg-aqua_haze "
            placeholder="Every month / On..."
          />
          <ChevronDown />
        </div>
      </div>
      <input
        type="text"
        className="border-0 bg-transparent font-rota_semibold text-[17px] input bg-aqua_haze "
        placeholder="Storage quota (in GB)"
      />
      <div className="flex justify-between items-center bg-aqua_haze w-full">
        <input
          type="text"
          className="border-0 bg-transparent font-rota_semibold text-[17px] input bg-aqua_haze "
          placeholder="Free Trial (7 days)"
        />
        <div className="flex items-center pr-3 space-x-5">
          <p className="font-rota_semibold text-dark_grey">YES/NO</p>
          <ChevronDown />
        </div>
      </div>
      <button className="w-full bg-light_indigo text-indigo h-[43px] rounded text-[17px] font-rota_black pt-1">
        Add
      </button>
    </div>
  );
};

export default PricingPlan;
