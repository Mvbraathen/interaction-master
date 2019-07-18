import React from "react";
// Various components
import Desktop from "../../../menus/desktop/Desktop";
import DesktopHeader from "../../../components/desktop-header/DesktopHeader";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import MobileFooter from "../../../components/mobile-footer/MobileFooter";
import ScrollUp from "../../../components/scroll-up/ScrollUp";

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
                            style={{fontSize: '1.7em', marginTop: '-55px'}} 
                            className="default-content-text">
                            <h2 className="home-special-header"> 
                                The mobile phone lifecycle
                            </h2>

                            <div style={{marginTop: '-40px', backgroundColor: 'rgba(255,0,255,0.1)', padding: '5px 20px 5px 20px', fontSize: '1em'}}>
                                <h3> Social and Environmental Impacts in the Mobile Phone Lifecycle </h3>
                                <p>This website enables you to explore the impacts of the mobile phone lifecycle on
                                social and environmental sustainability.</p> 

                                <p><strong>Social sustainability</strong> is about the
                                minimum standards of living conditions and human rights below which people
                                can be said to be living in deprivation. The twelve dimensions of the social
                                foundation are derived from internationally agreed minimum social standards,
                                as identified by the world’s governments in the Sustainable Development Goals
                                in 2015. The twelve social dimensions are food, health, education, income &amp;
                                work, water &amp; sanitation, energy, gender equality, social equity, housing, political
                                voice, peace &amp; justice, and networks.</p>
                                <p><strong>Environmental sustainability</strong> refers here to the non-negotiable planetary
                                preconditions that humanity needs to respect in order to avoid the risk of
                                deleterious or even catastrophic environmental change. The nine boundaries are
                                climate change, novel entities, ozone depletion, aerosol loading, ocean
                                acidification, biochemical flows, freshwater use, land-system change, and
                                biosphere integrity.</p>

                                <p>In order to learn more about these impacts in the different lifecycle phases,
                                interact with the circular menu on the left.</p>
                            </div>
                        </div>

                        <div>
                      </div>
                    </div>
                    <MobileFooter />
                    <ScrollUp />
                </div>
            </div>

        );
    }
}

export default DesktopContent;
