import React, { useState } from "react";
import {
  Add,
  ChevronDown,
  ChevronRight,
  Delete,
  Down,
  Pencilline,
  Star,
} from "./Icons";
import Switch from "react-switch";
import AddUser from "./AddUser";
import PricingPlan from "./PricingPlan";
import PaymentGateway from "./PaymentGateway";

const array = [
  {
    id: 1,
    title: "User Email",
  },
];

const WhiteAgency = () => {
  const [checked3, setChecked3] = useState(true);
  const handleChange3 = (
    nextChecked: boolean | ((prevState: boolean) => boolean)
  ) => {
    setChecked3(nextChecked);
  };
  return (
    <div className="border-[1px] border-grey">
      {/* Title */}
      <div className="h-[35px] bg-flow_blue flex items-center justify-between px-5">
        <p className="font-rota_black">White Label for agency</p>
        <ChevronRight />
      </div>
      <div className="container mx-auto px-8 mt-10 pb-7">
        <div className="bg-dark_yellow h-[30px] w-[33.91px] -m-4 absolute float-right ml-72"></div>
        {/* Add Things */}
        <div className="space-y-4">
          <div className="border-[1px] border-dashed border-dark_grey h-16 bg-gallery flex items-center justify-start pl-10 space-x-4">
            <Add />
            <p className="font-rota_bold text-[19px] mt-1">Upload Logo</p>
          </div>
          <div className="border-[1px] border-dashed border-dark_grey h-16 bg-gallery flex items-center justify-start pl-10 space-x-4">
            <Add />
            <p className="font-rota_bold text-[19px] mt-1">Add Plan</p>
          </div>
          <div className="border-[1px] border-dashed border-dark_grey h-16 bg-gallery flex items-center justify-start pl-10 space-x-4">
            <Add />
            <p className="font-rota_bold text-[19px] mt-1">Add User</p>
          </div>
        </div>
        {/* Pricing Users */}
        <div className="mt-10">
          <h3 className="font-rota_bold text-xl border-b-2 w-44 pb-1">
            Active Pricing Plans
          </h3>
          <div className="flex justify-between items-start mt-3">
            <p className="text-grey text-lg font-rota_bold">
              Gold Plan(100GB) <br />
              <span className="text-indigo"> -$59/onetime </span>
            </p>
            <Switch
              onChange={handleChange3}
              checked={checked3}
              onColor="#1A73B8"
              boxShadow="none"
              handleDiameter={10}
              activeBoxShadow="none"
              uncheckedIcon={false}
              checkedIcon={false}
            />
            <div className="flex items-center space-x-2">
              <button>
                <Pencilline />
              </button>
              <button>
                <Delete />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <Star />
        </div>
        {/* Active Users */}
        <div className="mt-10">
          <h3 className="font-rota_bold text-xl border-b-2 w-44 pb-1">
            Active Users
          </h3>
          <div className="flex space-x-3 mt-5 w-full">
            <input
              type="text"
              placeholder="Enter video ID to find owner"
              className="input h-[28px] border-0 bg-light_blue"
            />
            <button className="bg-light_indigo text-indigo h-[28px] w-24 font-rota_extrabold text-[15px] rounded">
              Search
            </button>
          </div>
          <div className="flex space-x-3 mt-5 w-full">
            <input
              type="text"
              placeholder="Search by username or email"
              className="input h-[28px] border-0 bg-light_blue"
            />
            <button className="bg-light_indigo text-indigo h-[28px] w-24 font-rota_extrabold text-[15px] rounded">
              Search
            </button>
          </div>
          <button className="bg-light_indigo text-indigo h-[29px] w-full mt-4 pt-1 font-rota_extrabold text-[15px] rounded">
            Download
          </button>
        </div>
        {/* User Email 1 */}
        <div className="mt-10 space-y-5">
          <div className="flex justify-between">
            <div>
              <p className="font-rota_extrabold text-sm">User Email</p>
              <p className="text-dark_grey font-rota_extrabold text-[15.07px]">
                Mark.Wilson@gmail.com
              </p>
            </div>
            <div>
              <p className="font-rota_extrabold text-sm">Storage</p>
              <p className="text-dark_grey font-rota_extrabold text-[15.07px]">
                80GB out of 100GB
              </p>
              <p className="font-rota_extrabold text-[15.07px] text-skyblue">
                15 videos
              </p>
            </div>
          </div>
          <div className="flex space-x-32">
            <div>
              <p className="font-rota_extrabold text-sm">Bandwidth </p>
              <p className="text-dark_grey font-rota_extrabold text-[15.07px]">
                70GB
              </p>
            </div>
            <div>
              <p className="font-rota_extrabold text-sm">Total Videos</p>
              <p className="text-dark_grey font-rota_extrabold text-[15.07px]">
                56
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-rota_extrabold text-sm">Plan</p>
              <button className="w-16 h-7 bg-light_blue space-x-3 flex items-center px-1 rounded">
                <p className="text-crusta font-rota_bold text-[15.4px]">Gold</p>
                <ChevronDown />
              </button>
            </div>
            <div>
              <p className="font-rota_extrabold text-sm">Plan</p>
              <button className="w-[88.2px] h-7 bg-light_blue space-x-3 flex items-center px-1 rounded">
                <p className="text-emrald font-rota_bold text-[15.4px]">
                  Active
                </p>
                <ChevronDown />
              </button>
            </div>
            <div>
              <p className="font-rota_extrabold text-sm">Actions</p>
              <div className="flex items-center space-x-2">
                <button>
                  <Pencilline />
                </button>
                <button>
                  <Delete />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* User Email 2 */}
        <div className="mt-12 space-y-5">
          <div className="flex justify-between">
            <div>
              <p className="font-rota_extrabold text-sm">User Email</p>
              <p className="text-dark_grey font-rota_extrabold text-[15.07px]">
                Mark.Wilson@gmail.com
              </p>
            </div>
            <div>
              <p className="font-rota_extrabold text-sm">Storage</p>
              <p className="text-dark_grey font-rota_extrabold text-[15.07px]">
                80GB out of 100GB
              </p>
              <p className="font-rota_extrabold text-[15.07px] text-skyblue">
                15 videos
              </p>
            </div>
          </div>
          <div className="flex space-x-32">
            <div>
              <p className="font-rota_extrabold text-sm">Bandwidth </p>
              <p className="text-dark_grey font-rota_extrabold text-[15.07px]">
                70GB
              </p>
            </div>
            <div>
              <p className="font-rota_extrabold text-sm">Total Videos</p>
              <p className="text-dark_grey font-rota_extrabold text-[15.07px]">
                56
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-rota_extrabold text-sm">Plan</p>
              <button className="w-16 h-7 bg-light_blue space-x-3 flex items-center px-1 rounded">
                <p className="text-crusta font-rota_bold text-[15.4px]">Gold</p>
                <ChevronDown />
              </button>
            </div>
            <div>
              <p className="font-rota_extrabold text-sm">Plan</p>
              <button className="w-[88.2px] h-7 bg-light_blue space-x-3 flex items-center px-1 rounded">
                <p className="text-emrald font-rota_bold text-[15.4px]">
                  Active
                </p>
                <ChevronDown />
              </button>
            </div>
            <div>
              <p className="font-rota_extrabold text-sm">Actions</p>
              <div className="flex items-center space-x-2">
                <button>
                  <Pencilline />
                </button>
                <button>
                  <Delete />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Star />
        </div>
        {/* Agency Customers */}
        <div className="flex flex-col items-center mt-10 space-y-4">
          <h3 className="font-rota_extrabold text-[16px]">
            Login UKL for ogency customers
          </h3>
          <div className="bg-light_blue h-[43px] w-full flex justify-center items-center text-dark_grey rounded font-rota_semibold text-[17px]">
            <a href="">https://CustomDomain.com/login</a>
          </div>
          <h3 className="font-rota_extrabold text-[16px]">
            Logout URL for agency customers
          </h3>
          <div className="bg-light_blue h-[43px] w-full flex justify-center items-center text-dark_grey rounded font-rota_semibold text-[17px]">
            <a href="">https://CustomDomain.com/login</a>
          </div>
        </div>
        <AddUser />
        <PricingPlan />
        <PaymentGateway />
      </div>
    </div>
  );
};

export default WhiteAgency;
