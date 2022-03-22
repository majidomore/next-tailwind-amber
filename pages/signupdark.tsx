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
        <div className="flex flex-col md:flex-col-reverse items-center md:w-4/6 w-full">
          <SignupLinks />
          <h2 className="mt-7 text-[38px] text-soft_grey">/</h2>
          <Signup />
        </div>
      </div>
      <div className="mt-6 text-center">
        <a href="#" className="text-white font-rota_semibold text-xl">
          Already have an account?
          <a href="#" className="underline">
            Sign In
          </a>
        </a>
      </div>
    </div>
  );
};

export default SignupDark;
