import { NextPage } from "next";
import React from "react";
import AccountHeader from "@/components/AccountHeader";
import AddPonder from "@/components/AddPonder";
import AllowedDomains from "@/components/AllowedDomains";
import CustomDomain from "@/components/CustomDomain";
import EnabledReso from "@/components/EnabledReso";
import SecurityOptions from "@/components/SecurityOptions";
import TeamAccounts from "@/components/TeamAccounts";
import WhiteAgency from "@/components/WhiteAgency";
import UsageStat from "~/components/UsageStat";

const AccountSettings: NextPage = () => {
  return (
    <div className="container mx-auto pt-4 space-y-5 pb-10">
      <AccountHeader />
      <EnabledReso />
      <SecurityOptions />
      <AllowedDomains />
      <TeamAccounts />
      <CustomDomain />
      <AddPonder />
      <WhiteAgency />
      <UsageStat />
    </div>
  );
};

export default AccountSettings;
