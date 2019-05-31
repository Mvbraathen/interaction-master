import React from 'react';
import Desktop from "../../../menus/desktop/Desktop";
import {
    NavLink
} from "react-router-dom";

class DesktopContent extends React.Component {
   render () {
		return (
			<div id="design-page">
                {/* Header */}
                <div className="desktop-header">
                    <div className="home-header-txt">
                        <NavLink className="header-link" to="/home">
                            <h1>
                                The Mobile Lifecycle
                            </h1>
                        </NavLink>
                    </div>
                </div>

                {/* Left half */}
                <div className="split left-half">
                    <div className="breadcrumb">
                        <NavLink to ="/home"><div className="prevPage">Home</div></NavLink>
                        <div className="breadcrumbSpacing"> <span className="breadcrumbArrow">&#8594;</span></div>
                        <NavLink to ="/design"><div className="activePage">Design</div></NavLink>
                    </div>
                    <Desktop />
                </div>

                {/* Right half */}
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