import React from 'react';
import { NavLink } from "react-router-dom";
/* Header and footer for mobile devices */
import DesktopHeader from "../../../components/header/desktop-header/DesktopHeader";
import Footer from "../../../components/footer/Footer";
import ScrollToMain from "../../../components/scroll-to-main/ScrollToMain";
/* Scroll up */
import ScrollUpDesktop from "../../../components/scroll-up/desktop-scroll-up/ScrollUpDesktop";

class DesktopContent extends React.Component {

    /* Scrolls to top when page loads */
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {
        return (
            <div>
            	<div className="mobile-page">
                    <ScrollToMain />
                    <DesktopHeader />
                    <div className="mobile-content">
                     	<h1 id="main-content" style={{marginTop: '100px', backgroundColor: 'lightblue', padding: '40px'}}> Page not found </h1>
                     	<p style={{padding: '20px 20px 10px 100px', maxWidth: '500px'}}>
                     		We can't seem to find the page you're looking for. 
							It might have been removed, had its name changed, 
							or is temporarily unavailable. Please try one of the following steps to find the page you were looking for:
                     	</p>
                     	<ol style={{padding: '10px 20px 10px 120px', maxWidth: '500px'}}>
                     		<li>If you entered the URL manually, please make sure it is correct.</li>
                     		<li>If you are looking for information on the mobile phone lifecycle 
	                     		phases, please start on the {' '}
	                     		<NavLink className="inline-link-style" title="link to home page" to="/home">
	                                Home page
	                            </NavLink>,
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
                <ScrollUpDesktop />
			</div>
        )
    }
}

export default DesktopContent;