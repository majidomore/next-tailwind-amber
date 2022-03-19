import React from "react";
import UserProfile from "./UserProfile";
import NavIcons from "./NavIcons";

type Props = {
  name?: string;
};

const Nav = ({ name }: Props) => {
  return (
    <div className="flex items-center space-x-5">
      <button className="h-[40px] w-44 bg-primary text-white rounded-[7px] font-rota_regular md:block hidden">
        + Upload Video
      </button>
      <NavIcons />
      <UserProfile />
    </div>
  );
};

export default Nav;
