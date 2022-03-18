import React from "react";
import Layout from "@/components/layouts/Layout";

type Props = {
  name?: string;
};

const Controls = ({ name }: Props) => {
  return (
    <Layout>
      <div className="container mx-auto w-full mt-10">
        <div className="bg-black text-white w-full rounded-full text-center">
          Loading
        </div>
        <button className="gradient_button h-[45px] mt-5">Cancel</button>
        <input
          type="text"
          className="border-[1px] border-grey w-full rounded-[4px] mt-5 placeholder:font-rota_bold placeholder:text-[16.82px] text-dark_grey p-3 pl-5"
          placeholder="Enter video title here"
        />
      </div>
    </Layout>
  );
};

export default Controls;
