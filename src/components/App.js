import React, { Component } from "react";
import FeaturedMix from "./FeaturedMix";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <FeaturedMix />
          <div>
            <Header />
            {/* Routed page */}
          </div>
        </div>
        <iframe
          width="100%"
          height="60"
          src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FGold_Flake_Paint%2Fsunday-slowdown-episode-eighteen%2F"
          frameBorder="0"
        />
      </div>
    );
  }
}

export default App;
