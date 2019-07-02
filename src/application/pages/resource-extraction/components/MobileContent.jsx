import React from "react";
/* Mobile menu */
import Mobile from "../../../menus/mobile/Mobile";
/* Header and footer for mobile devices */
import MobileHeader from "../../components/MobileHeader";
import MobileFooter from "../../components/MobileFooter";
/* Impacts */
import Environmental from "../../impacts/Environmental";
import Social from "../../impacts/Social";

class MobileContent extends React.Component {
    constructor() {
        super();
        this.state = {
            /* decides which impact category to be shown */
            default: true,
            environmental: false,
            social: false,
            resourceExtractionColor: '#00AD00'
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
        const pageHeader = "Resource extraction";
        /* To get impacts that corresponds with design phase */
        let fromPage = "resourceExtraction";
        let content;

        if(this.state.default) {
            content = (
                <div>
                    <div style={{color: this.state.resourceExtractionColor}} className="page-title"> 
                        The resource extraction phase 
                    </div> 
                    <div className="page-introduction-text">
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
                    </div>
                    <p style={{height: '30px'}}></p>
                    <div style={{marginTop: '-15px', marginBottom: '-6px'}} className="selected-info"> 
                        Select an impact category
                    </div>
                    <div style={{fontFamilty: 'Avenir Next', textAlign: 'center'}}>
                        <button className="commonButtonStyle environmentalButton" onClick={this.handleEnvironmentalClicked} style={{borderColor: this.state.resourceExtractionColor, color: this.state.resourceExtractionColor}}>
                            Environmental
                        </button>
                        <button className="commonButtonStyle socialButton" onClick={this.handleSocialClicked} style={{borderColor: this.state.resourceExtractionColor, color: this.state.resourceExtractionColor}}>
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
                    <button  className="commonButtonStyle environmentalButton" onClick={this.handleEnvironmentalClicked} style={{backgroundColor: this.state.resourceExtractionColor, borderColor: this.state.resourceExtractionColor, color: 'white'}}>
                        Environmental
                    </button>
                    <button className="commonButtonStyle socialButton" onClick={this.handleSocialClicked} style={{borderColor: this.state.resourceExtractionColor, color: this.state.resourceExtractionColor}}>
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
                    <button  className="commonButtonStyle environmentalButton" onClick={this.handleEnvironmentalClicked} style={{borderColor: this.state.resourceExtractionColor, color: this.state.resourceExtractionColor}}>
                        Environmental
                    </button>
                    <button className="commonButtonStyle socialButton" onClick={this.handleSocialClicked} style={{backgroundColor: this.state.resourceExtractionColor, borderColor: this.state.resourceExtractionColor, color: 'white'}}>
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
