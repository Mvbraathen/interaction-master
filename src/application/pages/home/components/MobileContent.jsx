import React from "react";
/* Mobile menu */
import Mobile from "../../../menus/mobile/Mobile";
/* Header and footer for mobile devices */
import MobileHeader from "../../../components/mobile-header/MobileHeader";
import MobileFooter from "../../../components/mobile-footer/MobileFooter";
import MobilePhaseMenu from "../../../components/mobile-phase-menu/MobilePhaseMenu";
/* Fade effect */
import Fade from "react-reveal/Fade";
/* Scroll up */
import ScrollUp from "../../../components/scroll-up/ScrollUp";

class MobileContent extends React.Component {
    render() {

        /* To get correct page header text */
        const pageHeader = "The mobile lifecycle";

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
                                        Lifecycle of mobile phones
                                    </h1>
                                    <div>
                                        {/*<div className="image-container">
                                            <img alt="iphone" width="100%" src={require('../../../images/iphone.jpg')} />
                                            <div className="image-credit"> 
                                                <a href="https://unsplash.com/@williamtm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> 
                                                    William Hook
                                                </a>
                                            </div>
                                        </div>*/}
                                        <div className="info-positioning">
                                            This is a webpage made in collaboration with the SMART project, and presents 
                                            SMARTs research on the mobile lifecycle. To learn more about the different 
                                            phases in mobile lifecycle, click on the different impacts below or in the burger menu.
                                            <p></p>
                                        </div>
                                        <MobilePhaseMenu />
                                        <div className="info-positioning">
                                            <p></p>
                                            Mobile phones have become one of the more unsustainable consumer goods. 
                                            In 2015, more than 1.5 billion new mobile phones were shipped worldwide, 
                                            often replacing fully functional phones. 
                                            <p id="content"></p> 
                                            In the next five years, an additional one billion people are estimated 
                                            to become mobile phone subscribers. The smartphone adoption rate is 
                                            already at 60 per cent in the developed world and will lead smartphone 
                                            growth over the next five years as the average selling price of 
                                            smartphones continues to decline. This is estimated to add a further 2.9 
                                            billion smartphone connections by 2020.
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
                <MobileFooter />
                <ScrollUp />
            </div>
        );
    }
}

export default MobileContent;
