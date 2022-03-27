import React, { ReactNode } from "react";
import Head from "next/head";
import Aside from "@/components/Aside";
import MainHeader from "~/components/MainHeader";

type Props = {
  children?: ReactNode;
  title?: string;
  header?: boolean;
};

const Layout = ({
  children,
  title = "This is the default title",
  header,
}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <div className="flex">
      <Aside />
      <div className="w-full">
        {header && <MainHeader />}
        <main>{children}</main>
      </div>
    </div>
  </div>
);

export default Layout;
