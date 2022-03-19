import React from "react";
import Layout from "@/components/layouts/Layout";
import { Thumbnail } from "@/components/Icons";
import PlayerTheme from "~/components/PlayerTheme";
import Category from "~/components/Category";

type Props = {
  name?: string;
};

const Controls = ({ name }: Props) => {
  return (
    <Layout>
      <div className="container mx-auto w-full mt-10">
        {/* Loading bar */}
        <div className="text-white w-full rounded-full text-center border-2 border-black">
          <div className="w-72 bg-black h-6 rounded-l-full font-rota_medium text-sm pt-1">
            Uploading 70%...30 seconds left
          </div>
        </div>
        <button className="gradient_button h-[45px] mt-5">Cancel</button>
        <input
          type="text"
          className="border-[1px] border-grey w-full rounded-[4px] mt-5 placeholder:font-rota_bold placeholder:text-[16.82px] text-dark_grey p-3 pl-6"
          placeholder="Enter video title here"
        />
        {/* Upload Thumbnails */}
        <div className="grid grid-cols-3 mt-5 gap-3">
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
        {/* Player Theme */}
        <PlayerTheme />
        {/* Password for video */}
        <div className="border-[1px] border-grey w-full rounded-[4px]  mt-5 p-2 flex items-center justify-between">
          <input
            type="text"
            className="border-0 outline-none placeholder:font-rota_bold placeholder:text-[16.82px] text-dark_grey w-72"
            placeholder="Enter password to protect this video"
          />
          <p className="text-[16.82px] text-dark_grey font-rota_bold mt-1 pr-1">
            (optional)
          </p>
        </div>
        <Category />
      </div>
    </Layout>
  );
};

export default Controls;
