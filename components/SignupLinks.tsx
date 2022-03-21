import React from "react";
import { Google, Facebook, Apple } from "./Icons";

type Props = {
  name?: string;
};

const SignupLinks = ({ name }: Props) => {
  return (
    <div className="flex flex-col space-y-5 mt-5 w-full">
      <button className="h-16 w-full border-gradient flex items-center space-x-6 pl-6">
        <Google />
        <p className="font-rota_bold text-white text-[19px] mt-1">
          Sign up with Google
        </p>
      </button>
      <button className="h-16 w-full border-gradient2 flex items-center space-x-8 pl-7">
        <Facebook />
        <p className="font-rota_bold text-white text-[19px] mt-1">
          Sign up with Facebook
        </p>
      </button>
      <button className="h-16 w-full border-gradient flex items-center space-x-8 pl-7">
        <Apple />
        <p className="font-rota_bold text-white text-[19px] mt-1">
          Sign up with Apple
        </p>
      </button>
    </div>
  );
};

export default SignupLinks;
