import React from "react";
/* Mobile menu */
import Mobile from "../../../menus/mobile/Mobile";
/* Header and footer for mobile devices */
import MobileHeader from "../../../components/mobile-header/MobileHeader";
import MobileFooter from "../../../components/mobile-footer/MobileFooter";
/* Impacts */
import Environmental from "../../../components/impacts/Environmental";
import Social from "../../../components/impacts/Social";

class MobileContent extends React.Component {
    constructor() {
        super();
        this.state = {
            /* decides which impact category to be shown */
            default: true,
            environmental: false,
            social: false,
            manufacturingColor: '#BD2EC2'
        }
        this.handleDefaultClicked = this.handleDefaultClicked.bind(this);
        this.handleEnvironmentalClicked = this.handleEnvironmentalClicked.bind(this);
        this.handleSocialClicked = this.handleSocialClicked.bind(this);
    }

    handleDefaultClicked() {
        this.setState({
            default: true,
            environmental: false,
            social: false
        });
    }

    handleEnvironmentalClicked() {
        this.setState({
            default: false,
            environmental: true,
            social: false
        });
    }

    handleSocialClicked() {
        this.setState({
            default: false,
            environmental: false,
            social: true
        });
    }

    render() {

        /* To get correct page header text */
        const pageHeader = "Manufacturing";
        /* To get impacts that corresponds with design phase */
        let fromPage = "manufacturing";
        let content;

        if(this.state.default) {
            content = (
                <div>
                    <div style={{color: this.state.manufacturingColor}} className="page-title"> 
                        The manufacturing phase 
                    </div> 
                    <div className="page-introduction-text">
                        Manufacturing is the phase in which the different components of the mobile 
                        phone are produced and put together to become the finished product. The 
                        main components of a mobile phone are the circuit board (PCB), battery, 
                        LCD screen, antenna, microphone, speaker, camera(s), and shell. Each of 
                        these large components consists of several smaller components.
                        <p></p>
                        Manufacturing takes place in factories, with the largest factory, in Shenzen, 
                        China, housing up to 450.000 workers.
                    </div>
                    <p style={{height: '30px'}}></p>
                    <div style={{marginTop: '-15px', marginBottom: '-6px'}} className="selected-info"> 
                        Select an impact category
                    </div>
                    <div style={{fontFamilty: 'Avenir Next', textAlign: 'center'}}>
                        <button className="commonButtonStyle environmentalButton" onClick={this.handleEnvironmentalClicked} style={{borderColor: this.state.manufacturingColor, color: this.state.manufacturingColor}}>
                            Environmental
                        </button>
                        <button className="commonButtonStyle socialButton" onClick={this.handleSocialClicked} style={{borderColor: this.state.manufacturingColor, color: this.state.manufacturingColor}}>
                            Social
                        </button>
                    </div>
                </div>
            )
        } 

        if(this.state.environmental) {
            content = (
                <div>
                    <div style={{height: '60px'}}></div>
                    <button className="defaultButton" onClick={this.handleDefaultClicked}> 
                        <span>&crarr;</span>Back 
                    </button>
                    <button  className="commonButtonStyle environmentalButton" onClick={this.handleEnvironmentalClicked} style={{backgroundColor: this.state.manufacturingColor, borderColor: this.state.manufacturingColor, color: 'white'}}>
                        Environmental
                    </button>
                    <button className="commonButtonStyle socialButton" onClick={this.handleSocialClicked} style={{borderColor: this.state.manufacturingColor, color: this.state.manufacturingColor}}>
                        Social
                    </button>
                    <div style={{marginTop: '10px'}} className="selected-info"> 
                        Environmental impacts
                    </div>
                    <div className="mobile-impacts-width">
                        <Environmental fromPage={fromPage} />
                    </div>
                </div>
            )
        }

        if(this.state.social) {
            content = (
                <div>
                    <div style={{height: '60px'}}></div>
                    <button className="defaultButton" onClick={this.handleDefaultClicked}> 
                        <span>&crarr;</span>Back 
                    </button>
                    <button  className="commonButtonStyle environmentalButton" onClick={this.handleEnvironmentalClicked} style={{borderColor: this.state.manufacturingColor, color: this.state.manufacturingColor}}>
                        Environmental
                    </button>
                    <button className="commonButtonStyle socialButton" onClick={this.handleSocialClicked} style={{backgroundColor: this.state.manufacturingColor, borderColor: this.state.manufacturingColor, color: 'white'}}>
                        Social
                    </button>
                    <div style={{marginTop: '10px'}} className="selected-info"> 
                        Social impacts
                    </div>
                    <div className="mobile-impacts-width">
                        <Social fromPage={fromPage} />
                    </div>
                </div>
            )
        }
        
        return (
            <div>
                <Mobile />
                <div className="mobilePage">
                    
                    <div className="mobileContent">
                        <MobileHeader pageHeader={pageHeader} />
                        {content}
                    </div>
                </div>
                <MobileFooter />
            </div>
        );
    }
}

export default MobileContent;
