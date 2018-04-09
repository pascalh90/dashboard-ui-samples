import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';


class AverageSendingRateChart extends Component {
	constructor(props) {
		super(props);
		this.state = { _labels: [], _data: [] }
	}

	getData = () => {
		let data = {
			labels: this.state._labels,
			datasets: [
				{
					label: 'AverageSendingRate in Kbps',
					backgroundColor: 'rgba(255,99,132,0.2)',
					borderColor: 'rgba(255,99,132,1)',
					borderWidth: 1,
					hoverBackgroundColor: 'rgba(255,99,132,0.4)',
					hoverBorderColor: 'rgba(255,99,132,1)',
					data: this.state._data
				}
			]
		}
		return data;
	};

	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
		let l = [];
		let d = [];
		for (var i = 0; i < nextProps.data.length; i++) {
			l.push(nextProps.data[i].appID);
			d.push(nextProps.data[i].averageRate);
		}

		this.setState({ _data: d, _labels: l })
	}

	render() {
		return (
			<div className="averageSendingRateChart">
				<Bar
					data={this.getData()}
					width={100}
					height={450}
					options={{
						legend: {
							display: false
						  },
						maintainAspectRatio: false,
						scales: {
							yAxes: [{
								scaleLabel: {
									display: true,
									labelString: 'average Kbps'
								  },
							  ticks: {
								 max: 1000,
								 min: 0,
								 stepSize: 50
							   }
							 }],
							 xAxes: [{
								scaleLabel: {
								  display: true,
								  labelString: 'AppID'
								}
							  }]
							}
					}}
				/>
			</div>
		);
	}
}

export default AverageSendingRateChart;