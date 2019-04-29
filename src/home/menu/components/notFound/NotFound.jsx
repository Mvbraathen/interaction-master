import React from 'react';
import './NotFound.css';

class NotFound extends React.Component {
	render() {
		return (
			<div className = "not-found">
				<span className = "error-text">ERROR 404</span>
				<br />
				<span className = "page-message">We are sorry but the page you are looking for does not exist.</span>
			</div>
		)
	}
}

export default NotFound;