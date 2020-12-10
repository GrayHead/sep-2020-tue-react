import React, {Component} from 'react';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	withRouter
} from 'react-router-dom';

class User extends Component {
	render() {
		const {item, match: {url}} = this.props;

		return (
			<div>
				{item.id} - {item.name} - <Link to={url + '/' + item.id}>info page</Link>
			</div>
		);
	}
}

export default withRouter(User);
