import React from "react";
import Nav from "./Nav";

type Props = {
  name?: string;
};

const Header = ({ name }: Props) => {
  return (
    <div>
      <Nav />
      <h1>Thi is Header</h1>
    </div>
  );
};

export default Header;
