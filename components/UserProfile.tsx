import React from "react";

type Props = {
  name?: string;
};

const UserProfile = ({ name }: Props) => {
  return (
    <div className="outline outline-2 outline-grey rounded-full p-[2px]">
      {/* User Image */}
      <img src="./img/UserProfile.png" alt="User-img" />
    </div>
  );
};

export default UserProfile;
