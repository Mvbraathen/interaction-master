import React from 'react';
import './ScrollUp.css';

class ScrollUp extends React.Component {

    handleScroll() {
        try {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth',
            });
        } catch (error) {
            // just a fallback for older browsers
            window.scrollTo(0, 0);
        }
    }

	render() {
        return (
            <div>
                <div className="scroll-up-button" onClick={this.handleScroll}> <span role="img" aria-label="Finger pointing upwards"> ☝️ </span> </div>
            </div>
        )
    }
}
export default ScrollUp;
