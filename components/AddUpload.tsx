import React from "react";

const AddUpload = () => {
  return (
    <div className="container mx-auto font-rota_bold text-lg space-y-5 mt-5">
      <div className="flex justify-between">
        <p className="">+ Add Card / Annotation</p>
        <button>On off</button>
      </div>
      <div className="flex justify-between">
        <p className="">+ Add Caption</p>
        <button>On off</button>
      </div>
      <div className="flex justify-between">
        <p className="">+ Add a chapter /moment</p>
        <button>On off</button>
      </div>
      <div className="flex justify-between">
        <p className="">+ Add Call-to-Action</p>
        <button>On off</button>
      </div>
    </div>
  );
};

export default AddUpload;
