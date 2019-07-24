import React from "react";
/* Mobile menu */
import Mobile from "../../../menus/mobile/Mobile";
/* Header and footer for mobile devices */
import MobileHeader from "../../../components/header/mobile-header/MobileHeader";
import Footer from "../../../components/footer/Footer";
/* Text */
import ResourcePhase from "../../../components/text/ResourcePhase";
/* Impacts */
import Environmental from "../../../components/impacts/Environmental";
import Social from "../../../components/impacts/Social";
/* Scroll to top */
import ScrollUpMobile from "../../../components/scroll-up/mobile-scroll-up/ScrollUpMobile";
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
            defaultBgc: '#008A00',
            environmentalBgc: '#333333',
            socialBgc: '#333333',
            resourceExtractionColor: '#008A00'
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
            social: false,
            defaultBgc: '#008A00',
            environmentalBgc: '#333333',
            socialBgc: '#333333'
        });
    }

    handleEnvironmentalClicked() {
        this.setState({
            default: false,
            environmental: true,
            social: false,
            defaultBgc: '#333333',
            environmentalBgc: '#008A00',
            socialBgc: '#333333'
        });
    }

    handleSocialClicked() {
        this.setState({
            default: false,
            environmental: false,
            social: true,
            defaultBgc: '#333333',
            environmentalBgc: '#333333',
            socialBgc: '#008A00'
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
                <div className="mobile-content-margin">
                    <h1
                        className="h1-impact-style" 
                        style={{
                            color: this.state.resourceExtractionColor
                        }}> 
                        The resource extraction phase 
                    </h1> 
                    <ResourcePhase />         
                </div>
            )
        } 

        if(this.state.environmental) {
            content = (
                <div className="mobile-content-margin">
                    <h1 
                        className="h1-impact-style" 
                        style={{
                            color: this.state.resourceExtractionColor
                        }}> 
                        Environmental impacts 
                    </h1> 
                    <Environmental fromPage={fromPage} />
                </div>
            )
        }

        if(this.state.social) {
            content = (
                <div className="mobile-content-margin">
                    <h1 
                        className="h1-impact-style" 
                        style={{
                            color: this.state.resourceExtractionColor
                        }}> 
                        Social impacts 
                    </h1> 
                    <Social fromPage={fromPage} />
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
                        <div className="impact-selection-container">
                            <button 
                                className="environmental-selection" 
                                onClick={this.handleEnvironmentalClicked} 
                                style={{
                                    backgroundColor: this.state.environmentalBgc, 
                                    color: 'white',
                                    boxSizing: 'border-box'
                                }}> 
                                Environmental 
                            </button>

                            <button 
                                className="default-selection"
                                onClick={this.handleDefaultClicked} 
                                style={{
                                    backgroundColor: this.state.defaultBgc, 
                                    boxSizing: 'border-box'
                                }}> 
                                <img 
                                    alt="resource extraction icon" 
                                    style={{maxHeight: '35px', marginTop: '3px'}} 
                                    src={require('../../../components/icon-selector/icons/resource-extraction-icon-white.svg')} 
                                /> 
                            </button>
                
                            <button 
                                className="social-selection"
                                onClick={this.handleSocialClicked} 
                                style={{
                                    backgroundColor: this.state.socialBgc, 
                                    color: 'white',
                                    boxSizing: 'border-box'}}> 
                                Social 
                            </button>
                        </div>
                        {/* For the ScrollToMain component */}
                        <div id="main-content" />
                        {content}
                    </div>
                </div>
                <Footer />
                <ScrollUpMobile />
            </div>
        );
    }
}

export default MobileContent;
