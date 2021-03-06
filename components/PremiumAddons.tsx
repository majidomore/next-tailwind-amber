import React from "react";
import Image from "next/image";
import { Goto } from "./Icons";

type Props = {
  name?: string;
};

const PremiumAddons = ({ name }: Props) => {
  return (
    <div className="bg-spring_wood mt-20 flex flex-col items-center pb-10 w-full h-full">
      {/* Premium addons text */}
      <div className="text-center py-10">
        <h1 className="font-rota_bold text-2xl">Premium Addons</h1>
        <p className="font-rota_semibold">
          Get powerful addons to boost experience
        </p>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 place-items-center md:w-9/12 w-full">
        {/* Card 1 */}
        <div className="bg-white p-5 w-full">
          <div className="addon-card bg-bluish">
            <div className="flex flex-col p-3">
              <h3 className="font-rota_medium text-xl whitespace-nowrap">
                Password Protect <span className="font-rota_black">Videos</span>
              </h3>
              <p className="text-dark_grey font-rota_bold text-xs">
                Some text here..
              </p>
              <button className="bg-skyblue w-[135px] h-[35px] rounded-lg mt-5 font-rota_bold text-white text-lg">
                <p className="pt-1">$9/month</p>
              </button>
              <p className="font-rota_bold text-[14.47px] mt-3">
                (7 Dov free trial available)
              </p>
            </div>
            <Image height={150} width={150} src="/img/3d_paint.svg" alt="" />
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white p-5 w-full">
          <div className="addon-card bg-yellow">
            <div className="flex flex-col p-2">
              <h3 className="text-xl font-medium">
                Video<span className="font-rota_black"> Popups</span>
              </h3>
              <p className="text-dark_grey text-xs">Some text here..</p>
              <button className="bg-dark_yellow w-[135px] h-[35px] rounded-lg mt-5 font-rota_bold text-white text-lg">
                <p className="pt-1">$9/month</p>
              </button>
              <p className="font-rota_bold text-[14.47px] mt-3">
                (7 Dov free trial available)
              </p>
            </div>
            <Image
              height={150}
              width={150}
              src="/img/3d_rocket.svg"
              alt="3d_rocket"
            />
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white p-5 w-full">
          <div className="addon-card bg-green">
            <div className="flex flex-col p-2">
              <h3 className="text-xl font-rota_black">
                HD<span className="font-rota_medium"> Resolutions</span>
              </h3>
              <p className="text-dark_grey text-xs">Some text here..</p>
              <button className="bg-dark_green w-[135px] h-[35px] rounded-lg mt-5 font-rota_bold text-white text-lg">
                <p className="pt-1">$19/month</p>
              </button>
            </div>
            <Image
              height={150}
              width={150}
              src="/img/3d_hand.svg"
              alt="3d_hand"
            />
          </div>
        </div>
        {/* Card 4 */}
        <div className="bg-white p-5 w-full">
          <div className="addon-card bg-light_grey">
            <div className="flex flex-col p-2">
              <h3 className="text-xl font-rota_medium">
                Domain Level<span className="font-rota_black"> Security</span>
              </h3>
              <p className="text-dark_grey text-xs">Some text here..</p>
              <button className="bg-dark_blue w-[135px] h-[35px] rounded-lg mt-5 font-rota_bold text-white text-lg">
                <p className="pt-1">$9/month</p>
              </button>
            </div>
            <Image
              height={150}
              width={150}
              src="/img/3d_document.svg"
              alt="3d_document"
            />
          </div>
        </div>
      </div>
      {/* More Button */}
      <div className="flex justify-center mt-5">
        <button className="bg-light_grey w-[92px] h-[36px] flex items-center justify-center rounded-[5px] space-x-2">
          <p className="font-rota_semibold">More</p>
          <Goto />
        </button>
      </div>
    </div>
  );
};

export default PremiumAddons;
