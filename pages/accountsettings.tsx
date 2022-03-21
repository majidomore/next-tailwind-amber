import { NextPage } from "next";
import React from "react";
import AccountHeader from "~/components/AccountHeader";

const AccountSettings: NextPage = () => {
  return (
    <div className="container mx-auto pt-4">
      <AccountHeader />
    </div>
  );
};

export default AccountSettings;
