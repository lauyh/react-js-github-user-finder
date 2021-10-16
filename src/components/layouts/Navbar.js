import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

// class based react component 

// export default class Navbar extends React.Component {
// 	static defaultProps = {
// 		title: "GitHub Finder",
// 		icon: "fab fa-github",
// 	};

// 	static propTypes = {
// 		title: PropTypes.string.isRequired,
// 		icon: PropTypes.string.isRequired
// 	}
// 	render() {
// 		return (
// 			<nav className="navbar bg-primary">
// 				<h1><i className={this.props.icon}/> {this.props.title}</h1>
// 			</nav>
// 		)
// 	}
// }


// ----------------------------------------------- 
// react functional base component

// destructuring
const Navbar = ({icon, title}) => {

	return (
		<nav className="navbar bg-dark">
			<h1><i className={icon}></i>  {title} </h1>
			<ul>
				<li>
					<Link to='/'>Home</Link> 
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
			</ul>
		</nav>
	)
}

Navbar.defaultProps = {
	title: "GitHub Finder",
	icon: "fab fa-github",
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired
}

export default Navbar;