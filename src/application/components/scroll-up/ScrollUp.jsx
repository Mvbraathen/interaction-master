import React from 'react';
import MediaQuery from "react-responsive";
import './ScrollUp.css';

class ScrollUp extends React.Component {

    /* Sets scroll position on both x and y axis */
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
            <div>
                {/* Desktop view */}
                <MediaQuery minWidth="850px">
                    <a href="#top">
                        <div
                            role="button"
                            title="Jump to top of page"
                            tabIndex="0" 
                            className="return-to-top-button"> 
                            <span role="img" aria-label="finger pointing upwards"> ☝️ </span> 
                        </div>
                    </a>
                </MediaQuery>

                {/* Mobile view */}
                <MediaQuery maxWidth="849px">
                    <div
                        role="button"
                        title="Jump to top of page"
                        onClick={this.handleScrollTop}
                        onKeyPress={this.handleKeyPress}
                        tabIndex="0" 
                        className="return-to-top-button"> 
                        <span role="img" aria-label="finger pointing upwards"> ☝️ </span> 
                    </div>
                </MediaQuery>
            </div>
        )
    }
}
export default ScrollUp;
