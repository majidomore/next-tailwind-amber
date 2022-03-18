import type { NextPage } from "next";
import Layout from "@/components/layouts/Layout";
import UploadButton from "~/components/UploadButton";
import UploadForm from "~/components/UploadForm";

const Upload: NextPage = () => {
  return (
    <Layout title="Home page">
      <div className="container mx-auto flex flex-col items-center">
        <UploadForm />
      </div>
    </Layout>
  );
};

export default Upload;
