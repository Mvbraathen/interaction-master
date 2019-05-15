import React, {Component} from 'react';
import MobileContent from "./components/MobileContent";
import DesktopContent from "./components/DesktopContent";
import MediaQuery from 'react-responsive';
import "./Default.css";
import "../../../css/DesktopNormal.css";
import "../../../css/DesktopBig.css";
import "../../../css/MobileResolutionStyle.css";

class Default extends Component {     
    render(){
        return (
            <div>
                {/* Normal sized screen */}
                <MediaQuery minWidth="850px">
                    <DesktopContent />
                </MediaQuery>
                {/* Mobile sized screen */}
                <MediaQuery maxWidth="849px">
                    <MobileContent /> 
                </MediaQuery>
            </div>
        );
    }
}

export default Default;