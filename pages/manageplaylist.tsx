import { NextPage } from "next";
import React from "react";
import Layout from "~/components/layouts/Layout";
import ManageHeader from "~/components/ManageHeader";
import ManageSection from "~/components/ManageSection";
import ManageVideos from "~/components/ManageVideos";

const ManagePlaylist: NextPage = () => {
  return (
    <Layout>
      <div className="pt-7 overflow-x-scroll min-h-screen">
        <div className="px-10">
          <ManageHeader />
          <ManageSection />
        </div>
        <ManageVideos />
      </div>
    </Layout>
  );
};

export default ManagePlaylist;
