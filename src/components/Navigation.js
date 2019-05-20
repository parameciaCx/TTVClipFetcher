import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './App.css';

const Navigation = () => {
	return (
		<Navbar expand="lg" className="navigator" data-test="navBar">
			<Nav>
				<Nav.Link href="/">
					<li>Home</li>
				</Nav.Link>
				<Nav.Link href="/about">
					<li>About</li>
				</Nav.Link>
				<Nav.Link href="/projects">
					<li>Projects</li>
				</Nav.Link>
				<Nav.Link href="/resume">
					<li>Resume</li>
				</Nav.Link>
			</Nav>
		</Navbar>
	);
};

export default Navigation;
