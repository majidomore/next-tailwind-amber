import React from "react";
import { Play, Thumbnail } from "./Icons";

const PlayerTheme = () => {
  return (
    <div className="mt-5">
      <h3 className="font-rota_bold text-[16.82px]">Select Player Themes</h3>
      <div className="grid grid-cols-5 gap-2 mt-[9.31px] h-[66px]">
        <div className="border-2 border-dashed flex items-center justify-center">
          <Play />
        </div>
        <div className="border-2 border-dashed flex items-center justify-center">
          <Play />
        </div>
        <div className="border-2 border-dashed flex items-center justify-center">
          <Play />
        </div>
        <div className="border-2 border-dashed flex items-center justify-center">
          <Play />
        </div>
        <div className="border-2 border-dashed flex items-center justify-center">
          <Play />
        </div>
      </div>
    </div>
  );
};

export default PlayerTheme;
