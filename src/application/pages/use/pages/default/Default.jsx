import React, {Component} from 'react';
import Desktop from "../../../../menus/desktop/Desktop";
import Mobile from "../../../../menus/mobile/Mobile";
import {
    NavLink
} from "react-router-dom";
import MediaQuery from 'react-responsive';
import "./Default.css";
import "../../../desktopPageStyle.css";
import "../../../mobilePageStyle.css";

class Use extends Component {     
    render(){
        return (
            <div>
                {/* Normal sized screen */}
                <MediaQuery minWidth="850px" maxWidth="1199px">
                    <div className="split left">
                        <div className="breadcrumb">
                            <NavLink to ="/home"><div className="prevPage">Home</div></NavLink>
                            <div className="breadcrumbSpacing"> <span className="breadcrumbArrow">&#8594;</span></div>
                            <NavLink to ="/use"><div className="activePage">Use</div></NavLink>
                        </div>
                        <Desktop />
                    </div>
                    <div className="split right use-page-right-half-background-color"> 
                        <div className="mobileHeader">
                        </div>
                        <div>
                            <h1 className="pageHeader"> Use (normal) </h1>
                            <div className="flex-container">
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
                            <div className="flex-container2">
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
                </MediaQuery>

            {/* Big sized screen */}
                <MediaQuery minWidth="1200px">
                    <div className="split leftBig">
                        <div className="mobileHeader">
                        </div>
                        <div className="breadcrumb">
                            <NavLink to ="/home"><div className="prevPage">Home</div></NavLink>
                            <div className="breadcrumbSpacing"> <span className="breadcrumbArrow">&#8594;</span></div>
                            <NavLink to ="/use"><div className="activePage">Use</div></NavLink>
                        </div>
                        <Desktop />
                    </div>
                    <div className="split rightBig use-page-right-half-background-color bigDefaultContent">
                        <div className="mobileHeader">
                        </div> 
                        <div>
                            <div>
                            <h1 className="pageHeaderBigScreen"> Use (big) </h1>
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
                </MediaQuery>

            
                {/* Mobile sized screen */}
                <MediaQuery maxWidth={849}>
                    <div className="mobilePage">
                        <div className="mobileContent">
                            <div className="mobileHeader">
                            </div>
                            <div>
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
                            </div>
                        </div>
                        <Mobile />
                    </div>
                </MediaQuery>
            </div>
        );
    }
}

export default Use;