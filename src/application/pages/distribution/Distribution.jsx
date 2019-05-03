import React, {Component} from 'react';
import Desktop from "../../menus/desktop/Desktop";
import Mobile from "../../menus/mobile/Mobile";
import MediaQuery from 'react-responsive';
import {
    NavLink
} from "react-router-dom";
import "./Distribution.css";
import "../desktopPageStyle.css";
import "../mobilePageStyle.css";

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
                        <Desktop />
                    </div>
                    <div className="split right distributionColor"> 
                        <div className="distributionContent">
                            <h1> Distribution </h1>
                            <div> Du er nå på Distribution-siden! </div>
                        </div> 
                    </div>
                </MediaQuery>
                <MediaQuery maxWidth={849}>
                    <div className="mobilePage">
                        <div className="mobileContent">
                            <h1> Distribution Page </h1>
                            <div>
                                Distribution Page Distribution Page Distribution Page 
                            </div>
                        </div>
                        <Mobile />
                    </div>
                </MediaQuery>
            </div>
        );
    }
}

export default DistributionPage;