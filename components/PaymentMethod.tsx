import React, { useState } from "react";
import { Ellipse, Union } from "./Icons";

const PaymentMethod = () => {
  return (
    <div className="container mx-auto mt-5 mb-20">
      <div className="flex items-center space-x-4 group">
        <hr className="bg-purple h-1 w-[18px]" />
        <h3 className="font-rota_black text-[17px] mt-1 group-focus:text-5xl">
          CHOOSE METHOD
        </h3>
      </div>
      {/* Payment methods */}
      <div className="space-y-3">
        {/* Credit Card */}
        <div className="border-[1.5px] border-purple rounded p-3 h-[113px] flex items-center mt-1 group">
          <div className="flex space-x-4">
            <span className="group-focus-within:hidden block">
              <Union />
            </span>
            <span className="group-focus-within:block hidden">
              <Ellipse />
            </span>
            <div>
              <p className="font-rota_black">Credit Card</p>
              <p className="text-dark_grey text-[13px] font-rota_medium w-64 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        {/* Paypal */}
        <div className="border-[1.5px] border-grey rounded p-3 h-[113px] flex items-center mt-1 group">
          <div className="flex space-x-4">
            <Ellipse />
            <div>
              <p className="font-rota_black">PayPal</p>
              <p className="text-dark_grey text-[13px] font-rota_medium w-64 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        {/* 2Checkout */}
        <div className="border-[1.5px] border-grey rounded p-3 h-[113px] flex items-center mt-1 group">
          <div className="flex space-x-4">
            <Ellipse />
            <div>
              <p className="font-rota_black">2Checkout</p>
              <p className="text-dark_grey text-[13px] font-rota_medium w-64 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <form className="mt-10 space-y-5 flex flex-col items-center">
        <div className="w-full">
          <label htmlFor="" className="font-rota_black text-dark_grey">
            CARD NUMBER
          </label>
          <input
            type="text"
            placeholder="- - - - - - - - -"
            className="input mt-2"
          />
        </div>
        <div className="w-full">
          <label htmlFor="" className="font-rota_black text-dark_grey">
            NAME ON CARD
          </label>
          <input type="text" className="input mt-2" />
        </div>
        <div className="flex space-x-4">
          <div className="">
            <label htmlFor="" className="font-rota_black text-dark_grey">
              EXPIRY DATE
            </label>
            <input
              type="text"
              className="input mt-2 date-input"
              value=""
              placeholder="MM/YY"
            />
          </div>
          <div className="">
            <label htmlFor="" className="font-rota_black text-dark_grey">
              CODE
            </label>
            <input
              type="text"
              className="input mt-2 date-input"
              value=""
              placeholder="- - - -"
            />
          </div>
        </div>
        <div className="bg-purple h-[50px] flex items-center justify-between px-3 font-rota_black text-[17px] pt-1 text-white rounded w-full">
          <p>GRAND TOTAL</p>
          <p>$110</p>
        </div>
        <button className="bg-purple h-[50px] w-[266px] flex items-center justify-center px-3 font-rota_black text-[17px] pt-1 text-white rounded-full">
          <p>Confirm & pay</p>
        </button>
      </form>
    </div>
  );
};

export default PaymentMethod;
