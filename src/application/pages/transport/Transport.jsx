import React, {Component} from 'react';
import Desktop from "../../menus/desktop/Desktop";
import Mobile from "../../menus/mobile/Mobile";
import MediaQuery from 'react-responsive';
import {
    NavLink
} from "react-router-dom";
import "./Transport.css";
import "../desktopPageStyle.css";
import "../mobilePageStyle.css";

class Transport extends Component {        
    render(){
        return (
            <div>
                <MediaQuery minWidth="850px">
                    <div className="split left">
                        <div className="breadcrumb">
                            <NavLink to ="/home"><div className="prevPage">Home</div></NavLink>
                            <div className="breadcrumbSpacing"> <span className="breadcrumbArrow">&#8594;</span></div>
                            <NavLink to ="/transport"><div className="activePage">Transport</div></NavLink>
                        </div>
                        <Desktop />
                    </div>
                    <div className="split right transportColor"> 
                        <div className="transportContent">
                            <h1> Transport </h1>
                            <div> Du er nå på Transport-siden! </div>
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