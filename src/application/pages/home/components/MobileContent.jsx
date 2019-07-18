import React from "react";
import { NavLink } from "react-router-dom";
/* Mobile menu */
import Mobile from "../../../menus/mobile/Mobile";
/* Header and footer for mobile devices */
import MobileHeader from "../../../components/mobile-header/MobileHeader";
import Footer from "../../../components/footer/Footer";
/* Text */
import HomeText from "../../../components/text/HomeText";
/* Fade effect */
import Fade from "react-reveal/Fade";
/* Scroll up */
import ScrollUpMobile from "../../../components/scroll-up/ScrollUpMobile";

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
                                    <h1 
                                        className="desktop-page-title" 
                                        style={{color: '#33333'}}> 
                                        <a 
                                            href="http://smart.uio.no" 
                                            className="home-smart">
                                            SMART
                                        </a>
                                        research
                                    </h1>
                                    <div  
                                        className="default-content-text">
                                        <h2 style={{fontSize: '2.5em', paddingLeft: '10px', paddingRight: '10px'}}> 
                                            The mobile phone lifecycle
                                        </h2>

                                        <div style={{backgroundColor: 'rgba(255,0,255,0.1)', padding: '5px 10px 5px 10px'}}>
                                            <HomeText />
                                        </div>
                                        <div style={{padding: '5px 10px 5px 10px'}}>
                                            <h4 style={{marginBottom: '5px'}}>Lifecycle phases</h4>
                                            <NavLink className="inline-link-style" title="link to design page" to="/design">
                                                Design
                                            </NavLink>
                                            {' | '}
                                            <NavLink className="inline-link-style" title="link to resource extraction page" to="/resource-extraction">
                                                Resource extraction
                                            </NavLink>
                                            {' | '}
                                            <NavLink className="inline-link-style" title="link to manufacturing page" to="/manufacturing">
                                                Manufacturing
                                            </NavLink>
                                            {' | '}
                                            <NavLink className="inline-link-style" title="link to transport page" to="/transport">
                                                Transport
                                            </NavLink>
                                            {' | '}
                                            <NavLink className="inline-link-style" title="link to use page" to="/use">
                                                Use
                                            </NavLink>
                                            {' | '}
                                            <NavLink className="inline-link-style"   title="link to end of life page" to="/end-of-life">
                                                End of life
                                            </NavLink>
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
