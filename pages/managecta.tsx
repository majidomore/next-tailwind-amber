import React from "react";
import { WindowFile } from "~/components/Icons";
import ManageHeader from "~/components/ManageHeader";
import ManageCTA from "~/components/ManageCTA";
import { NextPage } from "next";
import Layout from "~/components/layouts/Layout";

const ManageCta: NextPage = () => {
  return (
    <Layout>
      <div className="container mx-auto p-5 overflow-x-scroll min-h-screen md:px-10">
        <ManageHeader />
        <button className="upload-button flex items-center justify-center md:w-64 w-full font-rota_semibold h-[47px] sm:ml-auto">
          Download collected emails
        </button>
        <div className="flex justify-center items-center md:hidden mt-5 space-x-4">
          <WindowFile />
          <p className="font-rota_semibold text-[16.03px] mt-1">
            Create New CTA
          </p>
        </div>
        <ManageCTA />
      </div>
    </Layout>
  );
};

export default ManageCta;
