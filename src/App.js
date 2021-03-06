import React, { Component } from 'react';
import Pay from "./pay";
import Wheel from "./wheel";
import Pig from "./pig.js";

import './App.css';

class App extends Component {
  constructor() {
      super();
      this.state = {
          roll : window.location.href.includes("#!roll"),
          spinDone: false,
          orgName: ""
      }
  }

  onSpinEnd = (orgName) => {
    this.setState({spinDone: true, orgName: orgName});
  };

  render() {
    return (
      <div className="App">
          <div className="headline">
              <span className="take">Take</span>
              <span className="my">My</span>
              <span className="money">Money</span>
          </div>
          <div className="sub-headline">
              Your dollar can save the world
          </div>
          <div className="why-donate">
              What can you buy for $1? A slice of pizza 🍕, a song 🎶, An app 📱, a cup of coffee ☕️, a can of soup.
              Or you can donate that dollar to make a change in the world 🌎.
          </div>
          <div className="why-donate">
              Take My Money is a platform for anyone with a big 💖 to donate just $1 to one of thousands of interesting, international non-profit organizations. Let our Wheel of Giving™ decide where to send that dolla bill 💸.
          </div>
          <input className="email-input" type="text" name="email" placeholder="Type your email"/>
          <Pay/>
          { this.state.roll && <div className="roll">
              <Pig/>
              <div className="wheel-container">
                  <div className="message">Now click the wheel to spin it and see where your dollar will land! We'll let fate decide</div>
                  <div className="tri-wrap">
                      <div className="wheel-triangle"/>
                  </div>
                  <Wheel onSpinEnd={this.onSpinEnd}/>
                  {this.state.spinDone && <div className="done-message">
                      <div className="done-header">Woo Hoo!</div>
                      <div className="done-text">You've just donated $1 to {this.state.orgName}</div>
                      <div className="done-text">Share my wheel on Facebook</div>
                  </div>}
              </div>
          </div>
          }
      </div>
    );
  }
}

export default App;
