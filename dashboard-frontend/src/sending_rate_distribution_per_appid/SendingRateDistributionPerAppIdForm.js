import React, { Component } from 'react';

class SendingRateDistributionPerAppIdForm extends Component {
	constructor(props) {
		super(props);
		this.state = { appIdList: [], selectedAppId: '' };
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		fetch("http://localhost:8081/app")
			.then(res => res.json())
			.then(data => this.setState({ appIdList: data })
			);
	}

	handleChange(event) {
		this.setState({ selectedAppId: event.target.value });
		this.props.onChange(event.target.value);
		event.preventDefault();
	}

	render() {
		return (
			<div className="sendingRateDistributionPerAppIdForm">
				<form>
					<label>
						Select AppID
			         <select value={this.state.selectedAppId} onChange={this.handleChange}>
							{
								this.state.appIdList.map(appId => {
									return <option key={appId.appID} value={appId.appID}> {appId.appID} </option>
								})
							}
						</select>
					</label>
				</form>
			</div>
		);
	}

}

export default SendingRateDistributionPerAppIdForm;