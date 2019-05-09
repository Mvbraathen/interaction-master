import React, {Component} from 'react';
import Desktop from "../../menus/desktop/Desktop";
import Mobile from "../../menus/mobile/Mobile";
import MediaQuery from 'react-responsive';
import {
    NavLink
} from "react-router-dom";
import "./ResourceExtraction.css";
import "../css/DesktopNormal.css";
import "../css/MobilePageStyle.css";

class ResourceExtraction extends Component {        
    render(){
        return (
            <div>
                <MediaQuery minWidth="850px">
                    <div className="split leftBig">
                        <div className="header"></div>
                        <div className="pageHeaderBigScreen">  
                            <h1> Resource Extraction </h1>
                        </div>
                        <div className="breadcrumb">
                            <NavLink to ="/home"><div className="prevPage">Home</div></NavLink>
                            <div className="breadcrumbSpacing"> <span className="breadcrumbArrow">&#8594;</span></div>
                            <NavLink to ="/resource-extraction"><div className="activePage">Resource Extraction</div></NavLink>
                        </div>
                        <div>
                            <Desktop />
                        </div>
                    </div>
                    <div className="split rightBig bigDefaultContent"> 
                        <div className="placeUls">
                            <h1 className="pageHeader"> Resource Extraction </h1>
                            <h2 className="impactsTxt"> Impacts of transportation </h2>
                            <ul className="transportUlGreen">
                                <li className="transportLiHeaderGreen liHeader">Environmental impacts</li>
                                
                                <NavLink className="navLinkStyle" to ="/transport"><li className="liHover transportLiGreen">Acidification</li></NavLink>
                                
                                <li className="liHover transportLiGreen">Biodiversity loss</li>
                                <li className="liHover transportLiGreen">CO2 emissions</li>
                                <li className="liHover transportLiGreen">Deforestation</li>
                                <li className="liHover transportLiGreen">Eutrophication</li>
                                <li className="liHover transportLiGreen">Excessive water use</li>  
                                <li className="liHover transportLiGreen">Ecotoxity</li>
                                <li className="liHover transportLiGreen">Ozone depletion</li>
                                <li className="liHover transportLiGreen">Particulate matter</li>
                            </ul>
                            <ul className="transportUlBlue">
                                <li className="transportLiHeaderBlue liHeader">Social impacts</li>
                                <li className="liHover transportLiBlue">Food insecurity</li>
                                <li className="liHover transportLiBlue">Prcarious work</li>
                                <li className="liHover transportLiBlue">Polluted drinking water</li>
                                <li className="liHover transportLiBlue">Human Toxicity</li>
                                <li className="liHover transportLiBlue">Child labour/Low literacy</li>
                                <li className="liHover transportLiBlue">Lack of clean household energy</li>
                                <li className="liHover transportLiBlue">Gender inequality</li>
                                <li className="liHover transportLiBlue">Discrimination</li>
                                <li className="liHover transportLiBlue">Marginalisation/Forced relocation</li>
                                <li className="liHover transportLiBlue">Violent conflict/Corruption</li>
                                <li className="liHover transportLiBlue">Living in slums</li>
                            </ul>
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery maxWidth={849}>
                    <div className="mobilePage">
                        <div className="mobileContent">
                            <div className="homeMobileTxt">
                                <h1> Resource Extraction </h1>
                                <div>Resource Extraction Resource Extraction Resource Extraction 
                                </div>
                            </div>
                        </div>
                        <div>
                            <Mobile />
                        </div>
                    </div>
                </MediaQuery>
            </div>
        );
    }
}

export default ResourceExtraction;