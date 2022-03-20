import React, { useState } from "react";
import Switch from "react-switch";

type Props = {
  name?: string;
};

const SwitchButton = ({ name }: Props) => {
  const [checked, setChecked] = useState(true);
  const handleChange = (
    nextChecked: boolean | ((prevState: boolean) => boolean)
  ) => {
    setChecked(nextChecked);
  };
  return (
    <div>
      <Switch
        onChange={handleChange}
        checked={checked}
        onColor="#1A72E7"
        boxShadow="none"
        handleDiameter={15}
        activeBoxShadow="none"
        uncheckedIcon={
          <h3 className="font-rota_bold text-[10.41px] text-white pl-2">OFF</h3>
        }
        checkedIcon={
          <h3 className="font-rota_bold text-[10.41px] text-white pl-3 focus:text-red-500">
            ON
          </h3>
        }
      />
    </div>
  );
};

export default SwitchButton;
