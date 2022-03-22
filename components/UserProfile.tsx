import React from "react";
import Image from "next/image";

type Props = {
  name?: string;
};

const UserProfile = ({ name }: Props) => {
  return (
    <div className="outline outline-2 outline-grey rounded-full p-[2px] h-[40px] w-[40px]">
      {/* User Image */}
      <img height={40} width={40} src="/img/UserProfile.png" alt="User-img" />
    </div>
  );
};

export default UserProfile;
