import Image from "next/image";
import React from "react";
import { Circle, Code, Delete, Download, Pencil, VideoPlayer } from "./Icons";
import SwitchButton from "./SwitchButton";

type Props = {
  name?: string;
};

export const data = [
  {
    id: 1,
    move: <Circle />,
    image: <img src="./img/Laptop.png" className="" />,
    title: "YouTube Video Long Title At The Top...",
    time: "Feb 17, 2021",
    views: 220,
    viewduration: "0.10(667.2%)",
    avgviewed: "0:10  (67.2%)",
    pencil: <Pencil />,
    code: <Code />,
    videoplayer: <VideoPlayer />,
    download: <Download />,
    delete: <Delete />,
    switch: <SwitchButton />,
  },
  {
    id: 2,
    move: <Circle />,
    image: <img src="./img/Laptop.png" className="" />,
    title: "YouTube Video Long Title At The Top...",
    time: "Feb 17, 2021",
    views: 220,
    viewduration: "0.10(667.2%)",
    avgviewed: "0:10  (67.2%)",
    pencil: <Pencil />,
    code: <Code />,
    videoplayer: <VideoPlayer />,
    download: <Download />,
    delete: <Delete />,
    switch: <SwitchButton />,
  },
  {
    id: 3,
    move: <Circle />,
    image: <img src="./img/Laptop.png" className="" />,
    title: "YouTube Video Long Title At The Top...",
    time: "Feb 17, 2021",
    views: 220,
    viewduration: "0.10(667.2%)",
    avgviewed: "0:10  (67.2%)",
    pencil: <Pencil />,
    code: <Code />,
    videoplayer: <VideoPlayer />,
    download: <Download />,
    delete: <Delete />,
    switch: <SwitchButton />,
  },
];

const ManageVideos = ({ name }: Props) => {
  return (
    <div className="mt-10 whitespace-nowrap w-96 ml-10">
      <div className="font-rota_bold text-sm flex items-center">
        <div className="flex space-x-14">
          <p>Move</p>
          <p>Videos (3 Total) </p>
        </div>
        <div className="flex ml-80 space-x-12">
          <p>Views</p>
          <p>Avg view duration</p>
          <p>Avg % viewed</p>
        </div>
      </div>
      <div className="mt-5 space-y-3 w-full">
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
            <div className="flex space-x-9 pl-[6rem]">
              <p>{array.views}</p>
              <p className="pl-4">{array.viewduration}</p>
              <p className="pl-10">{array.avgviewed}</p>
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
    </div>
  );
};

export default ManageVideos;
