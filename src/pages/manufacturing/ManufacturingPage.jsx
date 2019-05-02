import React, {Component} from 'react';
import Menu from "../components/menu/Menu";
import MobileMenu from "../components/mobileMenu/MobileMenu";
import MediaQuery from 'react-responsive';
import {
    NavLink
} from "react-router-dom";
import "./ManufacturingPage.css";
import "../pageStyle.css";

class ManufacturingPage extends Component {        
    render(){
        return (
           <div>
                <MediaQuery minWidth="850px">
                    <div className="split left">
                        <div className ="breadcrumb">
                            <NavLink className="prevPage" to ="/start">Home</NavLink>
                            {' | '}
                            <div className="activePage">Manufacturing</div>
                        </div>
                        <div className="centerMenu">
                            <Menu />
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
                        <div className="mobileSize">
                            <div className="homeMobileTxt">
                                <h1> Manufacturing </h1>
                                <div> Manufacturing Manufacturing Manufacturing
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

export default ManufacturingPage;