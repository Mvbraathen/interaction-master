import React from "react";
// Various components
import Desktop from "../../../menus/desktop/Desktop";
import DesktopHeader from "../../../components/header/desktop-header/DesktopHeader";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import Footer from "../../../components/footer/Footer";
import DesignPhase from "../../../components/text/DesignPhase";
/* Scroll to top */
import ScrollUpDesktop from "../../../components/scroll-up/desktop-scroll-up/ScrollUpDesktop";
/* Jump to main content */ 
import ScrollToMain from "../../../components/scroll-to-main/ScrollToMain";

class DesktopContent extends React.Component {

    render() {
        /* To select corresponding components */
        const fromPage = "design";
        
        /* To get correct header text */
        const pageHeader = "Design";
        
        return (
            <div id="design-page">
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
                    <div className="fix-top"/> 
                    <div className="right-half-content">
                        {/* Focus skips to main content */}
                        <div id="main-content" className="fix-top"/>
                        <h1 
                            className="h1-impact-style" 
                            style={{color: '#E00070'}}> 
                            The design phase 
                        </h1>
                        <div className="image-container">
                            <img 
                                alt="iphone" 
                                width="100%"
                                style={{marginLeft: '-10px', marginRight: '-10px'}}
                                src={require('./images/iphone.jpg')} 
                            />
                            <a
                                className="image-credit" 
                                href="https://unsplash.com/@williamtm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> 
                                William Hook
                            </a>
                        </div>
                        <div className="default-content-text">
                            <DesignPhase />
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
