import React from "react";
import { Flag } from "./Icons";

type Props = {
  name?: string;
};

const CheckoutHeader = ({ name }: Props) => {
  return (
    <div className="bg-purple w-full flex items-center justify-center space-x-6 h-[60px]">
      <p className="font-rota_bold text-white text-[21.41px] mt-1">
        Lets Checkout
      </p>
      <hr className="h-[23px] bg-dark_grey w-[1px]" />
      <Flag />
    </div>
  );
};

export default CheckoutHeader;
