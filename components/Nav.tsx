import Link from "next/link";
import React from "react";

type Props = {
  name?: string;
};

const Nav = ({ name }: Props) => {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a className="ml-5">About</a>
      </Link>
    </div>
  );
};

export default Nav;
