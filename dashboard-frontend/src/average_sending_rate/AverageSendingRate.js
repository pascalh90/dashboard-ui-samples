import React, { Component } from 'react';
import AverageSendingRateChart from './AverageSendingRateChart.js';

class AverageSendingRate extends Component {
	constructor(props) {
		super(props);
		this.state = { sendingRates: [] };
	}

	componentDidMount() {
		fetch("http://localhost:8081/all/averageRateSendingRate")
			.then(res => res.json())
			.then(data => this.setState({ averageSendingRates: data })
			);
	}


	render() {
		return (
			<div style={{ height: 550 }} className="widget averageSendingRate">
				<h3>AverageSendingRate</h3>
				<p>Distribution of average application sending rate across all appIDs (in Kbps)</p>
				<AverageSendingRateChart data={this.state.averageSendingRates} />
			</div>
		);
	}
}



export default AverageSendingRate;