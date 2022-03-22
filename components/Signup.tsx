import React from "react";
import { ArrowRight, EllipseWhite, Hidden } from "./Icons";

type Props = {
  name?: string;
};

const Signup = ({ name }: Props) => {
  return (
    <div className="w-full mt-6 ">
      <form action="" className="space-y-5">
        <div className="bg-soft_black w-full h-16 rounded-[5px] flex items-center justify-between px-5">
          <input
            type="text"
            className="bg-transparent border-0 font-rota_black"
            placeholder="Username"
          />
          <EllipseWhite />
        </div>
        <div className="bg-soft_black w-full h-16 rounded-[5px] flex items-center justify-between px-5">
          <input
            type="password"
            className="bg-transparent border-0 font-rota_black"
            placeholder="8 digit pin"
          />
          <Hidden />
        </div>
        <button className="orange_btn h-16 w-full rounded-[5px] flex justify-between items-center px-6">
          <p className="text-white font-rota_semibold text-[21px] mt-2">
            Get Started
          </p>
          <ArrowRight />
        </button>
      </form>
    </div>
  );
};

export default Signup;
