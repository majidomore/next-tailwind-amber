import React from "react";
import { Logo } from "./Icons";
import MenuButton from "./MenuButton";
import Image from "next/image";

type Props = {
  name?: string;
};

const UniversalHeader = ({ name }: Props) => {
  return (
    <div className="flex flex-col items-center pt-5">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-4">
          <MenuButton />
          <Logo />
        </div>
        <p className="text-[22px] font-rota_bold">Universal Player</p>
        <Image width={50} height={50} src="/img/universal-player.png" />
      </div>
      <p className="text-center font-rota_medium text-xs mt-2">
        Paste this script in your website’s header to automatically apply our
        player to videos that are alreday existed on your website you will add
        in future.
      </p>
    </div>
  );
};

export default UniversalHeader;
