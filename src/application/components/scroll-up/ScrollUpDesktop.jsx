import React from 'react';
import './ScrollUp.css';

class ScrollUpDesktop extends React.Component {

	render() {
        return (
            <div>
                <a style={{textDecoration: 'none'}} className="return-to-top-button" href="#top">
                    <div
                        role="button"
                        title="Jump to top of page"
                        > 
                        <span role="img" aria-label="finger pointing upwards"> ☝️ </span> 
                    </div>
                </a>
            </div>
        )
    }
}
export default ScrollUpDesktop;
