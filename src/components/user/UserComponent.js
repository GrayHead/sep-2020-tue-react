import React, {Component} from 'react';
import './User.css';

class UserComponent extends Component {
	render() {
		// let item = this.props.item;
		// console.log(item);

		let {item, cls} = this.props;
		return (
			<div className={cls}>{item.name} -{item.age} - {item.status.toString()}</div>
			// <div>hello</div>
		);
	}
}

export default UserComponent;
