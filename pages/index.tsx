import type { NextPage } from "next";
import Layout from "@/components/layouts/Layout";

const Home: NextPage = () => {
  return (
    <Layout title="Home page">
      <h1 className="text-red-500">Home Page</h1>
    </Layout>
  );
};

export default Home;
