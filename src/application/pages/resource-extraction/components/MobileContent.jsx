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
      social: false,
      environmentalButtonColor: '#FC7307',
      socialButtonColor: '#707070',
      environmentalButtonTextColor: 'white',
      socialButtonTextColor: 'black',
    }

    this.handleEnvironmentalClicked = this.handleEnvironmentalClicked.bind(this);
    this.handleSocialClicked = this.handleSocialClicked.bind(this);
  }

  handleEnvironmentalClicked() {
    this.setState({
      environmental: true,
      social: false,
      environmentalButtonColor: '#FC7307',
      socialButtonColor: '#707070',
      environmentalButtonTextColor: 'white',
      socialButtonTextColor: 'black',
    });
  }

  handleSocialClicked() {
    this.setState({
      social: true,
      environmental: false,
      environmentalButtonColor: '#707070',
      socialButtonColor: '#FC7307',
      environmentalButtonTextColor: 'black',
      socialButtonTextColor: 'white',
    });
  }

  render() {

    const pageHeader = "Resource extraction";
    let fromPage = "resourceExtraction";
    let content;

    if(this.state.environmental) {
      content = (
        <div>
          <div className="selected-info"> <strong>Environmental impacts</strong></div>
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
          <div className="selected-info"> <strong>Social impacts</strong></div>
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
          <div style={{marginTop: '80px', fontSize: '2em', fontWeight: '500', marginLeft: '2.5%', marginRight: '2.5%'}}> The resource extraction phase </div> 
          <div style={{marginTop: '10px', marginBottom: '-40px', fontFamiliy: 'Avenir Next', marginLeft: '2.5%', marginRight: '2.5%', textAlign: 'justify', fontSize: '1em'}}>
            Resource extraction is the phase covering activities resulting in 
            materials that will be used in the manufacturing phase, such as 
            mineral extraction and the processing of minerals. For example, 
            the extraction and processing of oil to make plastics, the mining 
            and processing of cobalt and lithium to make batteries, and the 
            mining and processing of tungsten to make your mobile phone vibrate.
            <p></p>
            Artisanal mining takes place in many African countries. Some of the 
            minerals mined for mobile phones and other electronics, gold, tin, 
            tantalum, and tungsten, are considered conflict minerals. International 
            regulation (USA, EU) restricts the use of conflict minerals.
            <p></p>
          </div>
          <div style={{marginTop: '65px', marginBottom: '-25px', fontWeight: '600', marginLeft: '2.5%', marginRight: '2.5%'}}> Select the impact category you want to learn more about </div>
          <div className="impact-selection"> 
            <div style={{backgroundColor: this.state.environmentalButtonColor, color: this.state.environmentalButtonTextColor}} className="select-environmental" onClick={this.handleEnvironmentalClicked}>
              Environmental
            </div>
            <div style={{backgroundColor: this.state.socialButtonColor, color: this.state.socialButtonTextColor}}  className="select-social" onClick={this.handleSocialClicked}>
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
