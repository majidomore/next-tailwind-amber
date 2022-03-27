import React from "react";
import MenuButton from "@/components/MenuButton";
import Navbar from "@/components/Navbar";
import { Logo } from "./Icons";

type Props = {
  name?: string;
};

const MainHeader = ({ name }: Props) => {
  return (
    <div className="flex items-center justify-between mt-5 px-7">
      <div className="flex items-center space-x-5">
        <MenuButton />

        <Logo />
      </div>
      <Navbar />
    </div>
  );
};

export default MainHeader;
