import { NextPage } from "next";
import React from "react";
import CheckoutHeader from "~/components/CheckoutHeader";
import OrderSummary from "~/components/OrderSummary";
import PaymentMethod from "~/components/PaymentMethod";

const Checkout: NextPage = () => {
  return (
    <div>
      <CheckoutHeader />
      <OrderSummary />
      <PaymentMethod />
    </div>
  );
};
export default Checkout;
