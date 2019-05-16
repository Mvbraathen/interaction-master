import React from 'react';
import {
    NavLink
} from "react-router-dom";
import Desktop from "../../../menus/desktop/Desktop";
import "./DesktopContent.css";

class DesktopContent extends React.Component {
    render() {
        return (
            <div id="home-page">
                <div className="desktop-header">
                    <div className="home-header-txt">
                        <NavLink className="header-link" to="/home"><h1>
                            The Mobile Lifecycle
                        </h1></NavLink>
                    </div>
                </div>
                <div className="split left-half">
                    <Desktop />
                </div>
                <div className="split right-half">
                    <div className="hehe-container">
                        <div className="hehe"> 
                            Ahoy, pirate 🏴‍☠️! If you want 
                            to learn more about the 
                            {' '} 
                            <div className="color-some-text">
                                Mobile Lifecycle
                            </div>
                            , please interact with the circular menu 😁 
                        </div>
                    </div>
                </div>
                <div className="desktop-footer">
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
                                <div className="desktop-footer-txt">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                                        eu fugiat nulla pariatur.
                                </div>
                            </div>
                </div>
            </div>
        )
    }
}

export default DesktopContent;