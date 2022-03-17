import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";

type Props = {
  children?: ReactNode;
  title?: string;
  home?: boolean;
};

const Layout = ({
  children,
  title = "This is the default title",
  home,
}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    <main className="min-h-screen container mx-auto pt-28">{children}</main>
    <Footer />
  </div>
);

export default Layout;
