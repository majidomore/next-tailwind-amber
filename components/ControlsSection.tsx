import React from "react";
import { Thumbnail } from "./Icons";
import PlayerTheme from "./PlayerTheme";
const ControlsSection = () => {
  return (
    <div>
      <div className="flex items-center sm:flex-row flex-col w-full space-x-5">
        {/* Loading bar */}
        <div className="text-white w-full rounded-full text-center border-2 md:border-4 border-black">
          <div className="w-72 bg-black h-6 rounded-l-full font-rota_medium text-sm pt-1">
            Uploading 70%...30 seconds left
          </div>
        </div>
        <button className="gradient_button w-[135px] h-[45px] sm:mt-0 mt-5">
          Cancel
        </button>
      </div>
      <input
        type="text"
        className="input"
        placeholder="Enter video title here"
      />
      {/* Upload Thumbnails */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-5">
        <div className="border-2 border-dashed h-[66px] flex flex-col items-center justify-center pt-2">
          <Thumbnail />
          <p
            className="text-[11px] font-rota_semibold mt-3 text-dark_grey
            "
          >
            Upload thumbnail
          </p>
        </div>
        <img src="./img/image1.png" alt="" />
        <img src="./img/image2.png" alt="" />
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
