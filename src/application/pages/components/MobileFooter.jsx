import React from 'react';
import './MobileFooter.css';

class MobileFooter extends React.Component {
	render() {
        return (
            <div>
                <div style={{height: '10px'}}> </div>
                <div className="footer">
        			<div className="footer-info">
                        <div className="social-network">
                            <a href="https://www.facebook.com/UniOsloSMART/">
                                <img
                                    className="facebook"
                                    alt="facebook logo"
                                    src={require("../images/social-network-logos/facebook-logo.png")}
                                />
                            </a>
                            <a href="https://twitter.com/UniOsloSMART">
                                <img
                                    className="twitter"
                                    alt="twitter logo"
                                    src={require("../images/social-network-logos/twitter-logo.png")}
                                />
                            </a>
                            <a href="mailto:info@smart.uio.no">
                                <img
                                    className="gmail"
                                    alt="gmail logo"
                                    src={require("../images/social-network-logos/gmail-logo.png")}
                                />
                            </a>
                        </div>
                        <div className="smart-footer-txt">
                            SMART has received funding from the European Union’s Horizon
                            2020 research and innovation programme under grant agreement No
                            693642. The contents of this website are the sole responsibility
                            of the SMART project and do not necessarily reflect the views of
                            the European Union. 
                            <p></p>
                            For more information about the SMART project, please visit: <a style={{color: 'white'}} href="http://smart.uio.no"> http://smart.uio.no </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MobileFooter;