import React from 'react';
import Desktop from "../../../../../menus/desktop/Desktop";
import {
    NavLink
} from "react-router-dom";
import "../../../../css/DesktopBig.css";
import "../../../../css/FlexBox.css";
import "../../../../css/Breadcrumbs.css";

class DesktopContent extends React.Component {
	render() {
		return (
			<div id="use-page">
               <div className="split leftBig">
                    <div className="header"></div>
                    <div className="pageHeaderBigScreen">  
                        <h1> Use </h1>
                    </div>
                    <div className="breadcrumb">
                        <NavLink to ="/home"><div className="prevPage">Home</div></NavLink>
                        <div className="breadcrumbSpacing"> <span className="breadcrumbArrow">&#8594;</span></div>
                        <NavLink to ="/use"><div className="activePage">Use</div></NavLink>
                    </div>
                    <Desktop />
                </div>
                <div className="split rightBig bigDefaultContent">
                    <div className="mobileHeader">
                    </div> 
                    <div>
                        <div>
                        <h1 className="pageHeaderBigScreen"> Use </h1>
                        <div>
                            <div className="big-screen-flex-container">
                                    <h1 className="impactHeader">Environmental Impacts</h1>
                                
                                    <NavLink className="environmentalImpacts" to ="/use/lifetime">
                                        <div className="removeUnderline">
                                            Acidification
                                            <span className="flexArrow">&#8594;</span>
                                        </div>
                                    </NavLink>
                                
                                    <div className="environmentalImpacts">
                                        CO2 emissions
                                        <span className="flexArrow">&#8594;</span>
                                    </div>
                                    <div className="environmentalImpacts">
                                        Eutrophication
                                        <span className="flexArrow">&#8594;</span>
                                    </div>  
                                    <div className="environmentalImpacts">
                                        Ecotoxity
                                        <span className="flexArrow">&#8594;</span>
                                    </div>
                                    <div className="environmentalImpacts">
                                        Particulate matter
                                        <span className="flexArrow">&#8594;</span> 
                                    </div>
                                    <div className="hacky-flex-fix">  
                                    </div>
                                </div>
                                <div className="big-screen-flex-container2">
                                    <h1 className="impactHeader">Social Impacts</h1>
                                    <div className="socialImpacts">
                                        Acidification
                                        <span className="flexArrow">&#8594;</span>
                                    </div>
                                    <div className="socialImpacts">
                                        CO2 emissions
                                        <span className="flexArrow">&#8594;</span>
                                    </div>
                                    <div className="socialImpacts">
                                        Eutrophication
                                        <span className="flexArrow">&#8594;</span>
                                    </div>  
                                    <div className="socialImpacts">
                                        Ecotoxity
                                        <span className="flexArrow">&#8594;</span>
                                    </div>
                                    <div className="socialImpacts">
                                        Particulate matter
                                        <span className="flexArrow">&#8594;</span>
                                    </div>
                                    <div className="hacky-flex-fix">  
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div> 
                </div>
			</div>
		)
	}
}

export default DesktopContent;