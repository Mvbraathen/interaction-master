import React, {Component} from 'react';
import Desktop from "../../menus/desktop/Desktop";
import Mobile from "../../menus/mobile/Mobile";
import MediaQuery from 'react-responsive';
import {
    NavLink
} from "react-router-dom";
import "./Manufacturing.css";
import "../desktopPageStyle.css";
import "../mobilePageStyle.css";

class Manufacturing extends Component {        
    render(){
        return (
           <div>
                <MediaQuery minWidth="850px">
                    <div className="split left">
                        <div className ="breadcrumb">
                            <NavLink className="prevPage" to ="/home">Home</NavLink>
                            {' | '}
                            <div className="activePage">Manufacturing</div>
                        </div>
                        <div>
                            <Desktop />
                        </div>
                    </div>
                    <div className="split right manufacturingColor"> 
                        <div className="manufacturingTxt">
                            <h1> Manufacturing </h1>
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