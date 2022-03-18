import type { NextPage } from "next";
import Layout from "@/components/layouts/Layout";
import UploadButton from "~/components/UploadButton";

const Upload: NextPage = () => {
  return (
    <Layout title="Upload">
        <div className="container mx-auto">
<UploadButton/>
<Upload/>
        </div>
    </Layout>
  );
};

export default Upload;