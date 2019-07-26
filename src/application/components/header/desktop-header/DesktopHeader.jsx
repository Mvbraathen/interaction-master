import React from 'react';
import { NavLink } from "react-router-dom";
import './DesktopHeader.css';

class DesktopHeader extends React.Component {
	render() {
        return (
            <div className="desktop-header">
                <NavLink className="desktop-header-link" title="link to home page"  to="/home">
                    The Mobile Phone Lifecycle
                </NavLink>
                <div className="desktop-active-page"> 
                    {this.props.pageHeader}
                </div>
                <a 
                    href="http://smart.uio.no" 
                    className="desktop-bookmark">
                   SMART 
                </a>
            </div>
        );
	}
}
export default DesktopHeader;