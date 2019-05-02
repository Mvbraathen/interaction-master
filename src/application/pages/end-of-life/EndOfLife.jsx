import React, {Component} from 'react';
import Desktop from "../../menus/desktop/Desktop";
import Mobile from "../../menus/mobile/Mobile";
import MediaQuery from 'react-responsive';
import {
    NavLink
} from "react-router-dom";
import "./EndOfLife.css";
import "../pageStyle.css";

class EndOfLife extends Component {        
    render(){
        return (
            <div>
                <MediaQuery minWidth="850px">
                    <div className="split left">
                        <div className ="breadcrumb">
                            <NavLink className="prevPage" to ="/home">Home</NavLink>
                            {' | '}
                            <div className="activePage">End of Life</div>
                        </div>
                        <div className="centerMenu">
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
                        <div className="mobileSize">
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