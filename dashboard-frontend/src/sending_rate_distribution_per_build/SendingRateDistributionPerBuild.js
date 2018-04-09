import React, { Component } from 'react';
import SendingRateDistributionPerBuildForm from './SendingRateDistributionPerBuildForm.js';
import SendingRateDistributionPerBuildChart from './SendingRateDistributionPerBuildChart.js';

class SendingRateDistributionPerBuild extends Component {
	constructor(props) {
		super(props);
		this.state = {
			buildName: '',
			buildVersion: ''
		};
	}

	refreshData = (response) => {
		this.setState({
			buildName: response.buildName,
			buildVersion: response.buildVersion
		});
	};

	render() {
		return (
			<div style={{ height: 400 }} className="widget sendingRateDistributionPerBuild">
				<h3>SendingRateDistributionPerBuild</h3>
				<p>Distribution of average sending rate (in Kbps) for the combination of buildName: '{this.state.buildName}' and buildVersion: '{this.state.buildVersion}' </p>
				<p>example : BuildName=Chrome, BuildVersion=58.0.3029.110 safari/537.36 </p>
				<SendingRateDistributionPerBuildForm onSubmit={this.refreshData} />
				<SendingRateDistributionPerBuildChart data={this.state} />
			</div>
		);
	}
}

export default SendingRateDistributionPerBuild;