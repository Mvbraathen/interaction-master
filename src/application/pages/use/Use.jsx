import React, {Component} from 'react';
import Desktop from "../../menus/desktop/Desktop";
import Mobile from "../../menus/mobile/Mobile";
import {
    NavLink
} from "react-router-dom";
import MediaQuery from 'react-responsive';
import "./Use.css";
import "../desktopPageStyle.css";
import "../mobilePageStyle.css";

class Use extends Component {     
    render(){
        return (
            <div>
                <MediaQuery minWidth="850px">
                    <div className="split left">
                        <div className ="breadcrumb">
                            <NavLink className="prevPage" to ="/home">Home</NavLink>
                            <div className="activePage breadcrumbSpacing"> > </div>
                            <NavLink to ="/use"><div className="activePage">Use</div></NavLink>
                        </div>
                        <Desktop />
                    </div>
                    <div className="split right useColor"> 
                        <div className="useContent">
                            <h1> Use </h1>
                            <div> Du er nå på Use-siden! </div>
                        </div> 
                    </div>
                </MediaQuery>
                <MediaQuery maxWidth={849}>
                    <div className="mobilePage">
                        <div className="mobileContent">
                            <div className="homeMobileTxt">
                                <h1> Use </h1>
                                <div> Use Use Use </div>
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