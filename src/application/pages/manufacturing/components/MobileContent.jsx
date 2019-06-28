import React from "react";
import Mobile from "../../../menus/mobile/Mobile";
import MobileFooter from "../../components/MobileFooter";
import MobileEnvironmental from "../../impacts/MobileEnvironmental";
import MobileSocial from "../../impacts/MobileSocial";

class MobileContent extends React.Component {
  constructor() {
    super();
    this.state = {
      environmental: true,
      social: false
    }

    this.handleEnvironmentalClicked = this.handleEnvironmentalClicked.bind(this);
    this.handleSocialClicked = this.handleSocialClicked.bind(this);
  }

  handleEnvironmentalClicked() {
    this.setState({
      environmental: true,
      social: false
    });
  }

  handleSocialClicked() {
    this.setState({
      social: true,
      environmental: false
    });
  }

  render() {

    let fromPage = "manufacturing";
    let content;

    if(this.state.environmental) {
      content = (
        <div>
          <div className="selected-info"> On this page you can learn more about <strong>environmental impacts</strong> within the manufacturing phase of the mobile lifecycle.</div>
          <div style={{width: '95%', marginLeft: '2.5%'}}>
            <MobileEnvironmental fromPage={fromPage} />
          </div>
          <div className="footer">
            <MobileFooter />
          </div>
        </div>
      )
    } 
    if(this.state.social) {
      content = (
        <div>
          <div className="selected-info"> On this page you can learn more about <strong>social impacts</strong> within the manufacturing phase of the mobile lifecycle.</div>
          <div style={{width: '95%', marginLeft: '2.5%'}}>
            <MobileSocial fromPage={fromPage} />
          </div>
          <div className="footer">
            <MobileFooter />
          </div>
        </div>
      )
    }
    return (
      <div className="mobilePage">
        <Mobile />
        <div className="mobileContent">
          <div className="mobile-header"> Manufacturing </div>
          <div className="impact-selection"> 
            <div className="select-environmental" onClick={this.handleEnvironmentalClicked}>
              Environmental
            </div>
            <div className="select-social" onClick={this.handleSocialClicked}>
              Social
            </div>
            {content}
          </div>


          {/* Fiks footer som et eget komponent */}
          
        </div>
      </div>
    );
  }
}

export default MobileContent;
