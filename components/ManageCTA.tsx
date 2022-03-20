import React from "react";
import { data } from "@/components/ManageVideos";

type Props = {
  name?: string;
};

const ManageCTA = ({ name }: Props) => {
  return (
    <div className="mt-5 space-y-3 divide-y-2 w-full whitespace-nowrap">
      <p className="text-[14px] font-rota_bold">Cell-o-Acion</p>
      {data.map((array) => (
        <div
          className="flex items-center space-x-5 font-rota_semibold text-sm pt-3"
          key={array.id}
        >
          <div className="flex items-center space-x-5">
            <p>{array.move}</p>
            <p>{array.id}</p>
            <div className="w-20">{array.image}</div>
            <div className="flex flex-col">
              <p>{array.title}</p>
              <p>{array.time}</p>
            </div>
          </div>
          <div className="flex space-x-9 pl-24">
            <p>{array.views}</p>
            <p className="pl-4">{array.viewduration}</p>
            <p className="pl-6">{array.avgviewed}</p>
          </div>
          <div className="flex items-center space-x-5 pl-6">
            <a href="#">{array.pencil}</a>
            <a href="#">{array.code}</a>
            <a href="#">{array.videoplayer}</a>
            <a href="#">{array.download}</a>
            <a href="#">{array.delete}</a>
          </div>
          <button>{array.switch}</button>
        </div>
      ))}
    </div>
  );
};

export default ManageCTA;
