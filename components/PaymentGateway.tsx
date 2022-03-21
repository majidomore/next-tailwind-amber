import React from "react";

type Props = {
  name?: string;
};

const PaymentGateway = ({ name }: Props) => {
  return (
    <div className="mt-16 space-y-3">
      <h3 className="font-rota_bold text-xl border-b-2 w-56 pb-1">
        Setup Payment Gateway
      </h3>
      <input
        type="text"
        className="input border-0 placeholder:whitespace-normal h-16 rounded font-rota_semibold pt-0 bg-aqua_haze"
        placeholder="Enter PayPal email to enable PayPal on checkout page"
      />
      <input
        type="text"
        className="input border-0 placeholder:whitespace-normal h-16 rounded font-rota_semibold pt-0 bg-aqua_haze"
        placeholder="Enter PayPal emgil to engble PayPal on checkout page"
      />
      <input
        type="text"
        className="input border-0 placeholder:whitespace-normal h-16 rounded font-rota_semibold pt-0 bg-aqua_haze"
        placeholder="Enter Stripe Secret Key to enable Stripe on checkout page"
      />
      <input
        type="text"
        className="input border-0 placeholder:whitespace-normal h-16 rounded font-rota_semibold pt-0 bg-aqua_haze"
        placeholder="Enter 2Checkout key to enable 2Checkout on checkout page"
      />
      <div className="space-x-3 ml-2 flex items-center">
        <input
          type="checkbox"
          className="bg-indigo w-[17px] h-[17px] rounded checked:bg-indigo"
        />
        <p className="font-rota_bold text-lg mt-1">
          Enable sandbox/testing mode
        </p>
      </div>
      <button className="w-full bg-light_indigo text-indigo h-[43px] rounded text-[17px] font-rota_black pt-1">
        Save
      </button>
    </div>
  );
};

export default PaymentGateway;
