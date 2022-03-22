import React, { useState } from "react";
import AutoConvert from "~/components/AutoConvert";
import BarColor from "~/components/BarColor";
import { ChevronRight, Delete, Down, Upload } from "~/components/Icons";
import PlayerSettings from "~/components/PlayerSettings";
import PlayerTheme from "~/components/PlayerTheme";
import UniversalHeader from "~/components/UniversalHeader";
import VideoPlayer from "~/components/VideoPalyer";
import VideoScript from "~/components/VideoScript";

type Props = {
  name?: string;
};

const UniversalPlayer = ({ name }: Props) => {
  return (
    <div className="container mx-auto">
      <UniversalHeader />
      <PlayerTheme />
      <PlayerSettings />
      <AutoConvert />
      <VideoPlayer />
      <VideoScript />
    </div>
  );
};

export default UniversalPlayer;
