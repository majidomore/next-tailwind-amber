import React from "react";
import { Logo } from "./Icons";
import MenuButton from "./MenuButton";

type Props = {
  name?: string;
};

const AccountHeader = ({ name }: Props) => {
  return (
    <div>
      <div className="flex space-x-6">
        <div className="flex items-center space-x-4">
          <MenuButton />
          <Logo />
        </div>
        <h2 className="text-[32px] font-rota_extrabold mt-2">
          Account Settings
        </h2>
      </div>
      <button className="bg-soft_green text text-jungle_green w-full h-[43px] mt-2 font-rota_black">
        SAVE
      </button>
    </div>
  );
};

export default AccountHeader;
