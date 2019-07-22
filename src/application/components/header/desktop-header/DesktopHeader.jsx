import React from 'react';
import { NavLink } from "react-router-dom";
import './DesktopHeader.css';

class DesktopHeader extends React.Component {
	render() {
        return (
            <div className="desktop-header">
                <NavLink className="desktop-header-link" to="/home">
                    The mobile phone lifecycle
                </NavLink>
                <div className="desktop-active-page"> 
                    {this.props.pageHeader}
                </div>
                <a href="http://smart.uio.no">
                    <div className="desktop-bookmark"> SMART </div>
                </a>
            </div>
        );
	}
}
export default DesktopHeader;