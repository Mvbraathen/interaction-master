import React from 'react';
import './ScrollUp.css';

class ScrollUp extends React.Component {

    handleScrollTop() {
        window.scrollTo(0, 0);
    }

    /* Making scroll up accessible to keyboard users */
    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            this.handleScrollTop()
        }
    }

	render() {
        return (
            <div
                role="button"
                title="Jump to top of page"
                onClick={this.handleScrollTop}
                onKeyPress={this.handleKeyPress}
                tabIndex="0" 
                className="return-to-top-button"> 
                <span role="img" aria-label="finger pointing upwards"> ☝️ </span> 
            </div>
        )
    }
}
export default ScrollUp;
