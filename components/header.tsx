import React from "react";
import MenuButton from "@/components/MenuButton";
import Navbar from "@/components/Navbar";
import { Logo } from "./Icons";

type Props = {
  name?: string;
};

const Header = ({ name }: Props) => {
  return (
    <div className="flex items-center justify-between mt-5 mx-6">
      <div className="flex items-center space-x-5">
        {/* Menu Button */}
        <MenuButton />
        {/* Logo */}
        <Logo />
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
