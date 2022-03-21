import { NextPage } from "next";
import React from "react";
import AddonsCards from "@/components/AddonsCards";
import Layout from "@/components/layouts/Layout";

type Props = {
  name?: string;
};

const Addons: NextPage = () => {
  return (
    <Layout>
      <div className="bg-spring_wood mt-7">
        {/* Heading */}
        <div className="text-center">
          <h1 className="font-rota_black text-[28px] pt-7">Addons</h1>
          <p className="font-rota_semibold text-xl">
            Get powerful addons to boost experience
          </p>
        </div>
        <AddonsCards />
      </div>
    </Layout>
  );
};

export default Addons;
