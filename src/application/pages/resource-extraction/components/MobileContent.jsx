import React from "react";
/* Mobile menu */
import Mobile from "../../../menus/mobile/Mobile";
/* Header and footer for mobile devices */
import MobileHeader from "../../../components/mobile-header/MobileHeader";
import MobileFooter from "../../../components/mobile-footer/MobileFooter";
/* Impacts */
import Environmental from "../../../components/impacts/Environmental";
import Social from "../../../components/impacts/Social";
/* Scroll to top */
import ScrollUp from "../../../components/scroll-up/ScrollUp";
/* Scroll to main content */
import ScrollToMain from "../../../components/scroll-to-main/ScrollToMain";

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

    /* Scrolls to top when page loads */
    componentDidMount() {
        window.scrollTo(0, 0);
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
                    <div className="impact-selection-container">
                        <button 
                            className="environmental-selection" 
                            onClick={this.handleEnvironmentalClicked} 
                            style={{
                                backgroundColor: '#333333', 
                                color: 'white',
                                boxSizing: 'border-box'
                            }}> 
                            Environmental 
                        </button>

                        <button 
                            className="default-selection"
                            onClick={this.handleDefaultClicked} 
                            style={{
                                backgroundColor: this.state.resourceExtractionColor, 
                                boxSizing: 'border-box'
                            }}> 
                            <img 
                                alt="resource extraction icon" 
                                style={{maxHeight: '35px', marginTop: '3px'}} 
                                src={require('../../../images/resource-extraction-icon-white.svg')} 
                            /> 
                        </button>
            
                        <button 
                            className="social-selection"
                            onClick={this.handleSocialClicked} 
                            style={{
                                backgroundColor: '#333333', 
                                color: 'white',
                                boxSizing: 'border-box'}}> 
                            Social 
                        </button>
                    </div>

                    <h1 className="mobile-page-title" style={{color: this.state.resourceExtractionColor}}> 
                        The resource extraction phase 
                    </h1> 
                    <p className="page-introduction-text">
                        Resource extraction is the phase covering activities resulting in 
                        materials that will be used in the manufacturing phase, such as 
                        mineral extraction and the processing of minerals. For example, 
                        the extraction and processing of oil to make plastics, the mining 
                        and processing of cobalt and lithium to make batteries, and the 
                        mining and processing of tungsten to make your mobile phone vibrate.
                        <br/><br/>
                        Artisanal mining takes place in many African countries. Some of the 
                        minerals mined for mobile phones and other electronics, gold, tin, 
                        tantalum, and tungsten, are considered conflict minerals. International 
                        regulation (USA, EU) restricts the use of conflict minerals.
                    </p>
                    
                </div>
            )
        } 

        if(this.state.environmental) {
            content = (
                <div>
                    <div className="impact-selection-container">
                        <button 
                            className="environmental-selection" 
                            onClick={this.handleEnvironmentalClicked} 
                            style={{
                                backgroundColor: this.state.resourceExtractionColor, 
                                color: 'white',
                                boxSizing: 'border-box'
                            }}> 
                            Environmental 
                        </button>

                        <button 
                            className="default-selection"
                            onClick={this.handleDefaultClicked} 
                            style={{
                                backgroundColor: '#333333', 
                                color: 'white', 
                                boxSizing: 'border-box'
                            }}> 
                            <img 
                                alt="resource extraction icon" 
                                style={{maxHeight: '35px', marginTop: '3px'}} 
                                src={require('../../../images/resource-extraction-icon-white.svg')} 
                            /> 
                        </button>
            
                        <button 
                            className="social-selection"
                            onClick={this.handleSocialClicked} 
                            style={{
                                backgroundColor: '#333333', 
                                color: 'white',
                                boxSizing: 'border-box'}}> 
                            Social 
                        </button>
                    </div>
                    <h1 style={{color: this.state.resourceExtractionColor}} className="selected-impact"> 
                        Environmental impacts
                    </h1>
                    <div className="mobile-impacts-width">
                        <Environmental fromPage={fromPage} />
                    </div>
                </div>
            )
        }

        if(this.state.social) {
            content = (
                <div>
                    <div className="impact-selection-container">
                        <button 
                            className="environmental-selection" 
                            onClick={this.handleEnvironmentalClicked} 
                            style={{
                                backgroundColor: '#333333', 
                                color: 'white',
                                boxSizing: 'border-box'
                            }}> 
                            Environmental 
                        </button>

                        <button 
                            className="default-selection"
                            onClick={this.handleDefaultClicked} 
                            style={{
                                backgroundColor: '#333333', 
                                color: 'white', 
                                boxSizing: 'border-box'
                            }}> 
                            <img 
                                alt="resource extraction icon" 
                                style={{maxHeight: '35px', marginTop: '3px'}} 
                                src={require('../../../images/resource-extraction-icon-white.svg')} 
                            /> 
                        </button>
            
                        <button 
                            className="social-selection"
                            onClick={this.handleSocialClicked} 
                            style={{
                                backgroundColor: this.state.resourceExtractionColor, 
                                color: 'white',
                                boxSizing: 'border-box'}}> 
                            Social 
                        </button>
                    </div>

                    <h1 style={{color: this.state.resourceExtractionColor}} className="selected-impact"> 
                        Social impacts
                    </h1>
                    <div className="mobile-impacts-width">
                        <Social fromPage={fromPage} />
                    </div>
                </div>
            )
        }
        
        return (
            <div>
                <ScrollToMain />
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
