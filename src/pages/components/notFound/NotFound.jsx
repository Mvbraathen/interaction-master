import React from 'react';
import './NotFound.css';

class NotFound extends React.Component {
	render() {
		return (
			<div className="not-found">
				<span className="error-text">Oops!</span>
				<br />
				<span className="page-message">We can't seem to find the page you're looking for. It might have been removed, had its name changed, or is temporarily unavailable.</span>
			</div>
		)
	}
}

export default NotFound;