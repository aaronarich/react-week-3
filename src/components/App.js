/*global Mixcloud*/
import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import FeaturedMix from "./FeaturedMix";
import Header from "./Header";
import Home from "./Home";

const Archive = () => <h1>Archive</h1>;
const About = () => <h1>About</h1>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      currentMix: "",
      mix: null
    };
  }

  fetchMixes = async () => {
    try {
      const response = await fetch(
        "https://api.mixcloud.com/Gold_Flake_Paint/sunday-slowdown-episode-seventeen/"
      );
      const data = await response.json();
      this.setState({
        mix: data
      });
      console.log(data);
    } catch (error) {}
  };

  mountAudio = async () => {
    this.widget = Mixcloud.PlayerWidget(this.player);
    await this.widget.ready;

    this.widget.events.pause.on(() =>
      this.setState({
        playing: false
      })
    );

    this.widget.events.play.on(() =>
      this.setState({
        playing: true
      })
    );
  };

  componentDidMount() {
    this.mountAudio();
    this.fetchMixes();
  }

  actions = {
    togglePlay: () => {
      this.widget.togglePlay();
    },
    playMix: mixName => {
      const { currentMix } = this.state;
      if (mixName === currentMix) {
        return this.widget.togglePlay();
      }

      this.setState({
        currentMix: mixName
      });
      this.widget.load(mixName, true);
    }
  };

  render() {
    return (
      <Router>
        <div>
          <div className="flex-l justify-end">
            <FeaturedMix />
            <div className="w-50-l relative z-1">
              <Header />

              {/* Routed page */}
              <Route
                exact
                path="/"
                component={() => <Home {...this.state} {...this.actions} />}
              />
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
