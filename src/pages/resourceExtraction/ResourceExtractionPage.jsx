import React, {Component} from 'react';
import Menu from "../components/menu/Menu";
import MobileMenu from "../components/mobileMenu/MobileMenu";
import MediaQuery from 'react-responsive';
import {
    NavLink
} from "react-router-dom";
import "./ResourceExtractionPage.css";
import "../pageStyle.css";

class ResourceExtractionPage extends Component {        
    render(){
        return (
            <div>
                <MediaQuery minWidth="850px">
                    <div className="split left">
                        <div className ="breadcrumb">
                            <NavLink className="prevPage" to ="/start">Home</NavLink>
                            {' | '}
                            <div className="activePage">Resource Extraction</div>
                        </div>
                        <div className="centerMenu">
                            <Menu />
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
                        <div className="mobileSize">
                            <div className="homeMobileTxt">
                                <h1> Resource Extraction </h1>
                                <div>Resource Extraction Resource Extraction Resource Extraction 
                                </div>
                            </div>
                        </div>
                        <div>
                            <MobileMenu />
                        </div>
                    </div>
                </MediaQuery>
            </div>
        );
    }
}

export default ResourceExtractionPage;