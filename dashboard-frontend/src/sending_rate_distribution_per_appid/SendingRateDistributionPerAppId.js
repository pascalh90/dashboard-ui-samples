import React, { Component } from 'react';
import SendingRateDistributionPerAppIdForm from './SendingRateDistributionPerAppIdForm.js';
import SendingRateDistributionPerAppIdChart from './SendingRateDistributionPerAppIdChart.js';

class SendingRateDistributionPerAppId extends Component {
	constructor(props) {
		super(props);
		this.state = {
			appID: ''
		};
	}

	refreshAppID = (newAppID) => {
		this.setState({
			appID: newAppID
		});
	};

	render() {
		return (
			<div style={{ height: 300 }} className="widget sendingRateDistributionPerAppId">
				<h3>SendingRateDistributionPerAppId</h3>
				<p>Distribution of sending rate (in Kbps) within the appID: '{this.state.appID}' </p>
				<SendingRateDistributionPerAppIdForm onChange={this.refreshAppID} />
				<SendingRateDistributionPerAppIdChart data={this.state.appID} />
			</div>
		);
	}
}

export default SendingRateDistributionPerAppId;