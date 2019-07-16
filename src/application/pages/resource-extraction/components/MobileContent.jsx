import React from "react";
/* Mobile menu */
import Mobile from "../../../menus/mobile/Mobile";
/* Header and footer for mobile devices */
import MobileHeader from "../../../components/mobile-header/MobileHeader";
import MobileFooter from "../../../components/mobile-footer/MobileFooter";
/* Impacts */
import Environmental from "../../../components/impacts/Environmental";
import Social from "../../../components/impacts/Social";
/* Scroll up */
import ScrollUp from "../../../components/scroll-up/ScrollUp";

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

                    <div style={{position: 'relative',width: '100%', height: '60px', backgroundColor: '#333333', marginTop: '60px'}}>
                        
                        <button onClick={this.handleEnvironmentalClicked} style={{left: '0', height: '50px', width: '37.5%', marginLeft: '2.5%', backgroundColor: '#333333', zIndex: '99', position: 'absolute', border: '2px solid white', color: 'white', boxSizing: 'border-box', fontSize: '4vw', cursor: 'pointer'}}> Environmental </button>
                        
                        <button onClick={this.handleDefaultClicked} style={{ left: '0', height: '50px', width: '20%', backgroundColor: 'white', zIndex: '99', marginLeft: '40%',  position: 'absolute', color: '#333333', borderTop: '2px solid white', borderBottom: '2px solid white', boxSizing: 'border-box', cursor: 'pointer'}}> <img 
                                alt="resource extraction icon" 
                                style={{maxHeight: '40px', marginTop: '3px'}} 
                                src={require('../../../images/resource-extraction-icon.svg')} 
                            /> 
                        </button>
                        
                        <button onClick={this.handleSocialClicked} style={{left: '0', height: '50px', width: '37.5%', backgroundColor: '#333333', zIndex: '99', marginLeft: '60%', position: 'absolute', border: '2px solid white', color: 'white', boxSizing: 'border-box', fontSize: '4vw', cursor: 'pointer'}}> Social </button>
                    
                    </div>

                    <div className="mobile-page-title" style={{color: this.state.resourceExtractionColor}}> 
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
                    
                </div>
            )
        } 

        if(this.state.environmental) {
            content = (
                <div>
                    <div style={{position: 'relative',width: '100%', height: '60px', backgroundColor: '#333333', marginTop: '60px'}}>
                        
                        <button onClick={this.handleEnvironmentalClicked} style={{left: '0', height: '50px', width: '37.5%', marginLeft: '2.5%', backgroundColor: 'white', zIndex: '99', position: 'absolute', border: '2px solid white', color: '#333333', boxSizing: 'border-box', fontSize: '4vw', cursor: 'pointer'}}> Environmental </button>
                        
                        <button onClick={this.handleDefaultClicked} style={{ left: '0', height: '50px', width: '20%', backgroundColor: '#333333', zIndex: '99', marginLeft: '40%',  position: 'absolute', color: 'white', borderTop: '2px solid white', borderBottom: '2px solid white', boxSizing: 'border-box', cursor: 'pointer'}}> <img 
                                alt="resource extraction icon" 
                                style={{maxHeight: '40px', marginTop: '3px'}} 
                                src={require('../../../images/resource-extraction-icon-white.svg')} 
                            /> 
                        </button>
                        
                        <button onClick={this.handleSocialClicked} style={{left: '0', height: '50px', width: '37.5%', backgroundColor: '#333333', zIndex: '99', marginLeft: '60%', position: 'absolute', border: '2px solid white', color: 'white', boxSizing: 'border-box', fontSize: '4vw', cursor: 'pointer'}}> Social </button>
                    
                    </div>
                    <div className="selected-impact"> 
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
                    <div style={{position: 'relative',width: '100%', height: '60px', backgroundColor: '#333333', marginTop: '60px'}}>
                        
                        <button onClick={this.handleEnvironmentalClicked} style={{left: '0', height: '50px', width: '37%', marginLeft: '2.5%', backgroundColor: '#333333', zIndex: '99', position: 'absolute', border: '2px solid white', color: 'white', boxSizing: 'border-box', fontSize: '4vw', cursor: 'pointer'}}> Environmental </button>
                        
                        <button onClick={this.handleDefaultClicked} style={{ left: '0', height: '50px', width: '20%', backgroundColor: '#333333', zIndex: '99', marginLeft: '40%',  position: 'absolute', color: '#333333', border: '2px solid white', boxSizing: 'border-box', cursor: 'pointer'}}> <img 
                                alt="resource extraction icon" 
                                style={{maxHeight: '40px', marginTop: '3px'}} 
                                src={require('../../../images/resource-extraction-icon-white.svg')} 
                            /> 
                        </button>
                        
                        <button onClick={this.handleSocialClicked} style={{left: '0', height: '50px', width: '37%', backgroundColor: 'white', zIndex: '99', marginLeft: '60.5%', position: 'absolute', border: '2px solid white', color: '#333333', boxSizing: 'border-box', fontSize: '4vw', cursor: 'pointer'}}> Social </button>
                    
                    </div>
                    <div className="selected-impact"> 
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
                <div className="mobile-page">
                    <div className="mobile-content">
                        <MobileHeader pageHeader={pageHeader} />
                        {content}
                    </div>
                </div>
                <MobileFooter />
                <ScrollUp />
            </div>
        );
    }
}

export default MobileContent;
