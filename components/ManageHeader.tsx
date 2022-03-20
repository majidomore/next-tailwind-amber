import React from "react";
import { Logo } from "./Icons";
import MenuButton from "./MenuButton";

type Props = {
  name?: string;
};

const ManageHeader = ({ name }: Props) => {
  return (
    <header className="flex items-center justify-between ">
      <div className="flex items-center space-x-4">
        <MenuButton />
        <Logo />
      </div>
      <p className="font-rota_semibold">
        Manage Videos <span className="text-dordgeblue"> | </span> Manage
        Playlist <span className="text-dordgeblue"> | </span>
        Manage
      </p>
    </header>
  );
};

export default ManageHeader;
