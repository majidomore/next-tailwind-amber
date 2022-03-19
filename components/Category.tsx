import React, { useState } from "react";
import { Cancel, Down, Plus } from "./Icons";

const Category = () => {
  let [Open, setOpen] = useState(false);
  let menu = () => {
    setOpen((Open = !Open));
  };
  return (
    <>
      <div className="flex space-x-3">
        {/* Category */}
        <button
          onClick={menu}
          className="flex items-center justify-evenly border-[1px] border-grey w-6/12 h-10 rounded-[4px] mt-5"
        >
          <p className="font-rota_bold text-[16.82px] text-dark_grey">
            Add to category
          </p>
          <Down />
        </button>
        {/* Playlist */}
        <button className="flex items-center justify-evenly px-5 border-[1px] border-grey w-6/12 h-10 rounded-[4px] mt-5">
          <p className="font-rota_bold text-[16.82px] text-dark_grey">
            Add to Playlist
          </p>
          <Down />
        </button>
      </div>
      {/* Category Dropdown */}
      {Open && (
        <div className="w-full mt-3 h-[293px] flex flex-col border-2 border-grey border-b-0">
          <div className="container mx-auto px-7 space-y-5 pt-6 overflow-y-scroll">
            <div className="flex items-center justify-between">
              <div className="flex space-x-[15px]">
                <input
                  type="checkbox"
                  className="w-[25px] h-[25px] bg-transparent rounded-sm border-black"
                />
                <p className="font-rota_bold text-[19.6px] text-dark_grey">
                  Category 1
                </p>
              </div>
              <Cancel />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex space-x-[15px]">
                <input
                  type="checkbox"
                  className="w-[25px] h-[25px] bg-transparent rounded-sm border-black"
                />
                <p className="font-rota_bold text-[19.6px] text-dark_grey">
                  Category 2
                </p>
              </div>
              <Cancel />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex space-x-[15px]">
                <input
                  type="checkbox"
                  className="w-[25px] h-[25px] bg-transparent rounded-sm border-black"
                />
                <p className="font-rota_bold text-[19.6px] text-dark_grey">
                  Category 3
                </p>
              </div>
              <Cancel />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex space-x-[15px]">
                <input
                  type="checkbox"
                  className="w-[25px] h-[25px] bg-transparent rounded-sm border-black"
                />
                <p className="font-rota_bold text-[19.6px] text-dark_grey">
                  Category 4
                </p>
              </div>
              <Cancel />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex space-x-[15px]">
                <input
                  type="checkbox"
                  className="w-[25px] h-[25px] bg-transparent rounded-sm border-black"
                />
                <p className="font-rota_bold text-[19.6px] text-dark_grey">
                  Category 5
                </p>
              </div>
              <Cancel />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex space-x-[15px]">
                <input
                  type="checkbox"
                  className="w-[25px] h-[25px] bg-transparent rounded-sm border-black"
                />
                <p className="font-rota_bold text-[19.6px] text-dark_grey">
                  Category 6
                </p>
              </div>
              <Cancel />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex space-x-[15px]">
                <input
                  type="checkbox"
                  className="w-[25px] h-[25px] bg-transparent rounded-sm border-black"
                />
                <p className="font-rota_bold text-[19.6px] text-dark_grey">
                  Category 7
                </p>
              </div>
              <Cancel />
            </div>
          </div>
          <div className="h-[62px] w-full border-2 border-r-0 border-l-0 flex items-center px-9 space-x-5 p-5">
            <Plus />
            <p className="font-rota_bold text-[19px] mt-1">
              Create new category
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Category;
