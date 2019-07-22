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
                <div className="fix-content-scroll-under-sub"/>
                <Breadcrumb fromPage={fromPage} />
                {/* Left half */}
                <div className="split left-half">
                    <div className="sub-menu-without-selection"></div>
                    <Desktop />
                </div>
                <hr style={{marginTop: '60px'}} className="vertical-line" />

                {/* Right half */}
                <div className="split right-half">
                    <div id="top"  className="sub-menu-without-selection"></div>
                    <div className="right-half-content">
                        <div id="main-content" className="fix-top"/> 
                        <h1 
                            className="desktop-page-title" 
                            style={{color: '#E00070'}}> 
                            Where all decisions are made 
                        </h1>
                        <div className="image-container" style={{zIndex: '-99'}}>
                            <img 
                                alt="iphone" 
                                width="100%" 
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
