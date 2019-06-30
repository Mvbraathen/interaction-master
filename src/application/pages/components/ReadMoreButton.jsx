import React from 'react';
import './ReadMoreButton.css';

class ReadMoreButton extends React.Component {
	render() {
        return (
            <div>
            	<a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
				    <button className="read-more-button"> Read more </button>
				</a>
            </div>
        );
	}
}

export default ReadMoreButton;
