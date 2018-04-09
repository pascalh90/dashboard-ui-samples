import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

class MediaTypePerAppIdChart extends Component {
	constructor(props) {
		super(props);
		this.state = { _labels: [], _data: [] }
	}

	componentWillReceiveProps(nextProps) {
		fetch("http://localhost:8081/app/" + nextProps.data + "/mediaTypeDistribution")
			.then(res => res.json())
			.then(data => {
				let l = [];
				let d = [];
				for (var i = 0; i < data.length; i++) {
					l.push(data[i].mediaType);
					d.push(data[i].mediaTypeCount);
				}
				this.setState({ _data: d, _labels: l })
			});


	}

	getData = () => {
		let data = {
			labels: this.state._labels,
			datasets: [{
				data: this.state._data,
				backgroundColor: [
					'#FF6384',
					'#36A2EB',
					'#FFCE56'
				],
				hoverBackgroundColor: [
					'#FF6384',
					'#36A2EB',
					'#FFCE56'
				]
			}]
		};

		return data;
	};

	render() {
		return (
			<div className="mediaTypePerAppIdChart">
				<Pie options={{
					maintainAspectRatio: false
				}} height={300} data={this.getData} />
			</div>
		);
	}

}

export default MediaTypePerAppIdChart;