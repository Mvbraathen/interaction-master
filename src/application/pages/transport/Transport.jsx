import React, { Component } from "react";
import MobileContent from "./components/MobileContent";
import DesktopContent from "./components/DesktopContent";
import MediaQuery from "react-responsive";

class Transport extends Component {

    componentDidMount(){
        document.title = "Transport | Lifecycle";
    }

    render() {
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

export default Transport;
