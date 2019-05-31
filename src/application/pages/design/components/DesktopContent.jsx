import React from 'react';
import Desktop from "../../../menus/desktop/Desktop";
import '../../css/DesktopBig.css';
import {
    NavLink
} from "react-router-dom";

class DesktopContent extends React.Component {
   render () {
		return (
			<div id="design-page">
                <div className="desktop-header">
                    <div className="home-header-txt">
                        <NavLink className="header-link" to="/home"><h1>
                            The Mobile Lifecycle
                        </h1></NavLink>
                    </div>
                    <a tabIndex="-1" href="https://www.smart.uio.no">
                        <div tabIndex="0" className="desktop-bookmark">
                            <div className="hidden-bookmark-text">
                                This website is made in collaboration with the EU Horizon 2020 funded <strong>SMART</strong> project. 
                            </div>
                            <img
                                className="desktop-smart-logo"
                                alt="SMART"
                                src={require('../../images/smart-logo-transparent.png')} 
                            />    
                            <div className="desktop-smart-text"> 
                                SMART 
                            </div>
                        </div>
                    </a>

                </div>
                <div className="split left-half">
                <div className="breadcrumb">
                        <NavLink to ="/home"><div className="prevPage">Home</div></NavLink>
                        <div className="breadcrumbSpacing"> <span className="breadcrumbArrow">&#8594;</span></div>
                        <NavLink to ="/design"><div className="activePage">Design</div></NavLink>
                    </div>
                    <Desktop />
                </div>
                <div className="split right-half">
                    <div className="desktop-header-txt">
                        <div className="fix-top-margin-environmental"></div> 
                        <h1>
                            Design
                        </h1>
                        <div className="purple-line"></div> 
                    </div>
                    <div className="design-info"></div> 
                </div>
			</div>
		)
	}
}

export default DesktopContent;