import React from "react";
import PlayButton from "./PlayButton";

const Mix = ({ name, playMix, currentMix }) => (
  <div
    className="aspect-ratio aspect-ratio--3x4 pointer bg-black"
    onClick={() =>
      playMix("/Gold_Flake_Paint/sunday-slowdown-episode-fifteen/")
    }
  >
    <div className="ph3 pv4 aspect-ratio--object mix-overlay">
      <div className="flex items-center relative z-2">
        <h1 className="f4 f3-l mv0 white ttu biryani pr2 lh-title">{name}</h1>
        <PlayButton />
        {/* PlayButton goes here */}
      </div>
    </div>
  </div>
);

export default Mix;
