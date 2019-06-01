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
                        <NavLink className="header-link" to="/home">
                            <div className="the">The</div> <div className="mobile">Mobile</div> <div className="lifecycle">Lifecycle</div>
                        </NavLink>
                    </div>
                    <a tabIndex="-1" href="https://www.smart.uio.no">
                        <div tabIndex="0" className="desktop-bookmark">
                            <div className="hidden-bookmark-text">
                                This website is made in collaboration with the EU Horizon 2020 funded <strong>SMART</strong> project. 
                            </div>
                            <img
                                className="desktop-smart-logo"
                                alt="SMART"
                                src={require('../../images/smart-logo-transparent.png')} 
                            />    
                            <div className="desktop-smart-text"> 
                                SMART 
                            </div>
                        </div>
                    </a>

                </div>
                <div className="split left-half">
                    <Desktop />
                </div>
                <div className="split right-half">
                    <div className="hehe-container">
                        <div className="introTxt"> 
                            Hey there! 
                            <span role="img" aria-label="waving hand"> 👋 </span> 
                            <br></br> If you want 
                            to learn more about the 
                            {' '} 
                            <div className="color-some-text">
                                Mobile Lifecycle
                            </div>
                            , please interact with the circular menu to your left. 
                        </div>
                    </div>
                </div> 
                
                 <div className="desktop-footer"> 
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
                                    SMART has received funding from the European Union’s Horizon 2020 
                                    research and innovation programme under grant agreement No 693642. 
                                    The contents of this website are the sole responsibility of the 
                                    SMART project and do not necessarily reflect the views of the 
                                    European Union.     
                                </div>  
                                <div>
                                    <a href="https://www.uio.no">
                                        <img
                                            className="uio"
                                            alt="uio logo"
                                            src={require('../../images/social-network-logos/uio-logo.png')} 
                                        />
                                    </a> 
                                </div>   
                            </div>
                        </div>
        )
    }
}

export default DesktopContent;