import React, { useState } from "react";
import Switch from "react-switch";

const AddUpload = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (
    nextChecked: boolean | ((prevState: boolean) => boolean)
  ) => {
    setChecked(nextChecked);
  };
  const [checked1, setChecked1] = useState(false);
  const handleChange1 = (
    nextChecked: boolean | ((prevState: boolean) => boolean)
  ) => {
    setChecked1(nextChecked);
  };
  const [checked2, setChecked2] = useState(false);
  const handleChange2 = (
    nextChecked: boolean | ((prevState: boolean) => boolean)
  ) => {
    setChecked2(nextChecked);
  };
  const [checked3, setChecked3] = useState(true);
  const handleChange3 = (
    nextChecked: boolean | ((prevState: boolean) => boolean)
  ) => {
    setChecked3(nextChecked);
  };
  return (
    <div className="container mx-auto font-rota_bold text-lg space-y-5 mt-5">
      <div className="flex justify-between">
        <p className="">+ Add Card / Annotation</p>
        <Switch
          onChange={handleChange3}
          checked={checked3}
          onColor="#1A72E7"
          boxShadow="none"
          handleDiameter={15}
          activeBoxShadow="none"
          uncheckedIcon={
            <h3 className="font-rota_bold text-[10.41px] text-white pl-2">
              OFF
            </h3>
          }
          checkedIcon={
            <h3 className="font-rota_bold text-[10.41px] text-white pl-3 focus:text-red-500">
              ON
            </h3>
          }
        />
      </div>
      <div className="flex justify-between">
        <p className="">+ Add Caption</p>
        <Switch
          onChange={handleChange2}
          checked={checked2}
          onColor="#1A72E7"
          boxShadow="none"
          handleDiameter={15}
          activeBoxShadow="none"
          uncheckedIcon={
            <h3 className="font-rota_bold text-[10.41px] text-white pl-2">
              OFF
            </h3>
          }
          checkedIcon={
            <h3 className="font-rota_bold text-[10.41px] text-white pl-3 focus:text-red-500">
              ON
            </h3>
          }
        />
      </div>
      <div className="flex justify-between">
        <p className="">+ Add a chapter /moment</p>
        <Switch
          onChange={handleChange1}
          checked={checked1}
          onColor="#1A72E7"
          boxShadow="none"
          handleDiameter={15}
          activeBoxShadow="none"
          uncheckedIcon={
            <h3 className="font-rota_bold text-[10.41px] text-white pl-2">
              OFF
            </h3>
          }
          checkedIcon={
            <h3 className="font-rota_bold text-[10.41px] text-white pl-3 focus:text-red-500">
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
          handleDiameter={15}
          uncheckedIcon={
            <h3 className="font-rota_bold text-[10.41px] text-white pl-2">
              OFF
            </h3>
          }
          checkedIcon={
            <h3 className="font-rota_bold text-[10.41px] text-white pl-3 focus:text-red-500">
              ON
            </h3>
          }
        />
      </div>
    </div>
  );
};

export default AddUpload;
