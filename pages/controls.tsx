import React from "react";
import Layout from "@/components/layouts/Layout";
import Category from "~/components/Category";
import AddUpload from "~/components/AddUpload";
import ControlsSection from "~/components/ControlsSection";

type Props = {
  name?: string;
};

const Controls = ({ name }: Props) => {
  return (
    <Layout>
      <div className="container mx-auto w-full mt-10 h-full md:px-24">
        <ControlsSection />
        <Category />
        <AddUpload />
        <hr className="mt-[50px] bg-black h-[1.3px]" />
      </div>
    </Layout>
  );
};

export default Controls;
