import React from 'react';
import './ScrollUpMobile.css';

class ScrollUpMobile extends React.Component {

    /* Sets scroll position on both x and y axis */
    handleScrollTop() {
        window.scrollTo(0, 0);
    }

    /* Making scroll function accessible to keyboard users */
    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            this.handleScrollTop()
        }
    }

	render() {
        return (
            <div>
                <div
                    role="button"
                    title="Jump to top of page"
                    onClick={this.handleScrollTop}
                    onKeyPress={this.handleKeyPress}
                    tabIndex="0" 
                    className="return-to-top-button"> 
                    <span role="img" aria-label="finger pointing upwards"> ☝️ </span> 
                </div>
            </div>
        )
    }
}
export default ScrollUpMobile;
