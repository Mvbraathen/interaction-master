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
                     	<h1 id="main-content" style={{marginTop: '100px', backgroundColor: 'lightpink', padding: '40px'}}> Page not found </h1>
                     	<p style={{padding: '20px 20px 10px 20px', maxWidth: '500px'}}>
                     		We can't seem to find the page you're looking for. 
							It might have been removed, had its name changed, 
							or is temporarily unavailable. Please try one of the following steps to find the page you were looking for:
                     	</p>
                     	<ol style={{padding: '10px 20px 10px 40px', maxWidth: '500px'}}>
                     		<li>If you entered the URL manually, please make sure it is correct.</li>
                     		<li>If you are looking for information on the mobile phone lifecycle 
	                     		phases, please start on the {' '}
	                     		<NavLink className="inline-link-style" title="link to home page" to="/home">
	                                Home page
	                            </NavLink>.
                                {' '} 
                                or
                                {' '} 
                                <NavLink className="inline-link-style" title="link to site map" to="/sitemap">
                                    Site map.
                                </NavLink>
                     		</li>
                     		<li>If you are looking for the SMART project's website, please visit <a title="link to SMARTs website" className="inline-link-style" href="http://smart.uio.no">SMART website</a>.</li>
                     	</ol>
                     </div>
                </div>
                <Footer />
                <ScrollUpMobile />
			</div>
        )
    }
}

export default MobileContent;