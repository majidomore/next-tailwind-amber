import React from "react";

type Props = {
  name?: string;
};

const UploadForm = ({ name }: Props) => {
  return (
    <div className="flex flex-col mt-5">
      <input
        type="url"
        className="bg w-96 h-10 placeholder:text-grey"
        placeholder="Enter source videos URLs"
      />
    </div>
  );
};

export default UploadForm;
