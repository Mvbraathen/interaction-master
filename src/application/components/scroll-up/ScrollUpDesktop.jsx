import React from 'react';
import './ScrollUp.css';

class ScrollUpDesktop extends React.Component {

	render() {
        return (
            <div>
                <a href="#top">
                    <div
                        role="button"
                        title="Jump to top of page"
                        tabIndex="0" 
                        className="return-to-top-button"> 
                        <span role="img" aria-label="finger pointing upwards"> ☝️ </span> 
                    </div>
                </a>
            </div>
        )
    }
}
export default ScrollUpDesktop;
