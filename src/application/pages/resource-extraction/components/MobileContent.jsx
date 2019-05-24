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
                    <div className="mobileContent">
                        <div className="top-txt">
                            <h1>
                                Resource Extraction
                            </h1>
                            <div className="purple-line"></div>  
                        </div>
                        <div className="page-one">
                            <h1 className="info-header"> Acidification </h1>
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
                                Is the shit
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
                                For real
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