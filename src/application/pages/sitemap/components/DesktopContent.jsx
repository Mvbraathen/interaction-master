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
                     	<h1 id="main-content" style={{marginTop: '100px', backgroundColor: 'lightblue', padding: '40px'}}> Site map </h1>
                        <p style={{padding: '20px 20px 10px 100px', maxWidth: '500px'}}>
                            In the list below you will find links to every page on this website.
                        </p>
                        <h2 style={{padding: '0px 20px 0px 100px'}}> Content </h2>
                     	<ul style={{padding: '10px 20px 10px 120px', maxWidth: '500px'}}>
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
                <ScrollUpDesktop />
			</div>
        )
    }
}

export default DesktopContent;