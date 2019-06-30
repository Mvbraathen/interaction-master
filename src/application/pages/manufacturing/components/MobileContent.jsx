import React from "react";
import Mobile from "../../../menus/mobile/Mobile";
import MobileHeader from "../../components/MobileHeader";
import MobileFooter from "../../components/MobileFooter";
import Environmental from "../../impacts/Environmental";
import Social from "../../impacts/Social";

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

    const pageHeader = "Manufacturing";
    let fromPage = "manufacturing";
    let content;

    if(this.state.environmental) {
      content = (
        <div>
          <div className="selected-info"> On this page you can learn more about <strong>environmental impacts</strong> within the manufacturing phase of the mobile lifecycle.</div>
          <div style={{width: '95%', marginLeft: '2.5%'}}>
            <Environmental fromPage={fromPage} />
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
            <Social fromPage={fromPage} />
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
          <MobileHeader pageHeader={pageHeader} />
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
