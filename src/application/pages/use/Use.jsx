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
                            {' | '}
                            <div className="activePage">Use</div>
                        </div>
                        <div>
                            <Desktop />
                        </div>
                    </div>
                    <div className="split right useColor"> 
                        <div className="useTxt">
                            <h1> Use </h1>
                            Du er nå på Use-siden!
                        </div> 
                    </div>
                </MediaQuery>
                <MediaQuery maxWidth={849}>
                    <div className="mobilePage">
                        <div className="mobileSize">
                            <div className="homeMobileTxt">
                                <h1> Use </h1>
                                <div> Use Use Use
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

export default Use;