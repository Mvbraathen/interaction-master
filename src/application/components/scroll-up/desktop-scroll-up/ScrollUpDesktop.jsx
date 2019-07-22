import React from 'react';
import './ScrollUpDesktop.css';

class ScrollUpDesktop extends React.Component {

	render() {
        return (
            <a 
                style={{textDecoration: 'none'}} 
                className="return-to-top-button" 
                href="#top"
                role="button"
                title="Jump to top of page"> 
                <span 
                    role="img" 
                    aria-label="finger pointing upwards">
                    ☝️  
                </span>
            </a>
        )
    }
}
export default ScrollUpDesktop;
