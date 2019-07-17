import React from 'react';
import './ScrollUp.css';

class ScrollUp extends React.Component {

    handleScrollTop() {
        window.scrollTo(0, 0);
    }

	render() {
        return (
            <div
                title="Jump to top of page"
                onClick={this.handleScrollTop}
                tabIndex="0" 
                className="return-to-top-button"> 
                <span role="img" aria-label="finger pointing upwards"> ☝️ </span> 
            </div>
        )
    }
}
export default ScrollUp;
