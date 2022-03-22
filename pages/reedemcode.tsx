import { NextPage } from "next";
import React from "react";
import ReedemPopup from "~/components/ReedemPopup";
import Addons from "./addons";

const ReedemCode: NextPage = () => {
  return (
    <div className="overflow-hidden">
      <div className="w-full min-h-screen fixed bg-black bg-opacity-80"></div>
      <ReedemPopup />
      <Addons />
    </div>
  );
};

export default ReedemCode;
