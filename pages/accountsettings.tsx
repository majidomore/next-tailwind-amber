import { NextPage } from "next";
import React from "react";
import AccountHeader from "~/components/AccountHeader";
import AllowedDomains from "~/components/AllowedDomains";
import EnabledReso from "~/components/EnabledReso";
import SecurityOptions from "~/components/SecurityOptions";

const AccountSettings: NextPage = () => {
  return (
    <div className="container mx-auto pt-4 space-y-5 pb-20">
      <AccountHeader />
      <EnabledReso />
      <SecurityOptions />
      <AllowedDomains />
    </div>
  );
};

export default AccountSettings;
