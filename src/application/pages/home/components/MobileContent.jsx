import React from "react";
import { NavLink } from "react-router-dom";
/* Mobile menu */
import Mobile from "../../../menus/mobile/Mobile";
/* Header and footer for mobile devices */
import MobileHeader from "../../../components/mobile-header/MobileHeader";
import Footer from "../../../components/footer/Footer";
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
                                interact with the menu in the top left corner, or click on a lifecycle phase under.</p>
                            </div>
                            <div style={{padding: '5px 10px 5px 10px'}}>
                                <h4 style={{marginBottom: '5px'}}>Lifecycle phases;</h4>
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

                        <div>
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
