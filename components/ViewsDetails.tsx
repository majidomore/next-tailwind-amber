import React from "react";

type Props = {
  name?: string;
};

const ViewsDetails = ({ name }: Props) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 place-items-center w-full">
      {/* Card 1 */}
      <div className="views-grid space-y-3">
        <span>
          <p className="font-rota_bold text-[28.17px]">153</p>
          <p className="font-rota_semibold text-[13.64px] -mt-2">
            Viewers watching
          </p>
        </span>
        <p className="font-rota_black text-2xl">Your Videos</p>
      </div>
      {/* Card 2 */}
      <div className="views-grid">
        <p className="font-rota_bold text-[28.17px]">22000</p>
        <p className="font-rota_black text-2xl">Total Views</p>
      </div>
      {/* Card 3 */}
      <div className="views-grid">
        <p className="font-rota_bold text-[28.17px]">22</p>
        <p className="font-rota_black text-2xl">Total Videos</p>
      </div>
      {/* Card 4 */}
      <div className="views-grid">
        <p className="font-rota_bold text-[28.17px]">
          671.5 <span className="font-rota_semibold text-[18px]"> hrs</span>
        </p>
        <p className="font-rota_black text-2xl">Watch Time</p>
      </div>
    </div>
  );
};

export default ViewsDetails;
