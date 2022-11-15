import React from "react";
import { NavLink } from "react-router-dom";
import'./Common.css';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg fixed-top">
			<div className="container">
				<NavLink className="navbar-brand" hrefLang="https://www.alveosoftware.com/" to="/">
				<img src={process.env.PUBLIC_URL + "/AlveoBB2.PNG"} Width="120px"/>
				</NavLink>
				
				
				<button
					className="navbar-toggler collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#mobileMenu"
					aria-controls="mobileMenu"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="toggler-icon top-bar"></span>
					<span className="toggler-icon middle-bar"></span>
					<span className="toggler-icon bottom-bar"></span>
				</button>
				<div className="collapse navbar-collapse" id="mobileMenu">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="/books/create"
							>
								Create Book
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="books/list"
							>
								Book List
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="/books/issue"
							>
								Issue Book
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="/books/mylist"
							>
								MyList
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="/register"
							>
								Register
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="/login"
							>
								Login
							</NavLink>
						</li>
						
						{/* <li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="/cruds/grid-view"
							>
								Grid View
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="/cruds/list-view"
							>
								List View
							</NavLink>
						</li> */}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
