import React from "react";
// Various components
import Desktop from "../../../menus/desktop/Desktop";
import DesktopHeader from "../../../components/desktop-header/DesktopHeader";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import Footer from "../../../components/footer/Footer";
import HomeText from "../../../components/text/HomeText";
/* Scroll to top */
import ScrollUpDesktop from "../../../components/scroll-up/ScrollUpDesktop";

class DesktopContent extends React.Component {
    render() {    
        /* No header text on this page */
        const pageHeader = "";
        const fromPage = "home";
        
        return (
            <div>
                <DesktopHeader pageHeader={pageHeader} />
                <div className="new-sub-menu">
                    <Breadcrumb fromPage="Home" />
                </div>
                {/* Left half */}
                <div className="split left-half">
                    {/*<div style={{position: 'absolute', marginTop: '151px', marginLeft: '5%', marginRight: '5%', color: 'red', fontFamily: 'Avenir Next', fontSize: '1.5em'}}> To navigate, please interact with the circular menu below </div>*/}
                    <div className="sub-menu-without-selection"></div>
                    <Desktop fromPage={fromPage} />
                </div>
                <hr className="vertical-line" />
                {/* Right half */}
                <div  className="split right-half">
                    <div id="top"  className="sub-menu-without-selection"></div>
                    <div className="right-half-content">
                        <div
                            className="default-content-text">
                            <h1 className="home-big-header"> 
                                The mobile phone lifecycle
                            </h1>
                            <div style={{marginTop: '-40px', padding: '0px 20px 5px 20px', fontSize: '1em'}}>
                                <HomeText />
                            </div>
                        </div>

                        <div>
                      </div>
                    </div>
                    <Footer />
                    <ScrollUpDesktop />
                </div>
            </div>

        );
    }
}

export default DesktopContent;
