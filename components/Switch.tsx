import React from "react";

type Props = {
  name?: string;
};

const Switch = ({ name }: Props) => {
  //   const [checked, setChecked] = useState(false);
  //   const handleChange = (
  //     nextChecked: boolean | ((prevState: boolean) => boolean)
  //   ) => {
  //     setChecked(nextChecked);
  //   };
  return (
    <div>
      {/* <Switch
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
        /> */}
    </div>
  );
};

export default Switch;
