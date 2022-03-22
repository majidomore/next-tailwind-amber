import React from "react";

type Props = {
  name?: string;
};

const VideoScript = ({ name }: Props) => {
  let text =
    "<script data-cfascync=”false”> var swarmoptions = { swarmoptions: “hvjjkbk-jhbjh-scs8161-zscd55”, iframeRepalcement:”iframe”, autoreplace:{ youtube:true } }; </script> <script async data-cfasync=”false” src=”https://assets.swarmcdn.com/cross/swaemdetect.js”></script>";
  return (
    <div>
      <div className="flex flex-col items-center w-full">
        <div className="border-[1px] border-grey rounded-[14px] h-[282px] mt-4 bg-black_squeeze p-5">
          <p className="whitespace-normal font-rota_regular text-sm">{text}</p>
        </div>
        <button className="bg-light_indigo text-indigo font-rota_bold rounded-md h-[43px] w-[215px] mt-5">
          Copy this script
        </button>
      </div>
      <div className="flex flex-col items-center mt-10">
        <p className="font-rota_bold text-indigo tracking-wider mr-auto">
          NOTE FOR DEVELOPER
        </p>
        <div className="border-2 border-indigo p-5">
          <p className="font-rato_medium text-sm">
            Established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here'.
          </p>
        </div>
        <button className="my-12 bg-primary font-rato_semibold h-10 w-[279px] text-white rounded-md">
          Generate Script
        </button>
      </div>
    </div>
  );
};

export default VideoScript;
