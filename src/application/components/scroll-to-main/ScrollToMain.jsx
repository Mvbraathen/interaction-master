import React from 'react';
import './ScrollToMain.css';

class ScrollToMain extends React.Component {

    /* Jumps to main content, select correct scroll point on y-axis */
    handleJumpToContent() {
        window.scrollTo(0, 120);
    }

    /* calls handleJumpToContent if enter pressed */
    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.handleJumpToContent();
        }
    }

	render() {
        return (
            <div
                onClick={this.handleJumpToContent}
                onKeyDown={this.handleKeyDown} 
                className="jump-to-main-content" 
                tabIndex="1">
                Jump to main content
            </div>
        )
    }
}
export default ScrollToMain;