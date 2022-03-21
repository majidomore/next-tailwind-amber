import React from "react";
import { ChevronRight, Codex, Delete, Pencil } from "./Icons";

type Props = {
  name?: string;
};

const TeamAccounts = ({ name }: Props) => {
  return (
    <div className="space-y-5">
      <div className="border-[1px] border-grey h-[323px]">
        {/* Title */}
        <div className="h-[35px] bg-flow_blue flex items-center justify-between px-5">
          <p className="font-rota_black">Team Accounts</p>
          <ChevronRight />
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between">
            <p className="font-rota_bold text-[17px]">yousaf@gmail.com</p>
            <div className="flex items-center space-x-4">
              <Codex />
              <button className="bg-catskill h-[38px] w-[38px] flex justify-center items-center rounded">
                <Pencil />
              </button>
            </div>
          </div>
          {/* Email Address */}
          <input
            type="email"
            placeholder="Enter email address"
            className="border-0 bg-aqua_haze w-full h-[42px] rounded-md mt-2 font-rota_semibold text-[17px] pl-6"
          />
          {/* Password */}
          <div className="flex items-center space-x-3">
            <input
              type="password"
              placeholder="Enter password"
              className="border-0 bg-aqua_haze w-full h-[42px] rounded-md mt-3 font-rota_semibold text-[17px] pl-6"
            />
            <button>
              <Delete />
            </button>
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <button className="bg-light_indigo text-indigo h-[45px] w-[112px] rounded-md font-rota_bold text-[17px]">
              + Add more
            </button>
            <button className="flex items-center space-x-3">
              <Delete />
              <p className="font-rota_bold text-[15px] pt-2">Primary Account</p>
            </button>
          </div>
        </div>
      </div>
      <div className="border-[1px] border-grey h-[197px]">
        {/* Title */}
        <div className="h-[35px] bg-flow_blue flex items-center justify-between px-5">
          <p className="font-rota_black">Team Accounts</p>
          <ChevronRight />
        </div>
        <div className="p-3 px-5">
          <div className="bg-dark_yellow h-[30px] w-[33.91px] ml-auto"></div>
          <input
            type="password"
            placeholder="Enter Google Analytics script"
            className="border-0 bg-aqua_haze w-full h-[42px] rounded-md mt-2 font-rota_semibold text-[17px] pl-6"
          />
          <input
            type="password"
            placeholder="Enter GTM or retargeting pixel script"
            className="border-0 bg-aqua_haze w-full h-[42px] rounded-md mt-2 font-rota_semibold text-[17px] pl-6"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamAccounts;
