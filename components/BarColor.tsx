import React from "react";

type Props = {
  name?: string;
};

const BarColor = ({ name }: Props) => {
  return (
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
  );
};

export default BarColor;
