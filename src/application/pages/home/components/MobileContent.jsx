import React from "react";
import Mobile from "../../../menus/mobile/Mobile";

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
              src={require("../../images/smart-logo-transparent.png")}
            />
            <div className="smart-text">SMART</div>
          </div>
        </a>
        <div className="mobileContent">
          <div className="top-txt">
            <h1>The mobile lifecycle</h1>
            <div className="purple-line" />
          </div>
          
          <div> <br/><br/><br/><br/> INSERT HOME CONTENT HERE </div>

          {/* Fiks footer som et eget komponent */}
          <div className="footer">
            <div className="social-network">
              <a href="https://www.facebook.com/UniOsloSMART/">
                <img
                  className="facebook"
                  alt="facebook logo"
                  src={require("../../images/social-network-logos/facebook-logo.png")}
                />
              </a>
              <a href="https://twitter.com/UniOsloSMART">
                <img
                  className="twitter"
                  alt="twitter logo"
                  src={require("../../images/social-network-logos/twitter-logo.png")}
                />
              </a>
              <a href="mailto:info@smart.uio.no">
                <img
                  className="gmail"
                  alt="gmail logo"
                  src={require("../../images/social-network-logos/gmail-logo.png")}
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
    );
  }
}

export default MobileContent;
