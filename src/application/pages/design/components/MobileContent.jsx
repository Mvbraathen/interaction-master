import React from "react";
/* Header and footer for mobile devices */
/* Mobile menu */
import Mobile from "../../../menus/mobile/Mobile";
/* Header and footer */
import MobileHeader from "../../../components/mobile-header/MobileHeader";
import Footer from "../../../components/footer/Footer";
/* Text */
import DesignPhase from "../../../components/text/DesignPhase";
/* Scroll up */
import ScrollUpMobile from "../../../components/scroll-up/ScrollUpMobile";
/* Jump to main content */ 
import ScrollToMain from "../../../components/scroll-to-main/ScrollToMain";

class MobileContent extends React.Component {

    /* Scrolls to top when page loads */
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {

        /* To get correct page header text */
        const pageHeader = "Design";

        return (
            <div>
                <ScrollToMain />
                <Mobile />
                <div className="mobile-page">        
                    <div style={{marginTop: '60px'}} className="mobile-content">
                        {/* For the ScrollToMain component */}
                        <div id="main-content" />
                        <MobileHeader pageHeader={pageHeader} />
                        <h1 
                            className="h1-default-style"
                            style={{
                                position: 'relative',
                                color: 'rgb(224, 0, 112)'
                            }}> 
                            Where all decisions are made
                        </h1>
                        <div className="image-container" style={{marginTop: '20px', marginBottom: '-6px'}}>
                                <img 
                                    alt="iphone" 
                                    width="100%" 
                                    src={require('../../../images/iphone.jpg')} 
                                />
                                <a
                                    className="image-credit" 
                                    href="https://unsplash.com/@williamtm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> 
                                    William Hook
                                </a>
                            </div>
                        <div className="mobile-content-margin">
                            <DesignPhase />
                        </div>
                    </div>
                </div>
                <Footer />
                <ScrollUpMobile />
            </div>
        );
    }
}

export default MobileContent;
