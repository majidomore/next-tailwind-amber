import React from "react";
import { Search, ChevronDown } from "./Icons";

type Props = {
  name?: string;
};

const ManageSection = ({ name }: Props) => {
  return (
    <div className="flex md:flex-row-reverse flex-col md:gap-12">
      <div className="md:-mt-12 -mt-0">
        <div className="flex items-center space-x-3 w-full">
          <div className="border-[1px] border-black border-dashed rounded-[9px] h-[41px] flex justify-center items-center mt-5 w-full">
            <p className="text-black font-rota_semibold text-xl mt-1">
              Embed this playlist
            </p>
          </div>
          <button className="border-2 border-black h-[34px] w-[31px] mt-4 font-bold text-[17.82px]">
            X
          </button>
        </div>
        <div className="mt-3 space-y-3">
          <input
            type="text"
            className="input placeholder:font-rota_semibold"
            placeholder="Player Style"
          />
          <input
            type="text"
            className="input placeholder:font-rota_semibold"
            placeholder="Playlist Style"
          />
        </div>
        <button className="upload-button md:w-52 flex items-center justify-center font-rota_semibold text-xl h-[47px] mt-3">
          Copy embed code
        </button>
      </div>
      <div className="space-y-3 mt-3 w-full">
        <div className="flex items-center w-full h-[49px] bg-aqua_haze px-7 rounded-md">
          <Search />
          <input
            type="search"
            className="border-0 bg-transparent rounded-md font-rota_semibold w-full text-dark_grey"
            placeholder="Search videos by id or title"
          />
        </div>
        <div className="bg-aqua_haze px-7 h-[49px] flex items-center justify-between rounded-md">
          <p className="font-rota_semibold text-dark_grey">Select Category</p>
          <ChevronDown />
        </div>
        <div className="bg-aqua_haze px-7 h-[49px] flex items-center justify-between rounded-md">
          <p className="font-rota_semibold text-dark_grey">Select Playlist</p>
          <ChevronDown />
        </div>
      </div>
    </div>
  );
};

export default ManageSection;
