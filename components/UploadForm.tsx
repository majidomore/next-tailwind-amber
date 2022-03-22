import Link from "next/link";
import React from "react";
import { Upload } from "./Icons";

type Props = {
  name?: string;
};

const UploadForm = ({ name }: Props) => {
  return (
    <div className="flex flex-col items-center mt-10 sm:mt-44 sm:w-[474px] w-full">
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
      <h1 className="mt-3 text-[17.36px] font-rota_bold">OR</h1>
      {/* Upload Videos Button */}
      <div className="mt-3 h-[51px] gradient_button">
        <input type="file" id="upload" className="hidden" />
        <Link href="/controls">
          <label
            htmlFor="upload"
            className="mt-1 cursor-pointer flex items-start justify-center space-x-2 w-full"
          >
            <Upload />
            <p>Upload Videos</p>
          </label>
        </Link>
      </div>
      {/* Description */}
      <p className="text-center text-sm mt-[14px] font-rota_bold sm:w-full w-8/12 text-dark_grey">
        Enter one URL per line. You can also add YouTube and Vimeo URLS
      </p>
    </div>
  );
};

export default UploadForm;
