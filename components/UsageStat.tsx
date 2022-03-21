import React from "react";
import { ChevronDown, ChevronRight } from "./Icons";
import Payment from "./Payment";

const UsageStat = () => {
  return (
    <div className="border-[1px] border-grey">
      <div className="h-[35px] bg-flow_blue flex items-center justify-between px-5">
        <p className="font-rota_black">Usage stats</p>
        <ChevronRight />
      </div>
      <div className="p-5">
        <div className="flex items-center space-x-14 divide-x-[1px] divide-dark_grey">
          <ul className="font-rota_bold text-[15px]">
            <li>Total videos</li>
            <li>Bandwidth Used</li>
            <li>Storage Used</li>
            <li>Current Plan</li>
          </ul>
          <ul className="text-lock_blue font-rota_semibold pl-7">
            <li>35</li>
            <li>80GB of Unmetered</li>
            <li>70GBout of 100GB</li>
            <li>Gold Plan</li>
          </ul>
        </div>
        <div className="flex space-x-3 mt-7">
          <div className="flex items-center bg-aqua_haze">
            <input
              type="text"
              className="border-0 bg-transparent font-rota_semibold text-[17px] input bg-aqua_haze "
              placeholder="Sith you plan"
            />
            <span className="pr-3">
              <ChevronDown />
            </span>
          </div>
          <button className="bg-black w-[102px] h-11 rounded-md text-white font-rota_bold text-[17.41px]">
            Change
          </button>
        </div>
        <p className="mt-5 font-rota_regular text-sm text-lock_blue">
          If you will downgrade your plan, then all latest videos exceeding the
          storage limit of your new plan will automatically get removed. So
          remove un-wanted videos before changing the plan to avoid any
          inconvenience.
        </p>
        <Payment />
      </div>
    </div>
  );
};

export default UsageStat;
