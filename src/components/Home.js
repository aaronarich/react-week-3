import React from "react";
import Mix from "./Mix";

const Home = props => (
  <div className="flex flex-wrap justify-between mixes ph3 ph4-l">
    <div className="mix mb4">
      <Mix
        name="Sunday Slowdown 15"
        id="/Gold_Flake_Paint/sunday-slowdown-episode-fifteen/"
        {...props}
      />
    </div>

    <div className="mix mb4">
      <Mix
        name="Sunday Slowdown 16"
        id="/Gold_Flake_Paint/sunday-slowdown-episode-sixteen/"
        {...props}
      />
    </div>

    <div className="mix mb4">
      <Mix
        name="Sunday Slowdown 17"
        id="/Gold_Flake_Paint/sunday-slowdown-episode-seventeen/"
        {...props}
      />
    </div>
  </div>
);

export default Home;
