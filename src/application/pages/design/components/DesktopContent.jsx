import React from 'react';
import Desktop from "../../../menus/desktop/Desktop";
import Test from "./Test";
import {
    NavLink
} from "react-router-dom";

class DesktopContent extends React.Component {
	render() {
		return (
			<div id="design-page">
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
                        <h1>
                            Environmental Impacts
                        </h1>
                        <div className="desktop-purple-line"> {/* style from mobile */}
                            ____
                        </div> 
                    </div>

                    <div className="right-half-flex-container">
                        
                        <Test />

                       <div className="environmental-info-element">
                            <div className="info-box-content"> CO2 emissions </div>
                        </div>

                        <div className="environmental-info-element">
                            <div className="info-box-content"> Particulate matter </div>
                        </div>

                        <div className="environmental-info-element">
                            <div className="info-box-content"> Ecotoxicity </div>
                        </div>

                    </div>

                    <div className="desktop-header-txt">
                        <h1>
                            Social Impacts
                        </h1>
                        <div className="desktop-purple-line"> {/* style from mobile */}
                            ____
                        </div> 
                    </div>

                    <div className="right-half-flex-container">
                        
                        <div className="social-info-element">
                            <div className="info-box-content"> Acidification </div>
                        </div>

                       <div className="social-info-element">
                            <div className="info-box-content"> CO2 emissions </div>
                        </div>

                        <div className="social-info-element">
                            <div className="info-box-content"> Particulate matter </div>
                        </div>

                        <div className="social-info-element">
                            <div className="info-box-content"> Ecotoxicity </div>
                        </div>

                        <div className="social-info-element">
                            <div className="info-box-content"> Ecotoxicity </div>
                        </div>

                    </div>
                </div>
			</div>
		)
	}
}

export default DesktopContent;