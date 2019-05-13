import React, {Component} from 'react';
import Desktop from "../../menus/desktop/Desktop";
import Mobile from "../../menus/mobile/Mobile";
import MediaQuery from 'react-responsive';
import {
    NavLink
} from "react-router-dom";
import "./Manufacturing.css";
import "../css/DesktopNormal.css";
import "../css/MobileResolutionStyle.css";

class Manufacturing extends Component {        
    render(){
        return (
           <div id="manufacturing-page">
                <MediaQuery minWidth="850px">
                    <div className="split leftBig">
                        <div className="header"></div>
                        <div className="pageHeaderBigScreen">  
                            <h1> Manufacturing </h1>
                        </div>
                        <div className="breadcrumb">
                            <NavLink to ="/home"><div className="prevPage">Home</div></NavLink>
                            <div className="breadcrumbSpacing"> <span className="breadcrumbArrow">&#8594;</span></div>
                            <NavLink to ="/manufacturing"><div className="activePage">Manufacturing</div></NavLink>
                        </div>
                        <div>
                            <Desktop />
                        </div>
                    </div>
                    <div className="split rightBig bigDefaultContent">
                        <div className="mobileHeader"></div> 
                        <div className="pageHeader">
                             <h1> Manufacturing </h1>
                        </div>
                        <div className="manufacturingTxt">
                            Du er nå på Manufacturing-siden!
                        </div> 
                    </div>
                </MediaQuery>
                <MediaQuery maxWidth={849}>
                    <div className="mobilePage">
                        <div className="mobileContent">
                            <div className="homeMobileTxt">
                                <h1> Manufacturing </h1>
                                <div> Manufacturing Manufacturing Manufacturing
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

export default Manufacturing;