import React, {Component} from 'react';
import UserService from '../../service/userService';
import User from '../user/User';
import './AllUsers.css';

import {Route, Switch, withRouter} from 'react-router-dom';
import FullUser from '../full-user/FullUser';

class AllUsers extends Component {
	userService = new UserService();

	state = {users: []};

	async componentDidMount() {
		let users = await this.userService.users();
		this.setState({users});


	}

	render() {
		let {users} = this.state;
		let {match: {url}} = this.props;

		console.log(url);

		return (
			<div>
				{
					users.map(value => <User item={value} key={value.id}/>)
				}


				<hr/>
				<div className={'all-users-router'}>
					<Switch>
						<Route path={`${url}/:xxx`} exact={true} render={(props) => {

							return <FullUser {...props}/>;
						}}/>

					</Switch>

				</div>
				<hr/>
			</div>
		);
	}
}

export default withRouter(AllUsers);
