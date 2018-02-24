/*global Mixcloud*/
import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import FeaturedMix from "./FeaturedMix";
import Header from "./Header";

const Home = () => <h1>Home</h1>;
const Archive = () => <h1>Archive</h1>;
const About = () => <h1>About</h1>;

class App extends Component {
  mountAudio = async () => {
    this.widget = Mixcloud.PlayerWidget(this.player);
    await this.widget.ready;
  };

  componentDidMount() {
    this.mountAudio();
  }

  togglePlay = () => {
    this.widget.togglePlay();
  };

  playMix = mixName => {
    this.widget.load(mixName, true);
  };

  render() {
    return (
      <Router>
        <div>
          <div className="flex-l justify-end">
            <FeaturedMix />
            <div className="w-50-l relative z-1">
              <Header />

              <div>
                <button onClick={this.togglePlay}>Play / Pause</button>
              </div>

              <div>
                <button
                  onClick={() =>
                    this.playMix(
                      "/Gold_Flake_Paint/sunday-slowdown-episode-eighteen/"
                    )
                  }
                >
                  Play Mix
                </button>
              </div>

              {/* Routed page */}
              <Route exact path="/" component={Home} />
              <Route path="/archive" component={Archive} />
              <Route path="/about" component={About} />
            </div>
          </div>
          <iframe
            title="Mixcloud Player"
            width="100%"
            height="60"
            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FGold_Flake_Paint%2Fgfp-mix-january-2018%2F"
            frameBorder="0"
            className="z-5 db fixed bottom-0"
            ref={player => (this.player = player)}
          />
        </div>
      </Router>
    );
  }
}

export default App;
