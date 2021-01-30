import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
	return (
		<nav className="navbar navbar-expand-lg justify-content-between">
				<NavLink className="navbar-brand" to="/">Quotes Central</NavLink>
				<ul className="nav">
					<li className="nav-item">
						<NavLink to="/" className="nav-link active" aria-current="page" href="#">Quotes</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/add-quote" className="nav-link" href="#">Submit new quote</NavLink>
					</li>
				</ul>
		</nav>
	);
};

export default Header;