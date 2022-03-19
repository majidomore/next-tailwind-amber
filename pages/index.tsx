import type { NextPage } from "next";
import Layout from "~/components/layouts/Layout";
import Banner from "../components/Banner";
import ViewsDetails from "~/components/ViewsDetails";
import PremiumAddons from "~/components/PremiumAddons";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="container mx-auto flex flex-col items-center">
        <Banner />
        <ViewsDetails />
      </div>
      <PremiumAddons />
    </Layout>
  );
};

export default Home;
