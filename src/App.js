import React, {Component} from 'react';
import {users} from './database/usersDB';
import UserComponent from './components/user/UserComponent';


class App extends Component {


	render() {
		return (
			<div>
				{
					users.map((user, index) => {
						let clsX = index % 2 ? 'even' : 'odd';

						return (
							<UserComponent
								item={user}
								cls={clsX}
								key={index}/>);
					})
				}
			</div>
		);
	}
}

export default App;
