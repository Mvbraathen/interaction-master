import React, {Component} from 'react';
import Menu from "../components/menu/Menu";
import MobileMenu from "../components/mobileMenu/MobileMenu";
import MediaQuery from 'react-responsive';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import "./DesignPage.css";
import "../pageStyle.css";

class DesignPage extends Component {        
    render(){
        return (
            <div>
                <MediaQuery minWidth="850px">
                    <div className="split left">
                        <div className ="breadcrumb">
                            <Breadcrumb tag="nav" listTag="div">
                                <BreadcrumbItem className="prevPage" tag="a" href="/">Home</BreadcrumbItem>
                                {' | '}
                                <BreadcrumbItem active tag="span">Design</BreadcrumbItem>
                            </Breadcrumb>
                        </div>
                        <div className="centerMenu">
                            <Menu />
                        </div>
                    </div>
                    <div className="split right designColor"> 
                        <div className="designTxt">
                            <h1> Design </h1>
                            Du er nå på Design-siden!
                        </div> 
                    </div>
                </MediaQuery>
                <MediaQuery maxWidth={849}>
                    <div className="mobilePage">
                        <div className="mobileSize">
                            <div className="homeMobileTxt">
                                <h1> Design </h1>
                                <div>Design Design Design Design Design Design Design Design Design Design 
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

export default DesignPage;