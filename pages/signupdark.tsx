import React from "react";
import {
  Apple,
  DoooLogo,
  Facebook,
  Google,
  Menu,
  SearchWhite,
} from "~/components/Icons";
import MenuButton from "~/components/MenuButton";
import SignupLinks from "~/components/SignupLinks";
import SignupBanner from "~/components/SignupBanner";
import SignupHeader from "~/components/SignupHeader";
import Signup from "~/components/Signup";

type Props = {
  name?: string;
};

const SignupDark = ({ name }: Props) => {
  return (
    <div className="bg-signup_bg min-h-screen py-6">
      <div className="flex justify-end">
        <img src="/img/signup-bg.png" className="fixed" alt="" />
      </div>
      <div className="container mx-auto flex flex-col items-center">
        <SignupHeader />
        <SignupBanner />
        <SignupLinks />
        <h2 className="mt-7 text-[38px] text-soft_grey">/</h2>
        <Signup />
      </div>
    </div>
  );
};

export default SignupDark;
