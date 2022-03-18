import Link from "next/link";
import React from "react";

type Props = {
  name?: string;
};

const UploadForm = ({ name }: Props) => {
  return (
    <div className="flex flex-col items-center mt-10 sm:mt-72 sm:w-[474px] w-full">
      {/* Url and Fetch Button */}
      <div className="flex sm:flex-row flex-col items-center justify-between w-full">
        <input
          type="url"
          className="bg-aqua_haze h-[52px] w-full sm:w-[296px] rounded-[17px] border-0 p-8 placeholder:text-dark_grey placeholder:text-[18.42px] font-rota_bold"
          placeholder="Enter source videos URLs"
        />
        {/* Fetch Video Button */}
        <div className="sm:mt-0 mt-8 gradient_button w-[153px] h-[51px]">
          <input type="file" id="upload" className="hidden" />
          <label htmlFor="upload" className="mt-1 cursor-pointer">
            Fetch Videos
          </label>
        </div>
      </div>
      <h1 className="mt-8 text-[17.36px] font-rota_bold">OR</h1>
      {/* Upload Videos Button */}
      <div className="mt-8 h-[51px] gradient_button">
        <input type="file" id="upload" className="hidden" />
        <Link href="/controls">
          <label
            htmlFor="upload"
            className="mt-1 cursor-pointer flex items-start justify-center space-x-2 w-full"
          >
            <svg
              className="mt-1"
              width="17"
              height="18"
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.74432 6.50822H3.98784C2.33784 6.50822 1 7.84606 1 9.49606L1 13.4488C1 15.098 2.33784 16.4358 3.98784 16.4358H13.0122C14.6622 16.4358 16 15.098 16 13.4488V9.48795C16 7.84282 14.6662 6.50822 13.0211 6.50822H12.2565"
                stroke="#1E1E1F"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.5 1.00003L8.5 10.763"
                stroke="#1E1E1F"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.13647 3.37433L8.49999 1.00027L10.8643 3.37433"
                stroke="#1E1E1F"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p>Upload Videos</p>
          </label>
        </Link>
      </div>
      {/* Description */}
      <p className="text-center text-sm mt-5 font-rota_bold sm:w-full w-8/12">
        Enter one URL per line. You can also add YouTube and Vimeo URLS
      </p>
    </div>
  );
};

export default UploadForm;
