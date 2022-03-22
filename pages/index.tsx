import type { NextPage } from "next";
import Layout from "~/components/layouts/Layout";
import Banner from "../components/Banner";
import ViewsDetails from "~/components/ViewsDetails";
import PremiumAddons from "~/components/PremiumAddons";

const Home: NextPage = () => {
  return (
    <Layout header>
      <div className="flex flex-col items-center px-7">
        <Banner />
        <ViewsDetails />
      </div>
      <PremiumAddons />
    </Layout>
  );
};

export default Home;
