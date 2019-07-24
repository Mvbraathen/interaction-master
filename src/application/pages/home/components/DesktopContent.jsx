import React from "react";
// Various components
import Desktop from "../../../menus/desktop/Desktop";
import DesktopHeader from "../../../components/header/desktop-header/DesktopHeader";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import Footer from "../../../components/footer/Footer";
import HomeText from "../../../components/text/HomeText";
/* Scroll to top */
import ScrollUpDesktop from "../../../components/scroll-up/desktop-scroll-up/ScrollUpDesktop";
/* Jump to main content */ 
import ScrollToMain from "../../../components/scroll-to-main/ScrollToMain";

class DesktopContent extends React.Component {
    render() {    
        /* No header text on this page */
        const pageHeader = "";
        const fromPage = "home";
        
        return (
            <div id="home">
                <ScrollToMain />
                <DesktopHeader pageHeader={pageHeader} />
                <div className="fix-content-scroll-under-sub" />
                <Breadcrumb fromPage={fromPage} />
                {/* Left half */}
                <div className="split left-half">
                    <Desktop />
                </div>
                {/* Right half */}
                <div className="split right-half">
                    <div id="top" />
                    <div id="main-content" className="fix-top"/> 
                    <div className="right-half-content">
                        {/* Focus skips to main content */}
                        <div id="main-content" className="fix-top"/>
                        <div className="default-content-text">
                            <div style={{marginLeft: '17px'}}>
                                <h1
                                    className="desktop-page-title"  
                                    style={{color: '#33333'}}>  
                                    <a  
                                        href="http://smart.uio.no"  
                                        className="smart-research-link"> 
                                        SMART   
                                    </a>    
                                    research    
                                </h1>
                                <h1 className="home-big-header"> 
                                    The mobile phone lifecycle
                                </h1>
                            </div>
                            <div style={{marginTop: '-60px', padding: '0px 20px 5px 20px', fontSize: '1em'}}>
                                <HomeText />
                            </div>
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
