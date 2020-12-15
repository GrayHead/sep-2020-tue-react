import React, {Component} from 'react';


class App extends Component {
	inputMain = React.createRef();

	state = {inputValue: ''};

	oninputFill = () => {
		console.log(this.inputMain.current.value);
		this.setState({inputValue: this.inputMain.current.value});

	};
	onFormSubmit = (e) => {
		e.preventDefault();

	};

	render() {
		let {inputValue} = this.state;
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<input ref={this.inputMain} type={'number'} onInput={this.oninputFill} value={inputValue}/>
					<button>send</button>
				</form>

			</div>
		);
	}
}

export default App;
