import React from "react";

type Props = {
  name?: string;
};

const SignupBanner = ({ name }: Props) => {
  return (
    <div className="mt-32 relative flex flex-col items-center justify-center">
      <h1 className="text-white text-center font-rota_extrabold leading-[60px]">
        Register Your <br /> Account
      </h1>
      <p className="font-rota_medium text-[23px] text-soft_grey text-center mt-3">
        Choose from 130.000 online video <br /> courses with new additions{" "}
        <br />
        published ever second month
      </p>
    </div>
  );
};

export default SignupBanner;
