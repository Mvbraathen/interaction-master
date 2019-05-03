import React, {Component} from 'react';
import Desktop from "../../menus/desktop/Desktop";
import Mobile from "../../menus/mobile/Mobile";
import MediaQuery from 'react-responsive';
import {
    NavLink
} from "react-router-dom";
import "./Design.css";
import "../pageStyle.css";

class Design extends Component {        
    render(){
        return (
            <div>
                <MediaQuery minWidth="850px">
                    <div className="split left">
                        <div className ="breadcrumb">
                            <NavLink className="prevPage" to ="/home">Home</NavLink>
                            {' | '}
                            <div className="activePage">Design</div>
                        </div>
                        <div className="desktopMenu">
                            <Desktop />
                        </div>
                    </div>
                    <div className="split right designColor"> 
                        <div className="designTxt">
                            <h1> Design </h1>
                            Du er nå på Design-siden!
                        </div> 
                    </div>
                </MediaQuery>
                <MediaQuery maxWidth={849}>
                    <div className="mobilePage">
                        <div className="mobileSize">
                            <div className="homeMobileTxt">
                                <h1> Design </h1>
                                <div>Design Design Design Design Design Design Design Design Design Design 
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

export default Design;