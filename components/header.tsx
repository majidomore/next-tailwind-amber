import React from "react";
import MenuButton from "@/components/MenuButton";
import Navbar from "./Navbar";

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
        <svg
          className="md:hidden flex"
          width="14"
          height="27"
          viewBox="0 0 14 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.3125 0C2.06072 2.08473e-08 3.79183 0.344338 5.40697 1.01335C7.02212 1.68237 8.48968 2.66296 9.72586 3.89914C10.962 5.13532 11.9426 6.60288 12.6116 8.21803C13.2807 9.83318 13.625 11.5643 13.625 13.3125C13.625 15.0607 13.2807 16.7918 12.6116 18.407C11.9426 20.0221 10.962 21.4897 9.72586 22.7259C8.48968 23.962 7.02212 24.9426 5.40697 25.6116C3.79182 26.2807 2.06072 26.625 0.312495 26.625L0.3125 13.3125V0Z"
            fill="#1E1E1F"
          />
        </svg>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
