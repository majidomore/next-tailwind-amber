import React from "react";
import { ChevronRight, Cross, Right, Tick } from "./Icons";

type Props = {
  name?: string;
};

const EnabledReso = ({ name }: Props) => {
  return (
    <div>
      <div className="w-full h-[358px] border-[1px] border-grey">
        {/* Title */}
        <div className="h-[35px] bg-mine_shaft flex items-center justify-between px-4">
          <p className="text-white font-rota_semibold">Enabled Resolutions</p>
          <Right />
        </div>
        <div className="pt-4 pb-2 px-6 space-y-2">
          <div className="border-[1px] border-grey flex justify-between h-[34px] w-[259px]">
            <div className="flex items-center space-x-4 p-2">
              <Tick />
              <p className="font-rota_extrabold text-[12.18px] mt-1">
                240p (352 x 240)
              </p>
            </div>
            <div className="bg-wild_sand h-full w-28 pt-2 text-center font-rota_extrabold text-[12.18px]">
              600Kbps
            </div>
          </div>
          <div className="border-[1px] border-grey flex justify-between h-[34px] w-[259px]">
            <div className="flex items-center space-x-4 p-2">
              <Tick />
              <p className="font-rota_extrabold text-[12.18px] mt-1">
                360p (640 x 360)
              </p>
            </div>
            <div className="bg-wild_sand h-full w-28 pt-2 text-center font-rota_extrabold text-[12.18px]">
              800 Kbps
            </div>
          </div>
          <div className="border-[1px] border-grey flex justify-between h-[34px] w-[259px]">
            <div className="flex items-center space-x-4 p-2">
              <Tick />
              <p className="font-rota_extrabold text-[12.18px] mt-1">
                480p (842 x 480)
              </p>
            </div>
            <div className="bg-wild_sand h-full w-28 pt-2 text-center font-rota_extrabold text-[12.18px]">
              1.400 Kbps
            </div>
          </div>
          <div className="border-[1px] border-grey flex justify-between h-[34px] w-[259px]">
            <div className="flex items-center space-x-4 p-2">
              <Tick />
              <p className="font-rota_extrabold text-[12.18px] mt-1">
                720p (1280 x 720)
              </p>
            </div>
            <div className="bg-wild_sand h-full w-28 pt-2 text-center font-rota_extrabold text-[12.18px]">
              2.800 Kbps
            </div>
          </div>
        </div>
        <hr />
        <div className="pt-2 px-6 space-y-2">
          <div className="flex items-center space-x-10">
            <div className="border-[1px] border-grey flex justify-between h-[34px] w-[259px]">
              <div className="flex items-center space-x-4 p-2">
                <Tick />
                <p className="font-rota_extrabold text-[12.18px] mt-0.5 whitespace-nowrap">
                  1080p (1920 x 1080)
                </p>
              </div>
              <div className="bg-wild_sand h-full w-28 pt-2 text-center font-rota_extrabold text-[12.18px]">
                5.000 Kbps
              </div>
            </div>
            <div className="bg-dark_yellow h-[30px] w-[33.91px]"></div>
          </div>
          <div className="border-[1px] border-grey flex justify-between h-[34px] w-[259px] opacity-40">
            <div className="flex items-center space-x-4 p-2">
              <Cross />
              <p className="font-rota_extrabold text-[12.18px] mt-0.5 whitespace-nowrap">
                1440p (2560 x 1440)
              </p>
            </div>
            <div className="bg-wild_sand h-full w-28 pt-2 text-center font-rota_extrabold text-[12.18px]">
              8.000 Kbps
            </div>
          </div>
          <div className="border-[1px] border-grey flex justify-between h-[34px] w-[259px] opacity-40">
            <div className="flex items-center space-x-4 p-2">
              <Cross />
              <p className="font-rota_extrabold text-[12.18px] mt-0.5 whitespace-nowrap">
                2160p (3840 x 2160)
              </p>
            </div>
            <div className="bg-wild_sand h-full w-28 pt-2 text-center font-rota_extrabold text-[12.18px]">
              13.000 Kbps
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnabledReso;
