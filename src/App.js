import React, { Component } from 'react';
import './styles.css';
import GetClips from './components/GetClips';

class App extends Component {
	constructor() {
		super();

		this.state = {};
	}

	render() {
		return <GetClips />;
	}
}

export default App;
