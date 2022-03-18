import React from "react";
import UserProfile from "@/components/UserProfile";
import NavIcons from "@/components/NavIcons";

type Props = {
  name?: string;
};

const Nav = ({ name }: Props) => {
  return (
    <div className="flex space-x-5">
    <NavIcons />
    <UserProfile />
  </div>
  );
};

export default Nav;
