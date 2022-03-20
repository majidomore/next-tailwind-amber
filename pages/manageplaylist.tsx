import { NextPage } from "next";
import React from "react";
import ManageHeader from "~/components/ManageHeader";
import ManageSection from "~/components/ManageSection";
import ManageVideos from "~/components/ManageVideos";

const ManagePlaylist: NextPage = () => {
  return (
    <div className="container mx-auto pt-7 overflow-x-scroll min-h-screen">
      <ManageHeader />
      <ManageSection />
      <ManageVideos />
    </div>
  );
};

export default ManagePlaylist;
