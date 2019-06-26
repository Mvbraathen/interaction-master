import React from 'react';
import { NavLink } from "react-router-dom";
import './DesktopHeader.css';

class DesktopHeader extends React.Component {
	render() {
        return (
            <div className="new-header">
                <NavLink className="new-header-link" to="/home">
                    The mobile lifecycle
                </NavLink>
                <div className="new-active-page"> 
                    {this.props.pageHeader}
                </div>
                <a href="https://www.smart.uio.no">
                    <div className="new-bookmark">
                        <div className="new-smart-text" style={{fontFamily: 'Avenir Next'}}> 
                            In collaboration with </div>
                        <div lassName="new-smart-text new-bold-text" style={{fontFamily: 'Avenir Next'}}> 
                            <strong>smart.uio.no</strong> 
                        </div>
                  </div>
                </a>
            </div>
        );
	}
}
export default DesktopHeader;