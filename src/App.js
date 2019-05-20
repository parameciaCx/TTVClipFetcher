import React, { Component } from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import './styles.css';

class App extends Component {
	constructor() {
		super();

		this.state = {};
	}

	render() {
		return (
			<div>
				<Navigation />
				<Router>
					<Route path="/" component={Home} />
					<Route path="/projects" component={Projects} />
					<Route path="/about" component={About} />
					<Route path="/resume" component={Resume} />
				</Router>
			</div>
		);
	}
}

export default App;
