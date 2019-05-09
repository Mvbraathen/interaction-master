import React, {Component} from 'react';
import Mobile from "../../../../menus/mobile/Mobile";
import {
    NavLink
} from "react-router-dom";
import MediaQuery from 'react-responsive';
import "./Lifetime.css";
import "../../../css/desktopNormal.css";
import "../../../css/mobilePageStyle.css";

class Use extends Component {     
    render(){
        return (
            <div>
                <MediaQuery minWidth="850px">
                    <div className="nestedPageStyle">
                        <div className="mobileHeader"></div>
                        <div className="breadcrumb">
                            <NavLink to ="/home"><div className="prevPage">Home</div></NavLink>
                            <div className="breadcrumbSpacing"> <span className="breadcrumbArrow">&#8594;</span></div>
                            <NavLink to ="/use"><div className="prevPage">Use</div></NavLink>
                            <div className="breadcrumbSpacing"> <span className="breadcrumbArrow">&#8594;</span></div>
                            <NavLink to ="/use/lifetime"><div className="activePage">Lifetime</div></NavLink>
                        </div>
                        <div className="lifetimeContent">
                            <h1> Lifetime </h1>
                            <div> Du er nå på Lifetime-siden! </div>
                        </div> 
                    </div>
                </MediaQuery>
                <MediaQuery maxWidth={849}>
                    <div className="mobilePage">
                        <div className="mobileContent">
                            <div className="homeMobileTxt">
                                <h1> Lifetime </h1>
                                <div> Lifetime Lifetime Lifetime </div>
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