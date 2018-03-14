import React from "react";
import Counter from "./Counter";

const Stat = ({ statName, statNumber, statWord }) => (
  <div className="mb4">
    <div className="f5 black mb0 b">{statName}</div>
    <Counter end={statNumber} />
    <div className="f4 lh-1">{statWord}</div>
  </div>
);

const About = ({ mixes }) => (
  <div className="measure center">
    <div className="lh-copy">
      <p className="mb4">
        Marmalade.fm features the latest and greatest in grooves, beats and
        world music.
      </p>

      <p className="mb4">
        Whether you’re into hip hop, trip hop, classic jazz, fusion jazz, afro
        beat or break beat… we have you covered!
      </p>
    </div>

    <div>
      <Stat
        statName="Featuring..."
        statNumber={mixes.length}
        statWord="mixes"
      />
      <Stat
        statName="Played..."
        statNumber={mixes.reduce(
          (accumulator, current) => accumulator + current.play_count,
          0
        )}
        statWord="times"
      />
      <Stat
        statName="Contains..."
        statNumber={mixes.reduce(
          (accumulator, current) => accumulator + current.audio_length,
          0
        )}
        statWord="seconds"
      />
    </div>
  </div>
);

export default About;
