import React, {Component} from 'react';
import MobileContent from "./components/MobileContent";
import DesktopContent from "./components/DesktopContent";
import MediaQuery from 'react-responsive';
import "./Default.css";
import "../../../css/desktopNormal.css";
import "../../../css/desktopBig.css";
import "../../../css/mobilePageStyle.css";

class Use extends Component {     
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

export default Use;