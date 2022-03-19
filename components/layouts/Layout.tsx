import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Aside from "@/components/Aside";

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
    <div className="flex">
      <Aside />
      <div className="w-full">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  </div>
);

export default Layout;
