import React, {Component} from 'react';
import User from '../user/User';

class AllUsers extends Component {

	state = {users: [], chosenOne: null};

	onSelectUser = (id) => {
		let {users} = this.state;
		let find = users.find(value => value.id === id);
		this.setState({chosenOne: find});
	};

	render() {
		console.log('rend');
		let {users, chosenOne} = this.state;
		return (
			<div>
				{
					users.map(user => <User item={user} key={user.id} onSelectUser={this.onSelectUser}/>)
				}
				{
					chosenOne && <User item={chosenOne}/>
				}

			</div>
		);
	}

	componentDidMount() {
		console.log('componentDidMount');
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(value => value.json())
			.then(users => {
				this.setState({users});
			});
	}
}

export default AllUsers;
