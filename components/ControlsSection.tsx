import React from "react";
import { Thumbnail } from "./Icons";
import PlayerTheme from "./PlayerTheme";
import Image from "next/image";
const ControlsSection = () => {
  return (
    <div>
      <input
        type="text"
        className="input mt-5"
        placeholder="Enter video title here"
      />
      {/* Upload Thumbnails */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-3 mt-5">
        <div className="border-2 border-dashed h-[66px] flex flex-col items-center justify-center pt-2">
          <Thumbnail />
          <p
            className="text-[11px] font-rota_semibold mt-3 text-dark_grey
            "
          >
            Upload thumbnail
          </p>
        </div>
        <Image width={50} height={23} src="/img/image1.png" alt="" />
        <Image width={50} height={23} src="/img/image2.png" alt="" />
        <div className="border-2 border-dashed h-[66px] flex flex-col items-center justify-center pt-2">
          <Thumbnail />
          <p
            className="text-[11px] font-rota_semibold mt-3 text-dark_grey
            "
          >
            Upload thumbnail
          </p>
        </div>
      </div>
      <PlayerTheme />
      {/* Password for video */}
      <div className="border-[1px] border-grey w-full rounded-[4px] mt-5 p-2 flex items-center justify-between">
        <input
          type="text"
          className="border-0 outline-none placeholder:font-rota_bold placeholder:text-[16.82px] text-dark_grey w-72"
          placeholder="Enter password to protect this video"
        />
        <p className="text-[16.82px] text-dark_grey font-rota_bold mt-1 pr-1">
          (optional)
        </p>
      </div>
    </div>
  );
};

export default ControlsSection;
