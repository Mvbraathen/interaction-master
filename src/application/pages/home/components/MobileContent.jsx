import React from "react";
import { NavLink } from "react-router-dom";
/* Mobile menu */
import Mobile from "../../../menus/mobile/Mobile";
/* Header and footer for mobile devices */
import MobileHeader from "../../../components/mobile-header/MobileHeader";
import Footer from "../../../components/footer/Footer";
/* Text */
import HomeText from "../../../components/text/HomeText";
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
        const pageHeader = "The mobile phone lifecycle";
        const fromDevice = "mobile";

        return (
            <div>
                <ScrollToMain />
                <Mobile />
                <div className="mobile-page">        
                    <div style={{marginTop: '60px'}} className="mobile-content">
                        <MobileHeader pageHeader={pageHeader} />
                        <div className="mobile-impacts-width">
    
                                    <div className="default-content-text">
                                        <h1
                                            className="h1-default-style"
                                            style={{
                                                color: 'black'
                                            }}> 
                                            The mobile phone lifecycle
                                        </h1>

                                        <div style={{paddingLeft: '10px', paddingRight: '10px', backgroundColor: 'rgb(248,248,248)'}}>
                                            <HomeText fromDevice={fromDevice} />
                                        </div>
                                        <div style={{padding: '0px 10px 10px 10px'}}>
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
                    </div>
                </div>
                <Footer />
                <ScrollUpMobile />
            </div>
        );
    }
}

export default MobileContent;
