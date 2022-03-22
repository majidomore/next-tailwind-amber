import React, { useState } from "react";
import BarColor from "./BarColor";
import { Down, ChevronRight, Upload, Delete } from "./Icons";
import Switch from "react-switch";

const PlayerSettings = () => {
  const [checked3, setChecked3] = useState(false);
  const handleChange3 = (
    nextChecked: boolean | ((prevState: boolean) => boolean)
  ) => {
    setChecked3(nextChecked);
  };
  return (
    <div>
      <div className="flex justify-between mt-4">
        <p className="font-rota_bold mt-1">+ Add Call-to-Action</p>
        <div className="flex items-center space-x-4">
          <span className="font-rota_bold text-dark_grey text-[10.41px] border-[1px] border-black rounded-full h-[18px] w-[42px] text-center">
            FORCE
          </span>
          <Switch
            onChange={handleChange3}
            checked={checked3}
            onColor="#1A72E7"
            boxShadow="none"
            activeBoxShadow="none"
            handleDiameter={15}
            uncheckedIcon={
              <h3 className="font-rota_bold text-[10.41px] text-white pl-2">
                OFF
              </h3>
            }
            checkedIcon={
              <h3 className="font-rota_bold text-[10.41px] text-white pl-3 focus:text-red-500">
                ON
              </h3>
            }
          />
        </div>
      </div>
      <div className="flex justify-between items-center border-[1px] border-grey h-[47px] rounded px-5 mt-4">
        <p className="text-dark_grey text-[16.82px] font-rota_bold mt-1">
          Load settings from this video
        </p>
        <Down />
      </div>
      <BarColor />
      {/* Controls Button */}
      <button className="flex justify-between items-center mt-6 w-full gradient_button h-[45px] pt-1 px-5">
        <p>Show these controls</p>
        <ChevronRight />
      </button>
      {/* Advance Setting button */}
      <button className="flex justify-between items-center mt-3 w-full gradient_button h-[45px] pt-1 px-5">
        <p>Advanced Settings</p>
        <ChevronRight />
      </button>
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
        <div className="flex space-x-3 w-full text-[17px] text-dark_grey font-rota_bold">
          <div className="flex items-center justify-evenly space-x-5 bg-light_blue p-5 w-6/12 rounded-md">
            <p>Put this logo</p>
            <Down />
          </div>
          <div className="flex items-center justify-evenly space-x-5 bg-light_blue p-5 w-6/12 rounded-md">
            <p>Logo position</p>
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

export default PlayerSettings;
