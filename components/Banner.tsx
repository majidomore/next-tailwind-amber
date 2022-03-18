import React from "react";
import UploadButton from "@/components/UploadButton";

type Props = {
  name?: string;
};

const Banner = ({ name }: Props) => {
  return (
    <div
      className="flex flex-col items-center md:mt-10 mt-0
  w-full"
    >
      {/* Upload Button */}
      <UploadButton />
      {/* Banner Boxes Starts */}
      <div className="mt-5 border-[2px] border-black rounded-lg w-full flex md:flex-row flex-col">
        {/* Banner Box 1 */}
        <div className="flex w-full">
          {/* Check Stats Starts */}
          <div className="bg-secondary h-[121px] w-11/12 polygon flex items-center pl-6 space-x-2 md:rounded-none rounded-bl-lg">
            {/* Stats Icon */}
            <svg
              width="28"
              height="26"
              viewBox="0 0 28 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="6" y="11" width="4" height="10" rx="2" fill="#787A86" />
              <rect x="13" y="9" width="4" height="12" rx="2" fill="#787A86" />
              <rect x="20" y="2" width="4" height="19" rx="2" fill="#787A86" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.5 0C0.671573 0 0 0.671572 0 1.5V24.5C0 25.3284 0.671573 26 1.5 26L26.5 26C27.3284 26 28 25.3284 28 24.5C28 23.6716 27.3284 23 26.5 23L3 23V1.5C3 0.671573 2.32843 0 1.5 0Z"
                fill="white"
              />
            </svg>
            <h3 className="text-white text-xl font-rota_extrabold">
              Chek stats
            </h3>
          </div>
          {/* Check Stats End */}
          {/* Gold Member Starts */}
          <div className="w-6/12 flex flex-col justify-center mt-1">
            <p className="text-dark_gray text-[14px] font-rota_semibold">
              Current plan
            </p>
            <p className="font-bold text-xl text-black font-rota_extrabold">
              Gold Member
            </p>
          </div>
          {/* Gold Member Ends */}
        </div>
        {/* Banner Box  2 */}
        <div className="flex w-full">
          {/* Gold Member Starts */}
          <div className="w-6/12 flex justify-end items-center p-4">
            <div className="flex flex-col">
              <p className="text-dark_gray text-[14px] font-rota_semibold">
                Payment Type
              </p>
              <p className="font-bold text-xl text-black font-rota_extrabold">
                Onetime
              </p>
              <span className="flex items-center">
                <p className="text-dark_gray font-rota_semibold text-sm">
                  Paypal
                </p>
                <span className="font-rota_bold text-blue underline text-[15px] ml-2">
                  change
                </span>
              </span>
            </div>
          </div>
          {/* Gold Member Ends */}
          {/* Redeem  Starts */}
          <div className="bg-secondary h-[121px] w-11/12 flex justify-center items-center space-x-3 pl-5 md:rounded-none rounded-tr-xl polygon2">
            {/* xxx Icon */}
            <svg
              width="42"
              height="36"
              viewBox="0 0 42 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="42" height="36" fill="white" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13 6H7.28571C5.47106 6 4 7.47106 4 9.28571V25.7143C4 27.5289 5.47107 29 7.28572 29H13V27.4667H7.28572C6.3179 27.4667 5.53333 26.6821 5.53333 25.7143V9.28571C5.53333 8.3179 6.3179 7.53333 7.28571 7.53333H13V6ZM29.4286 27.4667H34.6667C35.6345 27.4667 36.419 26.6821 36.419 25.7143V9.28571C36.419 8.3179 35.6345 7.53333 34.6667 7.53333H29.4286V6H34.6667C36.4813 6 37.9524 7.47106 37.9524 9.28571V25.7143C37.9524 27.5289 36.4813 29 34.6667 29H29.4286V27.4667Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 9H8.07418V9.54762H8.09524V10.061H8.07418V10.0952H7.54762V10.061H7V9ZM9.12729 9H10.1804V10.0952H9.12729V9ZM11.2335 9H12.2866V10.0952H11.2335V9ZM30.1896 9H31.2427V10.0952H30.1896V9ZM32.2958 9H33.3489V10.0952H32.2958V9ZM34.402 9H35.4762V10.061H34.9286V10.0952H34.402V10.061H34.381V9.54762H34.402V9ZM7 12.1146V11.0878H8.09524V12.1146H7ZM35.4762 11.0878V12.1146H34.381V11.0878H35.4762ZM7 14.1682V13.1414H8.09524V14.1682H7ZM35.4762 13.1414V14.1682H34.381V13.1414H35.4762ZM7 16.2217V15.1949H8.09524V16.2217H7ZM35.4762 15.1949V16.2217H34.381V15.1949H35.4762ZM7 18.2753V17.2485H8.09524V18.2753H7ZM35.4762 17.2485V18.2753H34.381V17.2485H35.4762ZM7 20.3289V19.3021H8.09524V20.3289H7ZM35.4762 19.3021V20.3289H34.381V19.3021H35.4762ZM7 22.3824V21.3557H8.09524V22.3824H7ZM35.4762 21.3557V22.3824H34.381V21.3557H35.4762ZM7 24.436V23.4092H8.09524V24.436H7ZM35.4762 23.4092V24.436H34.381V23.4092H35.4762ZM8.07418 26.5238H7V25.4628H7.54762V25.4286H8.07418V25.4628H8.09524V25.9762H8.07418V26.5238ZM10.1804 26.5238H9.12729V25.4286H10.1804V26.5238ZM12.2866 26.5238H11.2335V25.4286H12.2866V26.5238ZM31.2427 26.5238H30.1896V25.4286H31.2427V26.5238ZM33.3489 26.5238H32.2958V25.4286H33.3489V26.5238ZM34.402 26.5238V25.9762H34.381V25.4628H34.402V25.4286H34.9286V25.4628H35.4762V26.5238H34.402Z"
                fill="#686B72"
              />
              <path
                d="M16.2684 21L14.8918 19.0206L13.5396 21H12.0244L14.1342 18.1001L12.1303 15.2979H13.6292L14.9406 17.147L16.2277 15.2979H17.6532L15.6656 18.0512L17.7917 21H16.2684ZM22.6963 21L21.3197 19.0206L19.9675 21H18.4523L20.5621 18.1001L18.5582 15.2979H20.0571L21.3685 17.147L22.6556 15.2979H24.0811L22.0935 18.0512L24.2196 21H22.6963ZM29.1242 21L27.7475 19.0206L26.3953 21H24.8802L26.99 18.1001L24.9861 15.2979H26.4849L27.7964 17.147L29.0835 15.2979H30.509L28.5214 18.0512L30.6475 21H29.1242Z"
                fill="black"
              />
            </svg>
            <h3 className="font-rota_bold text-white text-xl mt-3">
              Redeem
              <br />
              Codes
            </h3>
          </div>
          {/* Redeem End */}
        </div>
      </div>
      {/* Banner Boxes Ends */}
      {/* Calendar */}
      <div className="flex md:justify-end justify-center w-full mt-6">
        <div className="flex items-center justify-center space-x-2 w-[104px] h-[29px] border-[1px] border-gray rounded">
          <p className="text-[12px] font-rota_black">March 2020</p>
          {/* Calendar Icon */}
          <svg
            className="mb-1"
            width="10"
            height="12"
            viewBox="0 0 10 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="2.21429"
              width="9"
              height="9.28571"
              rx="1.5"
              stroke="#1E1E1F"
            />
            <line y1="5.5" x2="9.16667" y2="5.5" stroke="#1E1E1F" />
            <line
              x1="2.31818"
              y1="0.5"
              x2="2.31818"
              y2="3.19231"
              stroke="#1E1E1F"
              strokeLinecap="round"
            />
            <line
              x1="7.77272"
              y1="0.5"
              x2="7.77272"
              y2="3.19231"
              stroke="#1E1E1F"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Banner;
