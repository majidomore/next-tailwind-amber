import React from "react";

type Props = {
  name?: string;
};

const LoadingBar = ({ name }: Props) => {
  return (
    <div className="flex items-center justify-end sm:flex-row flex-col w-full space-x-5">
      {/* Loading bar */}
      <div className="text-white w-full rounded-full text-center border-2 md:border-4 border-black">
        <div className="w-9/12 bg-black h-5 rounded-l-full font-rota_medium text-sm pt-0.5">
          Uploading 70%...30 seconds left
        </div>
      </div>
      <button className="gradient_button w-[135px] h-[45px] sm:mt-0 mt-5">
        Cancel
      </button>
    </div>
  );
};

export default LoadingBar;
