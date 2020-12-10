import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';
import Users from './components/users/Users';


class App extends Component {


	render() {
		return (
			<Router>
				<div>
					<ul>
						<li>
							<Link to={'/users'}>
								to users page
							</Link>
						</li>
					</ul>

					<div>

						<Switch>
							<Route path={'/users'} render={(props) => {

								return <Users/>;
							}}>

							</Route>

						</Switch>
					</div>

				</div>
			</Router>
		);
	}
}

export default App;

