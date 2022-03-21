import React from "react";
import Image from "next/image";

type Props = {
  name?: string;
};

const AddonsCards = ({ name }: Props) => {
  return (
    <div className="space-y-4 pb-20">
      {/* Addon 1 */}
      <div className="bg-white p-5 w-full">
        <div className="addon-card bg-green pb-2">
          <div className="flex flex-col pl-4">
            <div className="flex whitespace-nowrap">
              <h3 className="text-xl font-rota_black">
                HD<span className="font-rota_medium"> Resolutions</span>
              </h3>
              <p className="text-darky_blue text-lg pl-4 font-rota_semibold">
                (Active)
              </p>
            </div>
            <p className="text-dark_grey text-xs">Some text here..</p>
            <button className="bg-dark_green w-[135px] h-[35px] rounded-lg mt-5 font-rota_bold text-white text-lg">
              <p className="pt-1">$19/month</p>
            </button>
          </div>
          <Image
            height={130}
            width={130}
            src="/img/3d_hand.svg"
            alt="3d_hand"
          />
        </div>
      </div>
      {/* Addon 2 */}
      <div className="bg-white p-5 w-full">
        <div className="addon-card bg-light_grey pb-2">
          <div className="flex flex-col pl-4 whitespace-nowrap">
            <h3 className="text-xl font-rota_medium">
              Domain Level<span className="font-rota_black"> Security</span>
            </h3>
            <p className="text-dark_grey text-xs">Some text here..</p>
            <button className="bg-dark_blue w-[135px] h-[35px] rounded-lg mt-5 font-rota_bold text-white text-lg">
              <p className="pt-1">$9/month</p>
            </button>
          </div>
          <Image
            height={130}
            width={130}
            src="/img/3d_document.svg"
            alt="3d_document"
          />
        </div>
      </div>
      {/* Addon 3 */}
      <div className="bg-white p-5 w-full">
        <div className="addon-card bg-green pb-2">
          <div className="flex flex-col pl-4">
            <h3 className="text-xl font-rota_medium whitespace-nowrap">
              Analytics & <span className="font-rota_black">Retargeting</span>
            </h3>
            <p className="text-dark_grey text-xs">Some text here..</p>
            <button className="bg-dark_green w-[135px] h-[35px] rounded-lg mt-5 font-rota_bold text-white text-lg">
              <p className="pt-1">$19/month</p>
            </button>
          </div>
          <div className="mt-5">
            <Image
              height={130}
              width={130}
              src="/img/3d_hand.svg"
              alt="3d_hand"
            />
          </div>
        </div>
      </div>
      {/* Addon 4 */}
      <div className="bg-white p-5 w-full">
        <div className="addon-card bg-light_grey pt-3 pb-2">
          <div className="flex flex-col pl-4 whitespace-nowrap">
            <h3 className="text-xl font-rota_medium">
              Watermark<span className="font-rota_black">Videos</span>
            </h3>
            <p className="text-dark_grey text-xs">Some text here..</p>
            <button className="bg-dark_blue w-[135px] h-[35px] rounded-lg mt-5 font-rota_bold text-white text-lg">
              <p className="pt-1">$9/month</p>
            </button>
            <p className="font-rota_bold mt-2">(7 Dov free trial available)</p>
          </div>
          <Image
            height={130}
            width={130}
            src="/img/3d_document.svg"
            alt="3d_document"
          />
        </div>
      </div>
      {/* Addon 5 */}
      <div className="bg-white p-5 w-full">
        <div className="addon-card bg-green pb-2">
          <div className="flex flex-col pl-4">
            <h3 className="text-xl font-rota_medium whitespace-nowrap">
              Show <span className="font-rota_black">Advertisement</span>
            </h3>
            <p className="text-dark_grey text-xs">Some text here..</p>
            <button className="bg-dark_green w-[135px] h-[35px] rounded-lg mt-5 font-rota_bold text-white text-lg">
              <p className="pt-1">$19/month</p>
            </button>
          </div>
          <div className="mt-5">
            <Image
              height={130}
              width={130}
              src="/img/3d_hand.svg"
              alt="3d_hand"
            />
          </div>
        </div>
      </div>
      {/* Addon 6 pending */}
      <div className="bg-white p-5 w-full">
        <div className="flex bg-light_grey pt-3 pb-2">
          <div className="flex flex-col pl-4">
            <h3 className="text-xl font-rota_medium">
              Get more<span className="font-rota_black"> Storage</span>
            </h3>
            <p className="text-dark_grey text-xs">Some text here..</p>
            <div className="flex items-center mt-3 relative">
              <div className="w-[84px] border-[1px] border-black flex items-center px-2">
                <input type="text" className="border-0 bg-transparent w-full" />
                <p className="">GB</p>
              </div>
              <button className="bg-dark_blue w-[135px] h-[35px] rounded-lg font-rota_bold  text-white text-lg ml-3">
                <p className="pt-1">Buy</p>
              </button>
            </div>
            <p className="font-rota_bold mt-2">@ 0.10$ per GB / month</p>
          </div>
          <Image
            height={130}
            width={130}
            src="/img/3d_document.svg"
            alt="3d_document"
          />
        </div>
      </div>
      {/* Addon 7 */}
      <div className="bg-white p-5 w-full">
        <div className="addon-card bg-green pb-2">
          <div className="flex flex-col pl-4">
            <h3 className="text-xl font-rota_medium whitespace-nowrap">
              US West <span className="font-rota_black">Storage Region</span>
            </h3>
            <p className="text-dark_grey text-xs">Some text here..</p>
            <button className="bg-dark_green w-[135px] h-[35px] rounded-lg mt-5 font-rota_bold text-white text-lg">
              <p className="pt-1">$19/month</p>
            </button>
          </div>
          <div className="mt-5">
            <Image
              height={130}
              width={130}
              src="/img/3d_hand.svg"
              alt="3d_hand"
            />
          </div>
        </div>
      </div>
      {/* Addon 8 */}
      <div className="bg-white p-5 w-full">
        <div className="addon-card bg-light_grey pb-2">
          <div className="flex flex-col pl-4 whitespace-nowrap">
            <h3 className="text-xl font-rota_medium">
              Oceania<span className="font-rota_black"> Storage Region</span>
            </h3>
            <p className="text-dark_grey text-xs">Some text here..</p>
            <button className="bg-dark_blue w-[135px] h-[35px] rounded-lg mt-5 font-rota_bold text-white text-lg">
              <p className="pt-1">$9/month</p>
            </button>
          </div>
          <Image
            height={130}
            width={130}
            src="/img/3d_document.svg"
            alt="3d_document"
          />
        </div>
      </div>
      {/* Addon 9 */}
      <div className="bg-white p-5 w-full">
        <div className="addon-card bg-green pb-2">
          <div className="flex flex-col pl-4">
            <h3 className="text-xl font-rota_black whitespace-nowrap">
              White <span className="font-rota_medium">Label</span>
            </h3>
            <p className="text-dark_grey text-xs">Some text here..</p>
            <button className="bg-dark_green w-[135px] h-[35px] rounded-lg mt-5 font-rota_bold text-white text-lg">
              <p className="pt-1">$19/month</p>
            </button>
          </div>
          <div className="mt-5">
            <Image
              height={130}
              width={130}
              src="/img/3d_hand.svg"
              alt="3d_hand"
            />
          </div>
        </div>
      </div>
      {/* Addon 10 */}
      <div className="bg-white p-5 w-full">
        <div className="addon-card bg-bluish pt-2">
          <div className="flex flex-col pl-4">
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
      {/* Addon 11 */}
      <div className="bg-white p-5 w-full">
        <div className="addon-card bg-yellow pt-2">
          <div className="flex flex-col pl-4">
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
        </div>
      </div>
      {/* Addon 12 */}
      <div className="bg-white p-5 w-full">
        <div className="flex  bg-bluish pt-5 pb-5">
          <div className="flex flex-col pl-7">
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
            <div className="flex items-center">
              <input
                type="check"
                className="h-[18px] w-[18px] border-[1px] border-black bg-transparent"
              />
              <p className="ml-2 whitespace-nowrap font-rota_bold mt-1 text-[14.47px]">
                But this addon for agency
              </p>
            </div>
          </div>
          <Image height={130} width={130} src="/img/3d_paint.svg" alt="" />
        </div>
      </div>
      {/* Addon 13 */}
      <div className="bg-white p-5 w-full">
        <div className="addon-card bg-yellow pt-2">
          <div className="flex flex-col pl-4">
            <h3 className="text-xl font-rota_medium whitespace-nowrap">
              Video Download{" "}
              <span className="font-rota_black"> Protection</span>
            </h3>
            <p className="text-dark_grey text-xs">Some text here..</p>
            <button className="bg-dark_yellow w-[135px] h-[35px] rounded-lg mt-5 font-rota_bold text-white text-lg">
              <p className="pt-1">$9/month</p>
            </button>
            <p className="font-rota_bold text-[14.47px] mt-3">
              (7 Dov free trial available)
            </p>
          </div>
        </div>
      </div>
      {/* Addon 14 */}
      <div className="bg-white p-5 w-full">
        <div className="addon-card bg-bluish pt-2">
          <div className="flex flex-col pl-4">
            <h3 className="font-rota_medium text-xl whitespace-nowrap">
              Watchtime <span className="font-rota_black"> Heatmap</span>
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
          <Image height={130} width={130} src="/img/3d_paint.svg" alt="" />
        </div>
      </div>
      {/* Addon 15 */}
      <div className="bg-white p-5 w-full">
        <div className="addon-card bg-yellow pt-2">
          <div className="flex flex-col pl-4">
            <h3 className="text-xl font-rota_medium whitespace-nowrap">
              Get more
              <span className="font-rota_black"> Bandwidth</span>
            </h3>
            <p className="text-dark_grey text-xs">Some text here..</p>
            <div className="flex items-center mt-3 relative">
              <div className="w-[84px] border-[1px] border-black flex items-center px-2">
                <input type="text" className="border-0 bg-transparent w-full" />
                <p className="">GB</p>
              </div>
              <button className="bg-dark_yellow w-[135px] h-[35px] rounded-lg font-rota_bold  text-white text-lg ml-3">
                <p className="pt-1">Buy</p>
              </button>
            </div>
            <p className="font-rota_bold text-[14.47px] mt-3">
              @ 0.05$ per GB/ month
            </p>
          </div>
        </div>
      </div>
      {/* Addon 16 */}
      <div className="bg-white p-5 w-full">
        <div className="addon-card bg-bluish pt-2">
          <div className="flex flex-col pl-4">
            <h3 className="font-rota_medium text-xl whitespace-nowrap">
              US East <span className="font-rota_black"> Region</span>
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
          <Image height={130} width={130} src="/img/3d_paint.svg" alt="" />
        </div>
      </div>
      {/* Addon 17 */}
      <div className="bg-white p-5 w-full">
        <div className="addon-card bg-yellow pt-2">
          <div className="flex flex-col pl-4">
            <h3 className="text-xl font-rota_medium whitespace-nowrap">
              Asia
              <span className="font-rota_black"> Storage Region</span>
            </h3>
            <p className="text-dark_grey text-xs">Some text here..</p>
            <button className="bg-dark_yellow w-[135px] h-[35px] rounded-lg mt-5 font-rota_bold text-white text-lg">
              <p className="pt-1">$9/month</p>
            </button>
            <p className="font-rota_bold text-[14.47px] mt-3">
              (7 Dov free trial available)
            </p>
          </div>
        </div>
      </div>
      {/* Addon 18 */}
      <div className="bg-white p-5 w-full">
        <div className="addon-card bg-bluish pt-2 pb-2">
          <div className="flex flex-col pl-3">
            <div className="flex whitespace-nowrap">
              <h3 className="text-xl font-rota_black">
                Universal<span className="font-rota_medium"> Player</span>
              </h3>
              <p className="text-darky_blue text-lg pl-2 font-rota_semibold">
                (Active)
              </p>
            </div>
            <p className="text-dark_grey text-xs">Some text here..</p>
            <button className="bg-skyblue w-[135px] h-[35px] rounded-lg mt-5 font-rota_bold text-white text-lg">
              <p className="pt-1">$44,50/month</p>
            </button>
            <p className="font-rota_bold text-[14.47px] mt-3">
              (7 Dov free trial available)
            </p>
          </div>
          <Image
            height={130}
            width={130}
            src="/img/3d_paint.svg"
            alt="3d_paint"
          />
        </div>
      </div>
    </div>
  );
};

export default AddonsCards;
