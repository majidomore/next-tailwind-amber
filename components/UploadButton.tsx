import React from "react";

type Props = {
  name?: string;
};

const UploadButton = ({ name }: Props) => {
  return (
    <>
      <button className="upload-button">+ UploadVideo</button>
    </>
  );
};

export default UploadButton;