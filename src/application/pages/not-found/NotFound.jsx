import React from 'react';
import {
    NavLink
} from "react-router-dom";
import './NotFound.css';

class NotFound extends React.Component {
	render() {
		return (
			<div>
				<div className="not-found">
					<span className="error-text">404 - Oops!</span>
					<br />
					<span className="page-message">We can't seem to find the page you're looking for. It might have been removed, had its name changed, or is temporarily unavailable.</span>
					<br/> <br/>
					<NavLink className="prevPage" to ="/home"><button>Return to the home page</button></NavLink>
				</div>
			</div>
		)
	}
}

export default NotFound;