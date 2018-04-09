import React, { Component } from 'react';
import SendingRateDistributionPerAppId from './sending_rate_distribution_per_appid/SendingRateDistributionPerAppId.js';
import SendingRateDistributionPerBuild from './sending_rate_distribution_per_build/SendingRateDistributionPerBuild.js';
import MediaTypePerAppId from './media_type_per_appid/MediaTypePerAppId.js';
import AverageSendingRate from './average_sending_rate/AverageSendingRate.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to WebRTC metrics dashboard</h1>
        </header>
        <SendingRateDistributionPerAppId/>
        <AverageSendingRate/>
        <SendingRateDistributionPerBuild/>
        <MediaTypePerAppId/>
      </div>
    );
  }
}

export default App;
