import React from "react";
import { Error, Right, Save, UploadIcons } from "./Icons";

type Props = {
  name?: string;
};

const AllowedDomains = ({ name }: Props) => {
  return (
    <div className="space-y-4">
      <div className="w-full h-[353px] border-[1px] border-grey">
        {/* Title */}
        <div className="h-[35px] bg-mine_shaft flex items-center justify-between px-4">
          <p className="text-white font-rota_semibold">
            Blocked & Allowed Domains
          </p>
          <Right />
        </div>
        <div className="pt-6 pb-2 px-6">
          <div className="flex items-center justify-between">
            <p className="font-rota_black text-[19px]">Blocked Domains</p>
            <div className="bg-dark_yellow h-[30px] w-[33.91px]"></div>
          </div>
          <p className="text-dark_grey font-rota_semibold text-xs mt-2">
            The list of domains that will be blocked from accessing the videos.
            Any domain not on the list will be allowed to play the videos.
          </p>
          <div className="border-[1px] border-grey rounded mt-2 flex items-center justify-between pr-1.5">
            <input
              type="text"
              placeholder="Example: *.mywebsite.com"
              className="border-0 w-full font-rota_semibold"
            />
            <button className="bg-gradient-to-r from-persimonn to-tabhide w-32 h-[33px] rounded text-white font-rota_black pt-1">
              + ADD
            </button>
          </div>
          <div className="flex items-center justify-between mt-6">
            <p className="font-rota_black text-[19px]">Allowed Domains</p>
          </div>
          <p className="text-dark_grey font-rota_semibold text-xs mt-2">
            The list of domains that are allowed to access the videos. If no
            hostnames are listed all requests will be allowed,
          </p>
          <div className="border-[1px] border-grey rounded mt-2 flex items-center justify-between pr-1.5">
            <input
              type="text"
              placeholder="Example: *.mywebsite.com"
              className="border-0 w-full font-rota_semibold"
            />
            <button className="bg-gradient-to-r from-persimonn to-tabhide w-32 h-[33px] rounded text-white font-rota_black pt-1">
              + ADD
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[276px] border-[1px] border-grey">
        {/* Title */}
        <div className="h-[35px] bg-mine_shaft flex items-center justify-between px-4">
          <p className="text-white font-rota_semibold">
            Blocked & Allowed Domains
          </p>
          <Right />
        </div>
        <div className="pt-4 pb-2 px-6">
          <div className="flex items-center justify-between">
            <p className="font-rota_black text-[19px]">VAST tag URL</p>
            <div className="flex items-center space-x-2">
              <div className="bg-dark_yellow h-[30px] w-[33.91px]"></div>
              <Error />
            </div>
          </div>
          <div className="border-[1px] border-grey rounded mt-2 flex items-center justify-between pr-1.5">
            <input
              type="text"
              placeholder="Enter VAST tag URL here"
              className="border-0 w-full font-rota_semibold"
            />
            <button className="bg-gradient-to-r from-persimonn to-tabhide w-32 h-[33px] rounded flex items-center justify-center space-x-2 text-white font-rota_black pt-1">
              <Save /> <p>SAVE</p>
            </button>
          </div>
          <p className="text-dark_grey font-rota_semibold text-xs mt-2">
            to automatically display VAST based ads in your videos.
          </p>
          <div className="flex items-center justify-between mt-6">
            <p className="font-rota_black text-[19px]">VI.Al publisher ID</p>
            <Error />
          </div>
          <div className="border-[1px] border-grey rounded mt-2 flex items-center justify-between pr-1.5">
            <input
              type="text"
              placeholder="Enter VI.Al publisher id here"
              className="border-0 w-full font-rota_semibold"
            />
            <button className="bg-gradient-to-r from-persimonn to-tabhide w-32 h-[33px] rounded flex items-center justify-center space-x-2 text-white font-rota_black pt-1">
              <Save /> <p>SAVE</p>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[153px] border-[1px] border-grey">
        {/* Title */}
        <div className="h-[35px] bg-mine_shaft flex items-center justify-between px-4">
          <p className="text-white font-rota_semibold">
            Blocked & Allowed Domains
          </p>
          <Right />
        </div>
        <div className="flex items-center justify-evenly h-28">
          <button className="bg-gradient-to-r from-persimonn to-tabhide w-[226px] h-[44px] rounded flex items-center justify-center space-x-2 text-white font-rota_black">
            <UploadIcons /> <p className="mt-1">UPLOAD WATERMARK </p>
          </button>
          <div className="bg-dark_yellow h-[30px] w-[33.91px]"></div>
        </div>
      </div>
    </div>
  );
};

export default AllowedDomains;
