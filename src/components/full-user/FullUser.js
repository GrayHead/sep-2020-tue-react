import React, {Component} from 'react';

import {withRouter} from 'react-router-dom';

class FullUser extends Component {
	render() {
		console.log(this.props);
		return (
			<div>
				full user
			</div>
		);
	}
}

export default withRouter(FullUser);
