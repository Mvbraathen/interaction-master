import React from 'react';
import Mobile from "../../../menus/mobile/Mobile";
import {
    NavLink
} from "react-router-dom";

class MobileContent extends React.Component {

	render() {
		return (
			<div className="mobilePage">
                    <Mobile />

                    <a href="https://www.smart.uio.no">
                        <div className="bookmark">
                            <img
                                className="smart-logo"
                                alt="SMART"
                                src={require('../../images/smart-logo-transparent.png')} 
                            />    
                            <div className="smart-text"> 
                                SMART 
                            </div>
                        </div>
                    </a>
                    <div className="mobileContent">
                        <div className="top-txt">
                            <h1>
                                Design
                            </h1>
                            <div className="purple-line"></div> 
                        </div>
                        <div className="page-one">
                            <h1 className="info-header"> Acidification </h1>
                            <figure className="img-item">
                                <svg viewBox="65 100 80 80" width="100%" height="300px">
                                    <path className="design-icon-mobile" d="M128.7,108.1l-4.8,3.6l-4.8,11.2h-3.9l-1.5-3.3h1c1.8,0,3.3-1.5,3.3-3.3V113h1.6v-4.9h-4.9
                                    v4.9h1.6v3.3c0,0.9-0.7,1.6-1.6,1.6H113l-2.1-4.5l2.5-1.3l-8.2-3.5l-1.9,6.8c-0.1-4-3.3-7.3-7.4-7.3s-7.4,3.3-7.4,7.4
                                    c0,2.5,1.2,4.8,3.3,6.1v1.2h-2l-0.1,0.7c-0.4,2.1-0.4,4.2-0.1,6.3l-5.6,10l6.2,1.4v10.3h8.2v7.4H118v-11.4c5.7-4.1,9-10.6,9-17.6
                                    v-3c0-1.1-0.1-2.3-0.3-3.4l-0.1-0.7H125l3.7-8.8V108.1L128.7,108.1z M116.4,111.4v-1.6h1.6v1.6H116.4z M113.4,122.9h-3.1l-1.5-3.3
                                    h3.1L113.4,122.9z M106.2,110.9l3.3,1.4l-0.8,0.4l2.4,5.3H108l-2-4.4l-0.7,0.4L106.2,110.9z M108.5,122.9h-3.6v-1.6
                                    c0-0.9,0.7-1.7,1.6-1.7h0.5l0,0L108.5,122.9z M105.3,115.8l1,2.2c-1.7,0.1-3.1,1.5-3.1,3.3v1.6H100v-1.2c1.6-1.1,2.8-2.8,3.1-4.7
                                    L105.3,115.8z M90.1,115.5c0-3.2,2.6-5.7,5.7-5.7c3.2,0,5.7,2.6,5.7,5.7c0,2-1.1,3.9-2.9,5l-0.4,0.2v2.2h-1.6v-5.1
                                    c1-0.3,1.6-1.2,1.6-2.3c0-1.4-1.1-2.5-2.5-2.5s-2.5,1.1-2.5,2.5c0,1.1,0.7,2,1.6,2.3v5.1h-1.6v-2.2l-0.4-0.2
                                    C91.2,119.4,90.1,117.5,90.1,115.5z M95.9,116.3c-0.5,0-0.8-0.4-0.8-0.8c0-0.5,0.4-0.8,0.8-0.8c0.5,0,0.8,0.4,0.8,0.8
                                    S96.3,116.3,95.9,116.3z M125.2,124.5c0.1,0.8,0.2,1.7,0.2,2.5v3c0,6.6-3.2,12.7-8.7,16.5l-0.4,0.2v10.6H100v-7.4h-8.2v-10
                                    l-5.3-1.2l4.8-8.6v-0.3c-0.3-1.8-0.3-3.7-0.1-5.4h0.6h8.2L125.2,124.5L125.2,124.5z M123.2,122.9h-2.3l4.1-9.5l1.8,0.9L123.2,122.9
                                    z M127,112.5l-0.9-0.5l0.9-0.7V112.5z M97.5,129.4c-1.4,0-2.5-0.8-2.5-2.5h-1.6c0,2.5,1.8,4.1,4.1,4.1s4.1-1.6,4.1-4.1H100
                                    C100,128.6,98.9,129.4,97.5,129.4z"/> 
                                </svg>
                                
                                <figcaption className="txt-child-under-svg">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                                    in culpa qui officia deserunt mollit anim id est laborum.
                                </figcaption>
                                <NavLink to="/use/lifetime">
                                    <button className="page-one-button"> Read more </button>
                                </NavLink>
                            </figure>
                        </div>

                        <div className="top-txt2">
                            <h1>
                                This is a header
                            </h1>
                            <div className="purple-line"></div> 
                        </div>
                         <div className="page-two">
                            <h1 className="info-header"> CO2 emissions </h1>
                            <figure className="img-item">
                                <img
                                    className="img-tst"
                                    alt="A road "
                                    src={require('../../images/smart-test-image.jpg')} 
                                    />
                                    <figcaption className="txt-child">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                                        in culpa qui officia deserunt mollit anim id est laborum.
                                </figcaption>
                                <NavLink to="/use/lifetime">
                                    <button className="page-one-button"> Read more </button>
                                </NavLink>
                            </figure>
                        </div>

                        <div className="top-txt2">
                            <h1>
                                Another header
                            </h1>
                            <div className="purple-line"></div> 
                        </div>
                        <div className="page-three">

                            <h1 className="info-header"> Particulate matter </h1>
                            <figure className="img-item">
                                <img
                                    className="img-tst"
                                    alt="A road "
                                    src={require('../../images/smart-test-image.jpg')} 
                                    />
                                    <figcaption className="txt-child">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                                        in culpa qui officia deserunt mollit anim id est laborum.
                                </figcaption>
                                <NavLink to="/use/lifetime">
                                    <button className="page-one-button"> Read more </button>
                                </NavLink>
                            </figure>
                        </div>


                        {/* Fiks footer som et eget komponent */}
                        <div className="footer"> 
                            <div className="footer-info">
                                <div className="social-network">
                                    <a href="https://www.facebook.com/UniOsloSMART/">
                                        <img
                                            className="facebook"
                                            alt="facebook logo"
                                            src={require('../../images/social-network-logos/facebook-logo.png')} 
                                        />
                                    </a>
                                    <a href="https://twitter.com/UniOsloSMART">
                                        <img
                                            className="twitter"
                                            alt="twitter logo"
                                            src={require('../../images/social-network-logos/twitter-logo.png')} 
                                        />
                                    </a>
                                    <a href="mailto:info@smart.uio.no">
                                        <img
                                            className="gmail"
                                            alt="gmail logo"
                                            src={require('../../images/social-network-logos/gmail-logo.png')} 
                                        />
                                    </a>
                                </div>
                                <div className="smart-footer-txt">
                                    SMART has received funding from the European Union’s Horizon 2020 
                                    research and innovation programme under grant agreement No 693642. 
                                    The contents of this website are the sole responsibility of the 
                                    SMART project and do not necessarily reflect the views of the 
                                    European Union.
                                </div>
                            </div>
                            
                        </div>
                    </div>
            </div>
		)
	}
}

export default MobileContent;