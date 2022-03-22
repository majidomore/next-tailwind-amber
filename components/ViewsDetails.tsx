import React from "react";

type Props = {
  name?: string;
};

const ViewsDetails = ({ name }: Props) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2 place-items-center w-full">
      {/* Card 1 */}
      <div className="views-grid space-y-3">
        <span>
          <p className="font-rota_bold text-[28.17px]">153</p>
          <p className="font-rota_semibold text-[13.64px] -mt-2">
            Viewers watching
          </p>
        </span>
        <p className="font-rota_black text-xl">Your Videos</p>
      </div>
      {/* Card 2 */}
      <div className="views-grid">
        <p className="font-rota_semibold text-2xl mt-2">22000</p>
        <p className="font-rota_black text-xl mt-7">Total Views</p>
      </div>
      {/* Card 3 */}
      <div className="views-grid md:order-4 order-3">
        <p className="font-rota_bold text-[28.17px] mt-1">22</p>
        <p className="font-rota_black text-xl mt-6">Total Videos</p>
      </div>
      {/* Card 4 */}
      <div className="views-grid">
        <p className="font-rota_bold text-[28.17px] mt-1">
          671.5 <span className="font-rota_semibold text-[18px]"> hrs</span>
        </p>
        <p className="font-rota_black text-xl mt-6">Watch Time</p>
      </div>
    </div>
  );
};

export default ViewsDetails;
