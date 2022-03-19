import React, { useState } from "react";
import { ChevronRight, Delete, Down, Upload } from "./Icons";

type Props = {
  name?: string;
};

const VideoSettings = ({ name }: Props) => {
  let [Open, setOpen] = useState(false);

  let clickhandle = () => {
    setOpen((Open = !Open));
  };

  return (
    <div>
      {/* Load Settings */}
      <div className="flex justify-between items-center border-[1px] border-grey h-[47px] rounded px-5">
        <p className="text-dark_grey text-[16.82px] font-rota_bold mt-1">
          Load settings from this video
        </p>
        <Down />
      </div>
      {/* Bar Color */}
      <div className="flex justify-between  space-x-3 mt-5">
        <div className="w-6/12">
          <p className="text-[16.82px] font-rota_bold">Control bar color</p>
          <div className="flex border-[1px] border-black rounded w-full h-[34px] mt-1">
            <span className="bg-black rounded-r-sm w-[41px]"></span>
            <p className="font-rota_bold text-dark_grey text-xs ml-7 mt-2">
              #ffc90e
            </p>
          </div>
        </div>
        <div className="w-6/12">
          <p className="text-[16.82px] font-rota_bold">Play button color</p>
          <div className="flex border-[1px] border-black rounded h-[34px] mt-1">
            <span className="bg-dark_grey h-full w-[41px]"></span>
            <p className="font-rota_bold text-dark_grey text-xs ml-7 mt-2">
              #ffc90e
            </p>
          </div>
        </div>
      </div>
      {/* Show Controls */}
      <button
        onClick={clickhandle}
        className="flex justify-between items-center mt-6 w-full gradient_button h-[45px] pt-1 px-5"
      >
        <p>Show these controls</p>
        <ChevronRight />
      </button>
      {/* Show Controls Menu */}
      {Open && (
        <div className="grid grid-cols-2 gap-2 gap-y-4 mt-5 mb-5">
          <button className="controls">
            <p className="font-rota_bold text-[16.82px]">Autoplay</p>
            <span className="text-[13px] font-rota_semibold text-light_red">
              OFF
            </span>
          </button>
          <button className="controls">
            <p className="font-rota_bold text-[16.82px]">Loop Video</p>
            <span className="text-[13px] font-rota_semibold text-light_green">
              ON
            </span>
          </button>
          <button className="controls">
            <p className="font-rota_bold text-[16.82px]">Allow Pause</p>
            <span className="text-[13px] font-rota_semibold text-light_green">
              ON
            </span>
          </button>
          <button className="controls space-x-2">
            <p className="font-rota_bold whitespace-nowrap text-[16.82px]">
              Rounded Corners
            </p>
            <span className="text-[13px] font-rota_semibold text-light_red">
              OFF
            </span>
          </button>
          <button className="controls">
            <p className="font-rota_bold text-[16.82px]">Control Bar</p>
            <span className="text-[13px] font-rota_semibold text-light_green">
              ON
            </span>
          </button>
          <button className="controls">
            <p className="font-rota_bold text-[16.82px]">Sticky on Scroll</p>
            <span className="text-[13px] font-rota_semibold text-light_green">
              ON
            </span>
          </button>
        </div>
      )}
      {/* Advance Setting Button */}
      <button className="flex justify-between items-center mt-3 w-full gradient_button h-[45px] pt-1 px-5">
        <p>Advanced Settings</p>
        <ChevronRight />
      </button>
      {/* Upload Files */}
      <div className="space-y-5 mt-7">
        <div className="w-full h-[68px] flex justify-evenly items-center">
          <div className="bg-light_blue p-5 w-[321px] rounded-md">
            <input type="file" id="upload1" className="hidden" />
            <label htmlFor="upload1" className="flex items-center space-x-5">
              <Upload />
              <p className="text-dark_grey font-rota_semibold text-[17px]">
                During muted autoplay show this image on top of video
              </p>
            </label>
          </div>
          <Delete />
        </div>
        <div className="flex space-x-3 w-full">
          <div className="flex items-center justify-evenly space-x-5 bg-light_blue p-5 w-6/12 rounded-md">
            <p className="text-[17px] text-dark_grey font-rota_bold">
              Put this logo
            </p>
            <Down />
          </div>
          <div className="flex items-center justify-evenly space-x-5 bg-light_blue p-5 w-6/12 rounded-md">
            <p className="text-[17px] text-dark_grey font-rota_bold">
              Logo position
            </p>
            <Down />
          </div>
        </div>
        <div className="flex space-x-3">
          <input
            type="text"
            placeholder="Enter name to save these settings as a new preset"
            className="bg-light_blue border-0 text-dark_grey font-rota_bold pb-7 text-[17px] w-full rounded-md placeholder:whitespace-normal p-4"
          />
          <button className="bg-light_indigo text-indigo font-rota_bold w-[88px] h-[67px] rounded-md">
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoSettings;
