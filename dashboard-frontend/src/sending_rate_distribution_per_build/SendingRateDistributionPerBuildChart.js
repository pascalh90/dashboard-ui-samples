import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class SendingRateDistributionPerBuildChart extends Component {
    constructor(props) {
        super(props);
        this.state = { _labels: [], _data: [] }
    }

    componentWillReceiveProps(nextProps) {
        let buildVer = encodeURIComponent(nextProps.data.buildVersion);
        fetch("http://localhost:8081/build/" + nextProps.data.buildName + "/" + buildVer + "/meanSendingRateKbps")
            .then(res => res.json())
            .then(data => {
                let l = [];
                let d = [];
                for (var i = 0; i < data.length; i++) {
                    l.push(data[i].id);
                    d.push(data[i].meanSendingRateKbps);
                }
                this.setState({ _data: d, _labels: l })
            }
            );
    }

    getData = () => {
        let data = {
            labels: this.state._labels,
            datasets: [
                {
                    label: 'SendingRateDistributionPerBuild',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: this.state._data
                }
            ]
        }
        return data;
    };

    render() {
        return (
            <div className="SendingRateDistributionPerBuildChart">
                <Line width={600}
                    height={300}
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
								  }
							 }],
							 xAxes: [{
								scaleLabel: {
								  display: true,
								  labelString: 'Conference ID'
								}
							  }]
							}
                    }}
                    data={this.getData()} />
            </div>
        );
    }
}

export default SendingRateDistributionPerBuildChart;