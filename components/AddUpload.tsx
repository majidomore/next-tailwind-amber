import React, { useState } from "react";
import Switch from "react-switch";

const AddUpload = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (
    nextChecked: boolean | ((prevState: boolean) => boolean)
  ) => {
    setChecked(nextChecked);
  };
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
        <Switch
          onChange={handleChange}
          checked={checked}
          onColor="#1A72E7"
          boxShadow="none"
          handleDiameter={10}
          activeBoxShadow="none"
          uncheckedIcon={
            <h3 className="font-rota_bold text-[10.41px] text-white pl-1">
              OFF
            </h3>
          }
          checkedIcon={
            <h3 className="font-rota_bold text-[10.41px] text-white pl-2 focus:text-red-500">
              ON
            </h3>
          }
        />
      </div>
      <div className="flex justify-between">
        <p className="">+ Add Call-to-Action</p>
        <Switch
          onChange={handleChange}
          checked={checked}
          onColor="#1A72E7"
          boxShadow="none"
          activeBoxShadow="none"
          uncheckedIcon={
            <h3 className="font-rota_bold text-[10.41px] text-white pl-1">
              OFF
            </h3>
          }
          checkedIcon={
            <h3 className="font-rota_bold text-[10.41px] text-white pl-2 focus:text-red-500">
              ON
            </h3>
          }
        />
      </div>
    </div>
  );
};

export default AddUpload;
