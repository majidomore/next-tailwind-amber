import React from "react";
import { ChevronDown, Delete } from "./Icons";

type Props = {
  name?: string;
};

const AddUser = ({ name }: Props) => {
  return (
    <div className="mt-10">
      <h3 className="font-rota_bold text-xl border-b-2 w-44 pb-1">Add Users</h3>
      <form action="" className="mt-5 space-y-3">
        <input
          type="email"
          className="input border-0 bg-aqua_haze text-[17px]"
          placeholder="Enter email address"
        />
        <input
          type="text"
          className="border-0 bg-transparent font-rota_semibold  text-[17px] input bg-aqua_haze "
          placeholder="Storage quota"
        />
        <div className="flex items-center justify-between bg-aqua_haze">
          <input
            type="text"
            className="border-0 bg-transparent font-rota_semibold text-[17px] input bg-aqua_haze "
            placeholder="Enter Price"
          />
          <p className="pr-4 text-dark_grey">$</p>
        </div>
        <div className="flex items-center justify-between space-x-3">
          <input
            type="text"
            className="border-0 bg-transparent font-rota_semibold text-[17px] input bg-aqua_haze "
            placeholder="Enter Dussworo"
          />
          <Delete />
        </div>
        <div className="flex items-center bg-aqua_haze">
          <input
            type="text"
            className="border-0 bg-transparent font-rota_semibold text-[17px] input w-52 bg-aqua_haze "
            placeholder="Free Trial (7 days)"
          />
          <ChevronDown />
        </div>
        <div className="flex items-center bg-aqua_haze">
          <input
            type="text"
            className="border-0 bg-transparent font-rota_semibold text-[17px] input w-56 bg-aqua_haze "
            placeholder="Every month/ Onetime"
          />
          <ChevronDown />
        </div>
        <button className="w-full bg-light_indigo text-indigo h-[43px] rounded text-[17px] font-rota_black pt-1">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddUser;
