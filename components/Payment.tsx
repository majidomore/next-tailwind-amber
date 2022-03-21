import React from "react";
import { EyeFill, MasterCard, Paypal } from "./Icons";

type Props = {
  name?: string;
};

const Payment = ({ name }: Props) => {
  return (
    <div>
      {/* Payment */}
      <div className="border-[1px] border-grey rounded-md h-[129px] mt-5">
        <div className="flex justify-between p-3">
          <p className="text-[17.41px] font-rota_semibold">Payment</p>
          <button className="bg-black w-[102px] h-11 rounded-md text-white font-rota_bold text-[17.41px]">
            Change
          </button>
        </div>
        <div className="flex items-center space-x-5 px-3 text-sm -mt-5">
          <MasterCard />
          <p className="text-dark_grey font-rota_regular">
            XXXXXXXXX9599 09/24
          </p>
        </div>

        <div className="flex items-center justify-between px-3 text-sm mt-2">
          <div className="flex items-center space-x-5">
            <Paypal />
            <p className="text-dark_grey font-rota_regular">z788@gmail.com</p>
          </div>
          <a href="#" className="text-dark_grey text-sm font-rota_regular mt-1">
            (Cancel)
          </a>
        </div>
      </div>
      {/* Active Pricing Plan */}
      <div className="mt-10">
        <h3 className="font-rota_bold text-lg">
          Active Pricing Plan & Addons:
        </h3>
        {/* Addons Plans */}
        <div className="space-y-2 mt-2">
          <div className="flex justify-between text-[17.41px] font-rota_regular">
            <p> - Gold plan @ $30/month</p>
            <a href="#" className="underline text-lock_blue">
              cancel
            </a>
          </div>
          <div className="flex justify-between text-[17.41px] font-rota_regular">
            <p>
              - HD Resolutions Addon @ $20/ <br /> month
            </p>
            <a href="#" className="underline text-lock_blue">
              cancel
            </a>
          </div>
          <div className="flex justify-between text-[17.41px] font-rota_regular">
            <p>- Universal Player @ $44.50/month</p>
            <a href="#" className="underline text-lock_blue">
              cancel
            </a>
          </div>
        </div>
        {/* Total Payment */}
        <div className="mt-10">
          <h3 className="font-rota_bold text-lg">Total payment</h3>
          <p className="text-[17.41px] font-rota_semibold">
            $94.50/Month{" "}
            <span className="text-lock_blue">
              (Addons payment is included in this amount)
            </span>
          </p>
          <p className="font-rota_semibold text-[17.41px]">
            Your plan will renew on Jan. 16, 2022.
          </p>
        </div>
        <div className="mt-6">
          <p className="font-rota_bold text-[17.41px]">API KEY</p>
          <div className="flex justify-between items-center pl-3 p-0 h-[44px] input bg-aqua_haze border-black">
            <input
              type="password"
              placeholder=".........................."
              className=" border-0 p-0 bg-aqua_haze placeholder:text-5xl placeholder:text-black w-56"
            />
            <div className="border-l-2 border-black h-full w-16 flex justify-center items-center">
              <EyeFill />
            </div>
          </div>
        </div>
        <p className="font-rota_regular text-sm mt-5">
          This is the key that you can use to programmatically upload or delete
          the audio/video files and to get URL of uploaded video/audio files.{" "}
          <a href="#" className="text-lock_blue">
            API Documentation
          </a>
        </p>
        <button className="bg-black w-full h-11 rounded-md text-white font-rota_bold text-[17.41px] mt-7">
          Delete account permanently
        </button>
        <p className="font-rota_bold mt-5 text-sm">
          <span className="text-red">Warning message:</span> I understand that
          all of my videos will be permanently removed. (show this as a popup)
        </p>
      </div>
    </div>
  );
};

export default Payment;
