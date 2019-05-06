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
                        <div className ="breadcrumb">
                            <NavLink to ="/home"><div className="prevPage">Home</div></NavLink>
                            <div className="breadcrumbSpacing"> > </div>
                            <NavLink to ="/use"><div className="activePage">Use</div></NavLink>
                        </div>
                        <Desktop />
                    </div>
                    <div className="split right defaultColor"> 
                        <div className="defaultContent">
                            <h1> Use </h1>
                            <div> Du er nå på Use-siden! </div>
                            <NavLink to ="/use/lifetime"><div className="lifetimeLink">Go to Lifetime</div></NavLink>
                        </div> 
                    </div>
                </MediaQuery>


                <MediaQuery minWidth="1200px">
                    <div className="split leftBig">
                        <div className ="breadcrumb">
                            <NavLink to ="/home"><div className="prevPage">Home</div></NavLink>
                            <div className="breadcrumbSpacing"> > </div>
                            <NavLink to ="/use"><div className="activePage">Use</div></NavLink>
                        </div>
                        <Desktop />
                    </div>
                    <div className="split rightBig"> 
                        <div className="bigDefaultContent">
                            <h1> Use </h1>
                            <div> Du er nå på Use-siden! </div>
                            <NavLink to ="/use/lifetime"><div className="lifetimeLink">Go to Lifetime</div></NavLink>
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