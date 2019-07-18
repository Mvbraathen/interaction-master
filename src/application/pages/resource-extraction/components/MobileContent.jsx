import React from "react";
/* Mobile menu */
import Mobile from "../../../menus/mobile/Mobile";
/* Header and footer for mobile devices */
import MobileHeader from "../../../components/mobile-header/MobileHeader";
import Footer from "../../../components/footer/Footer";
/* Impacts */
import Environmental from "../../../components/impacts/Environmental";
import Social from "../../../components/impacts/Social";
/* Scroll to top */
import ScrollUpMobile from "../../../components/scroll-up/ScrollUpMobile";
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
                    <div className="mobile-impacts-width">
                        <div>
                            <div className="info-positioning">
                                <p>Resource Extraction is the phase covering activities resulting in materials that
                                will be used in the manufacturing phase, such as the extraction and processing of
                                oil to make plastics, the mining and processing of cobalt and lithium to make
                                materials for the battery, and the mining and processing of tungsten to make the
                                mobile phone vibrate. Mobile phones can contain as many as 62 different metals,
                                including 16 of the 17 rare earth metals (
                                <a 
                                    className="inline-link-style" 
                                    title="link to smartphone materials statistics"  
                                    href="https://www.statista.com/statistics/270454/top-10-materials-in-a-smartphone/">
                                    Smartphone - Materials
                                </a>
                                ).</p>
                                <p>The most known social impact in this phase is conflict and associated illicit trade.
                                Some of the minerals mined for mobile phones and other electronics, gold, tin,
                                tantalum, and tungsten, are considered conflict minerals, because their
                                extraction is associated with armed groups that control the mining and trade of
                                the minerals. International regulation in the USA and the EU restricts the use of
                                conflict minerals. There are several international initiatives focusing on
                                improving the supply chain of minerals, such as the {' '} 
                                <a 
                                    className="inline-link-style" 
                                    title="link to responsible minerals initiative website"  
                                    href="http://www.responsiblemineralsinitiative.org/">
                                    Responsible Minerals Initiative
                                </a>
                                , the {' '} 
                                <a 
                                    className="inline-link-style" 
                                    title="link to responsible sourcing network website"  
                                    href="https://www.sourcingnetwork.org/">
                                    Responsible Sourcing Network
                                </a>       
                                , and the {' '}
                                <a 
                                    className="inline-link-style" 
                                    title="link to Enough Project website"  
                                    href="https://enoughproject.org/">
                                    Enough Project
                                </a>
                                .</p>
                                <p>A large part of the materials of the mobile phone are extracted in artisanal and
                                small-scale mining operations (ASM) in many African countries as well as in
                                countries in Asia and South-America. Both the industrial mining and ASM mining
                                of minerals are associated with a variety of environmental and social impacts (
                                <a 
                                    className="inline-link-style" 
                                    title="link to mapping mining to the sustainable development goals"  
                                    href="http://unsdsn.org/resources/publications/mapping-mining-to-the-sustainable-development-goals-an-atlas/">
                                    Mapping Mining to the Sustainable Development Goals: An Atlas
                                </a>
                                ).</p>
                            </div>
                        </div>
                    </div>                    
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
                <Footer />
                <ScrollUpMobile />
            </div>
        );
    }
}

export default MobileContent;
