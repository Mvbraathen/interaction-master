import React from "react";
/* Mobile menu */
import Mobile from "../../../menus/mobile/Mobile";
/* Header and footer for mobile devices */
import MobileHeader from "../../../components/mobile-header/MobileHeader";
import Footer from "../../../components/footer/Footer";
/* Text */
import DesignPhase from "../../../components/text/DesignPhase";
/* Fade effect */
import Fade from "react-reveal/Fade";
/* Scroll up */
import ScrollUpMobile from "../../../components/scroll-up/ScrollUpMobile";

class MobileContent extends React.Component {

    render() {

        /* To get correct page header text */
        const pageHeader = "Design";

        return (
            <div>
                <Mobile />
                <div className="mobile-page">        
                    <div style={{marginTop: '70px'}} className="mobile-content">
                        <MobileHeader pageHeader={pageHeader} />
                        <div className="mobile-impacts-width">
                            <Fade duration={1000}>
                                <div className="info-box">
                                    <h1 className="info-header"> 
                                        Where all decisions are made
                                    </h1>
                                    <div>
                                        <div className="image-container">
                                            <img alt="broken iphone" width="100%" src={require('../../../images/broken-iphone.jpg')} />
                                            <a 
                                                className="image-credit"
                                                href="https://unsplash.com/@_actually_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> 
                                                Ali Abdul Rahman
                                            </a>
                                        </div>
                                        <div className="info-positioning">
                                            <DesignPhase />
                                        </div>
                                    </div>
                                </div>
                            </Fade>
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
