import React from "react";
import { ChevronRight } from "./Icons";

type Props = {
  name?: string;
};

const UsageStat = ({ name }: Props) => {
  return (
    <div className="border-[1px] border-grey">
      <div className="h-[35px] bg-flow_blue flex items-center justify-between px-5">
        <p className="font-rota_black">Usage stats</p>
        <ChevronRight />
      </div>
    </div>
  );
};

export default UsageStat;
