import React from "react";
import { data } from "@/components/ManageVideos";

type Props = {
  name?: string;
};

const ManageCTA = ({ name }: Props) => {
  return (
    <div className="mt-5 whitespace-nowrap space-y-6 divide-y-2">
      <div className="flex space-x-10 text-[14px] font-rota_bold">
        <p>Move</p>
        <p>Videos (3 Total)</p>
      </div>
      {data.map((array) => (
        <div
          className="flex flex-col justify-center font-rota_semibold text-sm w-full pt-3"
          key={array.id}
        >
          <div className="flex flex-col w-full">
            <div className="flex items-center sm:justify-between flex-wrap w-full">
              <div className="flex items-center space-x-3">
                <p>{array.move}</p>
                <p>{array.id}</p>
                <div>{array.image}</div>
                <div className="">
                  <p>{array.title}</p>
                  <p>{array.time}</p>
                </div>
              </div>
              <div className="flex items-center space-x-10 mt-5 ml-20 sm:ml-0 sm:mt-0">
                <div>
                  <p className="font-rota_bold text-xs">Views</p>
                  <p>{array.views}</p>
                </div>
                <div>
                  <p className="font-rota_bold">Avg view duration</p>
                  <p>{array.avgviewed}</p>
                </div>
              </div>
              <div className="sm:mt-9 sm:ml-16 mt-5 ml-5">
                <p className="font-rota_bold text-sm">Avg % Viewed</p>
                <p>{array.avgviewed}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 sm:ml-44 sm:-mt-9 mt-10 ml-20">
              <a href="#">{array.pencil}</a>
              <a href="#">{array.code}</a>
              <a href="#">{array.videoplayer}</a>
              <a href="#">{array.download}</a>
              <a href="#">{array.delete}</a>
              <button className="sm:pl-36">{array.switch}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageCTA;
