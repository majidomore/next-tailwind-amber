import React from "react";
import { Down } from "./Icons";

type Props = {
  name?: string;
};

const ManageCTA2 = ({ name }: Props) => {
  return (
    <div className="mt-5 space-y-5 mb-5">
      <div className="flex space-x-3">
        <input
          type="text"
          className="input"
          placeholder="Enter your headline here"
        />
        <span className="border-[0.87px] border-black rounded-[4.35px] w-[84px] flex justify-center items-center pt-1">
          <p className="font-rota_bold">FFFFFF</p>
        </span>
      </div>
      <div className="flex space-x-3">
        <input
          type="text"
          className="input"
          placeholder="Enter your text here"
        />
        <span className="border-[0.87px] border-black rounded-[4.35px] w-[84px] flex justify-center items-center pt-1">
          <p className="font-rota_bold">FFFFFF</p>
        </span>
      </div>
      <div className="flex space-x-3">
        <input
          type="text"
          className="input"
          placeholder="Enter your button text here"
        />
        <span className="border-[0.87px] border-black rounded-[4.35px] w-[84px] flex justify-center items-center pt-1">
          <p className="font-rota_bold">FFFFFF</p>
        </span>
      </div>
      <input
        type="text"
        placeholder="Display popup after seconds"
        className="w-full input"
      />
      <div className="flex justify-between items-center border-[0.87px] border-grey rounded-[4.35px] px-4 pt-1">
        <input
          type="text"
          placeholder="Show close button"
          className="border-0 text-dark_grey font-rota_bold"
        />
        <Down />
      </div>
      <input
        type="text"
        placeholder="Enter button URL here"
        className="text-dark_grey font-rota_bold input pt-3"
      />
      <div className="flex justify-between items-center border-[0.87px] border-grey rounded-[4.35px] px-4 pt-1">
        <input
          type="text"
          placeholder="Choose email autoresponder connection"
          className="border-0 w-full text-dark_grey font-rota_bold"
        />
        <Down />
      </div>
      <input
        type="text"
        placeholder=" Enter name to save this CTA"
        className="text-dark_grey font-rota_bold input pt-3"
      />
      <button className="bg-light_indigo h-[51px] w-full rounded-[4.35px] text-indigo font-rota_bold text-[19.14px]">
        Save
      </button>
    </div>
  );
};

export default ManageCTA2;
