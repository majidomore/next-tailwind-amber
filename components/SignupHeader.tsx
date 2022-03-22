import React from "react";
import { Menu, DoooLogo, SearchWhite } from "./Icons";

type Props = {
  name?: string;
};

const SignupHeader = ({ name }: Props) => {
  return (
    <div className="flex items-center justify-between w-full mt-3">
      <div className="flex items-center">
        <Menu />
        <DoooLogo />
      </div>
      <ul className="flex items-end text-white text-sm space-x-8 font-rota_black -mt-2">
        <li>
          <a href="#">Category</a>
        </li>
        <li>
          <a href="#">Tract For Business</a>
        </li>
        <li className="flex flex-col items-end">
          <span className="orange_btn w-[23px] h-3 text-[6px] font-rota_black flex items-center justify-center rounded-md">
            <p>NEW</p>
          </span>
          <a href="#">Teach on Tract</a>
        </li>
      </ul>
      <div className="flex items-center space-x-6">
        <SearchWhite />
        <button className="orange_btn w-[133px] h-10 text-white rounded-[7px] font-rota_bold">
          Signup
        </button>
      </div>
    </div>
  );
};

export default SignupHeader;
