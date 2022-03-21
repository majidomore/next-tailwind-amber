import React from "react";
import { Cancel, Cross, Error, Right, SimpleCross, WhiteTick } from "./Icons";

type Props = {
  name?: string;
};

const SecurityOptions = ({ name }: Props) => {
  return (
    <div className="w-full h-[367px] border-[1px] border-grey">
      {/* Title */}
      <div className="h-[35px] bg-mine_shaft flex items-center justify-between px-4">
        <p className="text-white font-rota_semibold">
          Optimization & Security Options
        </p>
        <Right />
      </div>
      <div className="pt-4 pb-2 px-6 space-y-4">
        <div className="flex items-center space-x-4">
          <button className="w-[47.87px] h-6 bg-olive_drab rounded pl-2 flex items-center">
            <span className="w-6/12">
              <WhiteTick />
            </span>
            <div className="w-6/12 bg-gradient-to-r from-green_gr to-green_btn"></div>
          </button>
          <p className="font-rota_bold text-sm mt-1">Keep Original Files</p>
          <Error />
        </div>
        <div className="flex items-center space-x-4">
          <button className="w-[47.87px] h-6 bg-olive_drab rounded pl-2 flex items-center">
            <span className="w-6/12">
              <WhiteTick />
            </span>
            <div className="w-6/12 bg-gradient-to-r from-green_gr to-green_btn"></div>
          </button>
          <p className="font-rota_bold text-sm mt-1">Enable MP4 Fallback</p>
          <Error />
        </div>
      </div>
      <hr />
      <div className="pt-3 px-6 space-y-3">
        <div className="flex justify-between">
          <div className="flex items-center space-x-4">
            <button className="w-[47.87px] h-6 bg-nobel rounded pl-2 flex items-center ">
              <div className="w-6/12 "></div>
              <span className="w-8/12 bg-silver h-full flex justify-center items-center">
                <SimpleCross />
              </span>
            </button>
            <p className="font-rota_bold text-sm mt-1">
              CD Token Authentication
            </p>
            <Error />
          </div>
          <div className="bg-dark_yellow h-[30px] w-[33.91px]"></div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="w-[47.87px] h-6 bg-nobel rounded pl-2 flex items-center ">
            <div className="w-6/12 "></div>
            <span className="w-8/12 bg-silver h-full flex justify-center items-center">
              <SimpleCross />
            </span>
          </button>
          <p className="font-rota_bold text-sm mt-1">
            Block Direct URL File Access
          </p>
          <Error />
        </div>
        <div className="flex items-center space-x-4">
          <button className="w-[47.87px] h-6 bg-nobel rounded pl-2 flex items-center ">
            <div className="w-6/12 "></div>
            <span className="w-8/12 bg-silver h-full flex justify-center items-center">
              <SimpleCross />
            </span>
          </button>
          <p className="font-rota_bold text-sm mt-1">
            Embed View Token Authentication
          </p>
          <Error />
        </div>
        <div className="flex items-center space-x-4">
          <button className="w-[47.87px] h-6 bg-nobel rounded pl-2 flex items-center ">
            <div className="w-6/12 "></div>
            <span className="w-8/12 bg-silver h-full flex justify-center items-center">
              <SimpleCross />
            </span>
          </button>
          <p className="font-rota_bold text-sm mt-1">MediaCage Basic DRM</p>
          <Error />
        </div>
        <div className="flex items-center space-x-4">
          <button className="w-[47.87px] h-6 bg-olive_drab rounded pl-2 flex items-center">
            <span className="w-6/12">
              <WhiteTick />
            </span>
            <div className="w-6/12 bg-gradient-to-r from-green_gr to-green_btn"></div>
          </button>
          <p className="font-rota_bold text-sm mt-1">Enable Direct Play</p>
          <Error />
        </div>
        <div className="flex items-center space-x-4">
          <button className="w-[47.87px] h-6 bg-nobel rounded pl-2 flex items-center ">
            <div className="w-6/12 "></div>
            <span className="w-8/12 bg-silver h-full flex justify-center items-center">
              <SimpleCross />
            </span>
          </button>
          <p className="font-rota_bold text-sm mt-1">Watchtime heatmap</p>
          <Error />
        </div>
      </div>
    </div>
  );
};

export default SecurityOptions;
