import React, {Component} from 'react';
import Desktop from "../../menus/desktop/Desktop";
import Mobile from "../../menus/mobile/Mobile";
import MediaQuery from 'react-responsive';
import {
    NavLink
} from "react-router-dom";
import "./EndOfLife.css";
import "../desktopPageStyle.css";
import "../mobilePageStyle.css";

class EndOfLife extends Component {        
    render(){
        return (
            <div>
                <MediaQuery minWidth="850px">
                    <div className="split left">
                        <div className="breadcrumb">
                            <NavLink to ="/home"><div className="prevPage">Home</div></NavLink>
                            <div className="breadcrumbSpacing"> <span className="breadcrumbArrow">&#8594;</span></div>
                            <NavLink to ="/end-of-life"><div className="activePage">End of Life</div></NavLink>
                        </div>
                        <div>
                            <Desktop />
                        </div>
                    </div>
                    <div className="split right endOfLifeColor"> 
                        <div className="endOfLifeTxt">
                            <h1> End of Life </h1>
                            Du er nå på End of Life-siden!
                        </div> 
                    </div>
                </MediaQuery>
                <MediaQuery maxWidth={849}>
                    <div className="mobilePage">
                        <div className="mobileContent">
                            <div className="homeMobileTxt">
                                <h1> End of Life </h1>
                                <div>End of Life End of Life
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

export default EndOfLife;