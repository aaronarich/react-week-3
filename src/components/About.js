import React from "react";

const Stat = props => (
  <div
    className="w-third tc pa3 ba bw2 b--light-gray"
    style={{ marginRight: -2 }}
  >
    <div className="f6 ttu biryani">Featuring...</div>
    <div className="f5 b ttu biryani-black tracked">11 Mixes</div>
  </div>
);

const About = props => (
  <div className="ph3 ph4-l">
    <div className="measure center lh-copy biryani f4">
      <p className="mt0">
        Marmalade.fm features the latest and greatest in grooves, beats and
        world music.
      </p>

      <p>
        Whether you’re into hip hop, trip hop, classic jazz, fusion jazz, afro
        beat or break beat… we have you covered!
      </p>
    </div>

    <div className="flex pt3">
      <Stat />
      <Stat />
      <Stat />
    </div>
  </div>
);

export default About;
