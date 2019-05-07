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
                <MediaQuery minWidth="850px" maxWidth="1199px">
                    <div className="split left">
                        <div className="breadcrumb">
                            <NavLink to ="/home"><div className="prevPage">Home</div></NavLink>
                            <div className="breadcrumbSpacing"> <span className="breadcrumbArrow">&#8594;</span></div>
                            <NavLink to ="/use"><div className="activePage">Use</div></NavLink>
                        </div>
                        <Desktop />
                    </div>
                    <div className="split right defaultColor"> 
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
                            </div>
                        </div> 
                    </div>
                </MediaQuery>


                <MediaQuery minWidth="1200px">
                    <div className="split leftBig">
                        <div className="breadcrumb">
                            <NavLink to ="/home"><div className="prevPage">Home</div></NavLink>
                            <div className="breadcrumbSpacing"> <span className="breadcrumbArrow">&#8594;</span></div>
                            <NavLink to ="/use"><div className="activePage">Use</div></NavLink>
                        </div>
                        <Desktop />
                    </div>
                    <div className="split rightBig defaultColor bigDefaultContent"> 
                        <div>
                            <div>
                            <h1 className="pageHeader"> Use (big) </h1>
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
                            </div>
                        </div> 
                        </div> 
                    </div>
                </MediaQuery>

            


                <MediaQuery maxWidth={849}>
                    <div className="mobilePage">
                        <div className="mobileContent">
                            <div className="homeMobileTxt">
                                <h1> Use </h1>
                                <div> Use Use Use </div> 
                                <NavLink to ="/use/lifetime">Go to Lifetime</NavLink>
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