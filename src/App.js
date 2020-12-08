import React, {Component} from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';
import AllUsers from './components/all-users/AllUsers';
import AllPosts from './components/all-posts/AllPosts';
import AllComments from './components/all-comments/AllComments';


class App extends Component {


	render() {
		return (
			<Router>
				<div>
					<div>
						<Link to={'/users'}>users</Link>
					</div>
					<div>
						<Link to={'/posts'}>posts</Link>
					</div>
					<div>
						<Link to={'/comments'}>comments</Link>
					</div>

					<div className={'app-route'}>

						<Switch>
							<Route path={'/users'} render={(props) => {
								console.log(props);
								return <AllUsers/>;
							}}/>

							<Route path={'/posts'}>
								<AllPosts/>
							</Route>
							<Route path={'/comments'}>
								<AllComments/>
							</Route>
						</Switch>

					</div>
				</div>
			</Router>
		);
	}
}

export default App;
