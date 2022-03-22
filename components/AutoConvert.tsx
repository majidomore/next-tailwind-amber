import React, { useState } from "react";
import Switch from "react-switch";

type Props = {
  name?: string;
};

const AutoConvert = ({ name }: Props) => {
  const [checked, setChecked] = useState(true);
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
  const [checked3, setChecked3] = useState(false);
  const handleChange3 = (
    nextChecked: boolean | ((prevState: boolean) => boolean)
  ) => {
    setChecked3(nextChecked);
  };
  return (
    <div className="mt-10">
      <div className="space-y-6">
        <div className="flex items-center space-x-5">
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
          <p className="font-rota_medium">Auto-covert YouTube & Vimeo videos</p>
        </div>
        <div className="flex space-x-5">
          <Switch
            onChange={handleChange1}
            checked={checked1}
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
          <p className="font-rota_medium text_rgba">
            Impact & display closed caption from YouTube sources
          </p>
        </div>
        <div className="flex space-x-5">
          <Switch
            onChange={handleChange2}
            checked={checked2}
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
          <p className="font-rota_medium text_rgba">
            Auto-convert video files that are ending in MOV, MPG, AVI, FLV, F4V,
            MP4, M4V, ASF, WMV, VOB, MOD, 3GP, MKV, DIVX, XVID, WEBM
          </p>
        </div>
        <div className="flex space-x-5">
          <Switch
            onChange={handleChange3}
            checked={checked3}
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
          <p className="font-rota_medium text_rgba">
            Auto-convert audio files that are ending in MP3, WAV, AIF, AU, M4A
          </p>
        </div>
      </div>
      <hr className="bg-black h-[1px] w-full my-10" />
    </div>
  );
};

export default AutoConvert;
