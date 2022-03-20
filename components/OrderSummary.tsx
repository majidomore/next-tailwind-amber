import Image from "next/image";
import React from "react";
import { Union } from "./Icons";

const OrderSummary = () => {
  return (
    <div className="mt-4 flex flex-col items-center w-full">
      <h1 className="text-center font-rota_bold text-2xl">Order Summary</h1>
      <div className="mt-7">
        <Image width={192} height={197} src="/img/goldenpanel.png" />
      </div>
      <div className="container mx-auto space-y-3">
        <div className="flex items-center border-purple border-2 h-[58px] w-full rounded px-3">
          <Union />
          <input
            type="text"
            className="border-0 text-dark_grey text-[23.88px] font-rota_semibold pt-3 outline-none focus:outline-none"
            placeholder="Onetime payment"
          />
          <p className="text-[22px] font-rota_black text-purple pt-1">
            $110.00
          </p>
        </div>
        <div className="flex items-center justify-between border-purple border-2 h-[58px] w-full rounded px-3">
          <input
            type="text"
            className="border-0 text-dark_grey text-[23.88px] font-rota_semibold pt-3 outline-none focus:outline-none"
            placeholder="Enter coupon code"
          />
          <button className="bg-purple font-rota_bold text-white rounded-3xl w-[79px] h-[36px]">
            APPLY
          </button>
        </div>
        <p className="text-dark_grey font-rota_bold">
          You have a 7-day free trial ending on 20 Jan 2022
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;
