import React from "react";
import { Barchart, Events, Globe, Jigsaw, XXX } from "./Icons";

type Props = {
  name?: string;
};

const NavIcons = ({ name }: Props) => {
  return (
    <ul className="flex items-center space-x-4">
      {/* Globe Icon */}
      <li>
        <a href="#">
          <Globe />
        </a>
      </li>
      {/* Jigsaw Icon */}
      <li>
        <a href="#">
          <Jigsaw />
        </a>
      </li>
      {/* Barchart Icon */}
      <li>
        <a href="#">
          <Barchart />
        </a>
      </li>
      {/* xxx Icon */}
      <li>
        <a href="#">
          <XXX />
        </a>
      </li>
      {/* Event Icon */}
      <li>
        <a href="#">
          <Events />
        </a>
      </li>
    </ul>
  );
};

export default NavIcons;
