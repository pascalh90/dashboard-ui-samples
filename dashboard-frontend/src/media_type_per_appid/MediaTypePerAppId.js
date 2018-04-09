import React, { Component } from 'react';
import MediaTypePerAppIdForm from './MediaTypePerAppIdForm.js';
import MediaTypePerAppIdChart from './MediaTypePerAppIdChart.js';

class MediaTypePerAppId extends Component {
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
			<div style={{ height: 500 }} className="widget mediaTypePerAppId">
				<h3>MediaTypePerAppId</h3>
				<p>Distribution of media types with the appID: '{this.state.appID}'</p>
				<MediaTypePerAppIdForm onChange={this.refreshAppID} />
				<MediaTypePerAppIdChart data={this.state.appID} />
			</div>
		);
	}
}

export default MediaTypePerAppId;