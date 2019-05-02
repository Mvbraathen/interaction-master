import React, {Component} from 'react';
import Desktop from "../../menus/desktop/Desktop";
import Mobile from "../../menus/mobile/Mobile";
import MediaQuery from 'react-responsive';
import {
    NavLink
} from "react-router-dom";
import "./Distribution.css";
import "../pageStyle.css";

class DistributionPage extends Component {        
    render(){
        return (
            <div>
                <MediaQuery minWidth="850px">
                    <div className="split left">
                        <div className ="breadcrumb">
                            <NavLink className="prevPage" to ="/home">Home</NavLink>
                            {' | '}
                            <div className="activePage">Distribution</div>
                        </div>
                        <div className="centerMenu">
                            <Desktop />
                        </div>
                    </div>
                    <div className="split right distributionColor"> 
                        <div className="distributionTxt">
                            <h1> Distribution </h1>
                            Du er nå på Distribution-siden!
                        </div> 
                    </div>
                </MediaQuery>
                <MediaQuery maxWidth={849}>
                    <div className="mobilePage">
                        <div className="mobileSize">
                            <div className="homeMobileTxt">
                                <h1> Distribution Page </h1>
                                <div>Distribution Page Distribution Page Distribution Page 
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

export default DistributionPage;