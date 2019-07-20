import React from 'react';
import './ScrollToMain.css';

class ScrollToMain extends React.Component {
	render() {
        return (
            <a 
            	className="jump-to-main"
            	title="link to main content of page" 
            	href="#main-content">
            	Jump to main content
            </a> 
        )
    }
}
export default ScrollToMain;
