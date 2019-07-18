import React from "react";
import { NavLink } from "react-router-dom";
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
                            style={{marginTop: '-55px'}} 
                            className="default-content-text">
                            <h2 className="home-special-header"> 
                                The mobile phone lifecycle
                            </h2>

                            <div style={{marginTop: '-40px', backgroundColor: 'rgba(255,0,255,0.1)', padding: '5px 20px 5px 20px', fontSize: '1em'}}>
                                <HomeText />
                                <div style={{padding: '0px 0px 20px 00px'}}>
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
