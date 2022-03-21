import React from "react";
import { Active, Add, Basket, ChevronRight, Manage, Pen } from "./Icons";

type Props = {
  name?: string;
};

const AddPonder = ({ name }: Props) => {
  return (
    <div className="h-[387px] border-[1px] border-grey">
      <div className="h-[35px] bg-flow_blue flex items-center justify-between px-5">
        <p className="font-rota_black">Autores ponder Connectons</p>
        <ChevronRight />
      </div>
      <div className="px-6 mt-4 space-y-5">
        <div className="flex space-x-9">
          <div className="h-[116px] w-[266px] border-dark_grey border-[1.16px] border-dashed mt-4 bg-gallery flex flex-col items-center justify-center">
            <Add />
            <p className="font-rota_bold text-sm mt-2">
              Add new autoresponder connection
            </p>
          </div>
          <div className="bg-dark_yellow h-[30px] w-[33.91px] ml-auto"></div>
        </div>
        <div className="mt-2">
          <p className="font-rota_black">Active Connection</p>
          <div className="h-[117px]">
            <div className="flex justify-center items-center bg-royal_blue h-24 w-[266px]">
              <Active />
            </div>
            <div className="border-[1px] border-grey w-[266px] h-[34px] flex items-center justify-between px-6">
              <p className="text-[15px] text-dark_grey font-rota_bold pt-1">
                Active Campaign
              </p>
              <ul className="flex items-center space-x-3">
                <li>
                  <Manage />
                </li>
                <li>
                  <Pen />
                </li>
                <li>
                  <Basket />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPonder;
