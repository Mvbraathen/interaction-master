import React, {Component} from 'react';
import Desktop from "../../menus/desktop/Desktop";
import Mobile from "../../menus/mobile/Mobile";
import MediaQuery from 'react-responsive';
import {
    NavLink
} from "react-router-dom";
import "./Transport.css";
import "../css/DesktopNormal.css";
import "../css/MobileResolutionStyle.css";

class Transport extends Component {        
    render(){
        return (
            <div id="transport-page">
                <MediaQuery minWidth="850px">
                    <div className="split leftBig">
                        <div className="header"></div>
                        <div className="pageHeaderBigScreen">  
                            <h1> Transport </h1>
                        </div>
                        <div className="breadcrumb">
                            <NavLink to ="/home"><div className="prevPage">Home</div></NavLink>
                            <div className="breadcrumbSpacing"> <span className="breadcrumbArrow">&#8594;</span></div>
                            <NavLink to ="/transport"><div className="activePage">Transport</div></NavLink>
                        </div>
                        <Desktop />
                    </div>
                    <div className="split rightBig bigDefaultContent"> 
                        <div className="placeUls">
                            <h1 className="pageHeader"> Transport </h1>
                            <h2 className="impactsTxt"> Impacts of transportation </h2>
                            <ul className="transportUlGreen">
                                <li className="transportLiHeaderGreen liHeader">Environmental impacts</li>
                                
                                <NavLink className="navLinkStyle" to ="/transport"><li className="liHover transportLiGreen">Acidification</li></NavLink>
                                
                                <li className="liHover transportLiGreen">CO2 emissions</li>
                                <li className="liHover transportLiGreen">Eutrophication</li>  
                                <li className="liHover transportLiGreen">Ecotoxity</li>
                                <li className="liHover transportLiGreen">Particulate matter</li>
                            </ul>
                            <ul className="transportUlBlue">
                                <li className="transportLiHeaderBlue liHeader">Social impacts</li>
                                <li className="liHover transportLiBlue">Toxicity</li>
                            </ul>
                        </div>  
                    </div>
                </MediaQuery>
                <MediaQuery maxWidth={849}>
                    <div className="mobilePage">
                        <div className="mobileContent">
                            <h1> Transport Page </h1>
                            <div>
                                Transport Page Transport Page Transport Page 
                            </div>
                        </div>
                        <Mobile />
                    </div>
                </MediaQuery>
            </div>
        );
    }
}

export default Transport;