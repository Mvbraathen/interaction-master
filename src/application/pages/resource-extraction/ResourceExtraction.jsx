import React, {Component} from 'react';
import Desktop from "../../menus/desktop/Desktop";
import Mobile from "../../menus/mobile/Mobile";
import MediaQuery from 'react-responsive';
import {
    NavLink
} from "react-router-dom";
import "./ResourceExtraction.css";
import "../desktopPageStyle.css";
import "../mobilePageStyle.css";

class ResourceExtraction extends Component {        
    render(){
        return (
            <div>
                <MediaQuery minWidth="850px">
                    <div className="split left">
                        <div className ="breadcrumb">
                            <NavLink className="prevPage" to ="/home">Home</NavLink>
                            {' | '}
                            <div className="activePage">Resource Extraction</div>
                        </div>
                        <div>
                            <Desktop />
                        </div>
                    </div>
                    <div className="split right resourceExtractionColor"> 
                        <div className="resourceExtractionTxt">
                            <h1> Resource Extraction </h1>
                            Du er nå på Resource Extraction-siden!
                        </div> 
                    </div>
                </MediaQuery>
                <MediaQuery maxWidth={849}>
                    <div className="mobilePage">
                        <div className="mobileContent">
                            <div className="homeMobileTxt">
                                <h1> Resource Extraction </h1>
                                <div>Resource Extraction Resource Extraction Resource Extraction 
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

export default ResourceExtraction;