import React from "react";
import { Add, ChevronRight } from "./Icons";

type Props = {
  name?: string;
};

const WhiteAgency = ({ name }: Props) => {
  return (
    <div className="border-[1px] border-grey">
      {/* Title */}
      <div className="h-[35px] bg-flow_blue flex items-center justify-between px-5">
        <p className="font-rota_black">White Label for agency</p>
        <ChevronRight />
      </div>
      <div className="container mx-auto px-8 mt-10 pb-20">
        <div className="bg-dark_yellow h-[30px] w-[33.91px] -m-4 absolute float-right ml-72"></div>
        {/* Add Things */}
        <div className="space-y-4">
          <div className="border-[1px] border-dashed border-dark_grey h-16 bg-gallery flex items-center justify-start pl-10 space-x-4">
            <Add />
            <p className="font-rota_bold text-[19px] mt-1">Upload Logo</p>
          </div>
          <div className="border-[1px] border-dashed border-dark_grey h-16 bg-gallery flex items-center justify-start pl-10 space-x-4">
            <Add />
            <p className="font-rota_bold text-[19px] mt-1">Add Plan</p>
          </div>
          <div className="border-[1px] border-dashed border-dark_grey h-16 bg-gallery flex items-center justify-start pl-10 space-x-4">
            <Add />
            <p className="font-rota_bold text-[19px] mt-1">Add User</p>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="font-rota_bold text-xl border-b-2 w-44 pb-1">
            Active Pricing Plans
          </h3>
          <div className="flex justify-between items-center mt-3">
            <p className="text-grey text-lg font-rota_bold">
              Gold Plan(100GB) <br />
              <span className="text-indigo"> -$59/onetime </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhiteAgency;
