import React from 'react';
import { NavLink } from "react-router-dom";
/* Mobile menu */
import Mobile from "../../../menus/mobile/Mobile";
/* Header and footer for mobile devices */
import MobileHeader from "../../../components/header/mobile-header/MobileHeader";
import Footer from "../../../components/footer/Footer";
/* Jump to main content */ 
import ScrollToMain from "../../../components/scroll-to-main/ScrollToMain";
/* Scroll up */
import ScrollUpMobile from "../../../components/scroll-up/mobile-scroll-up/ScrollUpMobile";

class MobileContent extends React.Component {
    render() {
        return (
            <div>
                <ScrollToMain />
            	<Mobile />
            	<div className="mobile-page">
                     <MobileHeader />
                     <div className="mobile-content">
                     	<h1 id="main-content" style={{marginTop: '100px', backgroundColor: 'lightpink', padding: '40px'}}> Sitemap </h1>
                     	<p style={{padding: '20px 20px 10px 20px', maxWidth: '500px'}}>
                     		In the list below you will find links to every page on this website.
                     	</p>
                        <h2 style={{padding: '10px 20px 10px 20px'}}> Sitemap </h2>
                     	<ul style={{padding: '10px 20px 10px 40px', maxWidth: '500px'}}>
                     		<li>
                                <NavLink title="link to home page" to="/home">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink title="link to design page" to="/design">
                                    Design
                                </NavLink>
                            </li>
                            <li>
                                <NavLink title="link to resource extraction page" to="/resource-extraction">
                                    Resource extraction
                                </NavLink>
                            </li>
                            <li>
                                <NavLink title="link to manufacturing page" to="/manufacturing">
                                    Manufacturing
                                </NavLink>
                            </li>
                            <li>
                                <NavLink title="link to transport page" to="/transport">
                                    Transport
                                </NavLink>
                            </li>
                            <li>
                                <NavLink title="link to use page" to="/use">
                                    Use
                                </NavLink>
                            </li>
                            <li>
                                <NavLink title="link to end of life page" to="/end-of-life">
                                    End of life
                                </NavLink>
                            </li>
                     	</ul>
                     </div>
                </div>
                <Footer />
                <ScrollUpMobile />
			</div>
        )
    }
}

export default MobileContent;