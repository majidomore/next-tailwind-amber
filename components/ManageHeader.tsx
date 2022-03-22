import React from "react";
import { Logo } from "./Icons";
import MenuButton from "./MenuButton";

type Props = {
  name?: string;
};

const ManageHeader = ({ name }: Props) => {
  return (
    <header className="flex items-center md:justify-start justify-between">
      <div className="flex items-center space-x-4">
        <MenuButton />
        <Logo />
      </div>
      <p className="font-rota_semibold whitespace-nowrap">
        Manage Videos <span className="text-dordgeblue"> | </span> Manage
        Playlist <span className="text-dordgeblue"> | </span>
        Manage <span className="invisible md:visible">Popups</span>
      </p>
    </header>
  );
};

export default ManageHeader;
