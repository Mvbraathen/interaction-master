import React, {Component} from 'react';
import Desktop from "../../menus/desktop/Desktop";
import Mobile from "../../menus/mobile/Mobile";
import MediaQuery from 'react-responsive';
import {
    NavLink
} from "react-router-dom";
import "./Design.css";
import "../desktopPageStyle.css";
import "../mobilePageStyle.css";

class Design extends Component {        
    render(){
        return (
            <div>
                <MediaQuery minWidth="850px">
                    <div className="split left">
                        <div className="breadcrumb">
                            <NavLink to ="/home"><div className="prevPage">Home</div></NavLink>
                            <div className="breadcrumbSpacing"> <span className="breadcrumbArrow">&#8594;</span></div>
                            <NavLink to ="/design"><div className="activePage">Design</div></NavLink>
                        </div>
                        <Desktop />
                    </div>
                    <div className="split right designColor"> 
                        <div className="designContent">
                            <h1> Design </h1>
                            <div> Du er nå på Design-siden! </div>
                        </div> 
                    </div>
                </MediaQuery>
                <MediaQuery maxWidth={849}>
                    <div className="mobilePage">
                        <div className="mobileContent">
                            <h1> Design </h1>
                            <div>
                                Design Design Design Design 
                                Design Design Design Design 
                                Design Design 
                            </div>
                        </div>
                        <Mobile />
                    </div>
                </MediaQuery>
            </div>
        );
    }
}

export default Design;