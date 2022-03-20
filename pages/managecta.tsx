import React from "react";
import { WindowFile } from "~/components/Icons";
import ManageHeader from "~/components/ManageHeader";
import ManageCTA from "~/components/ManageCTA";
import { NextPage } from "next";

const ManageCta: NextPage = () => {
  return (
    <div className="container mx-auto p-5 overflow-x-scroll min-h-screen">
      <ManageHeader />
      <button className="upload-button font-rota_semibold h-[47px]">
        Download collected emails
      </button>
      <div className="flex justify-center items-center mt-5 space-x-4">
        <WindowFile />
        <p className="font-rota_semibold text-[16.03px] mt-1">Create New CTA</p>
      </div>
      <ManageCTA />
    </div>
  );
};

export default ManageCta;
