import React, { Component } from 'react';

class SendingRateDistributionPerBuildForm extends Component {
	constructor(props) {
		super(props);
		this.state = { buildName: '', buildVersion: '' };
		this.handleChangeBuildName = this.handleChangeBuildName.bind(this);
		this.handleChangeBuildVersion = this.handleChangeBuildVersion.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeBuildName(event) {
		this.setState({ buildName: event.target.value.trim() });
	}
	handleChangeBuildVersion(event) {
		this.setState({ buildVersion: event.target.value.trim() });
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.onSubmit(this.state);

	}

	render() {
		return (
			<div className="SendingRateDistributionPerBuildForm">
				<form onSubmit={this.handleSubmit}>
					<label>
						BuildName:
	          <input type="text" name="buildName" value={this.state.buildName} onChange={this.handleChangeBuildName} />
					</label>
					<label>
						BuildVersion:
	          <input type="text" name="buildVersion" value={this.state.buildVersion} onChange={this.handleChangeBuildVersion} />
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default SendingRateDistributionPerBuildForm;