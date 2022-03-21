import React from "react";
import { Menu, DoooLogo, SearchWhite } from "./Icons";

type Props = {
  name?: string;
};

const SignupHeader = ({ name }: Props) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center">
        <Menu />
        <DoooLogo />
      </div>
      <div className="flex items-center space-x-4">
        <SearchWhite />
        <button className="orange_btn w-[133px] h-10 text-white rounded-[7px] font-rota_bold">
          Signup
        </button>
      </div>
    </div>
  );
};

export default SignupHeader;
