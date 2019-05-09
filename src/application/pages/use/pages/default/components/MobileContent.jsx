import React from 'react';
import Mobile from "../../../../../menus/mobile/Mobile";
import {
    NavLink
} from "react-router-dom";
import "../../../../css/MobilePageStyle.css";

class MobileContent extends React.Component {
	render() {
		return (
			<div>
                <div className="mobilePage">
                    <div className="mobileContent">
                        <div className="header"></div>
                        <div className="pageHeaderBigScreen">  
                            <h1> Use </h1>
                        </div>
                            <div>
                                <div>
                                    INSERT CODE HERE, MARIUS
                                </div>









                                {/*
                                <div className="mobile-flex-container">
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
                                <div className="mobile-flex-container2">
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
                                */}

                            </div>
                        </div>
                        <Mobile />
                    </div>
			</div>
		)
	}
}

export default MobileContent;