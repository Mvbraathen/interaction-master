import React from 'react';
import {
    NavLink
} from "react-router-dom";
import './NotFound.css';

class NotFound extends React.Component {
	render() {
		return (
			<div className="lok">
				<div className="not-found">
					<span className="error-text" role="img" aria-label="grimacing face">404 - Oops! 😬</span>
					<br />
					<div className="page-message">
						We can't seem to find the page you're looking for. 
						It might have been removed, had its name changed, 
						or is temporarily unavailable.
					</div>
					<br/> <br/>
					<NavLink to="/home">
	                    <button className="not-found-button"> Return to home page </button>
	                </NavLink>
				</div>
			</div>
		)
	}
}

export default NotFound;