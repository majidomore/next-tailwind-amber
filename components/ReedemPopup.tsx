import React from "react";
import { BoxCross } from "./Icons";

type Props = {
  name?: string;
};

const ReedemPopup = ({ name }: Props) => {
  return (
    <div className="container mx-auto fixed px-5 pt-20 pb-10">
      <div className="bg-white w-full h-full rounded-[20px] flex flex-col items-center pb-5">
        <div className="flex items-center justify-center pt-4">
          <h3 className="font-rota_bold text-[22px] pt-7 mr-3">
            Redeem your codes here!
          </h3>
          <div className="-mr-12 -mt-5">
            <BoxCross />
          </div>
        </div>
        <p className="font-rota_semibold text-center w-56">
          Note: Please type in one code per line and click “Redeem”.
        </p>
        <div className="w-80 mt-8 space-y-5">
          <input
            type="text"
            className="input border-0 bg-aqua_haze text-pearl rounded-[7px]"
            placeholder="Code 1"
          />
          <input
            type="text"
            className="input border-0 bg-aqua_haze text-pearl rounded-[7px]"
            placeholder="Code 1"
          />
          <input
            type="text"
            className="input border-0 bg-aqua_haze text-pearl rounded-[7px]"
            placeholder="Code 1"
          />
          <input
            type="text"
            className="input border-0 bg-aqua_haze text-pearl rounded-[7px]"
            placeholder="Code 1"
          />
          <input
            type="text"
            className="input border-0 bg-aqua_haze text-pearl rounded-[7px]"
            placeholder="Code 1"
          />
          <input
            type="text"
            className="input border-0 bg-aqua_haze text-pearl rounded-[7px]"
            placeholder="Code 1"
          />
          <input
            type="text"
            className="input border-0 bg-aqua_haze text-pearl rounded-[7px]"
            placeholder="Code 1"
          />
          <input
            type="text"
            className="input border-0 bg-aqua_haze text-pearl rounded-[7px]"
            placeholder="Code 1"
          />
        </div>
        <div className="flex justify-center space-x-3 mt-5 w-80">
          <button className="bg-spolitude font-rota_semibold h-[45px] w-5/12 rounded-md">
            Close
          </button>
          <button className="bg-primary text-white font-rota_semibold h-[45px] w-5/12 rounded-md">
            Redeem
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReedemPopup;
