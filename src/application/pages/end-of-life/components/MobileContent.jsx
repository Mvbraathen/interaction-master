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
            endOfLifeColor: '#C75000'
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
        const pageHeader = "End of life";
        /* To get impacts that corresponds with design phase */
        let fromPage = "endOfLife";
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
                                backgroundColor: this.state.endOfLifeColor, 
                                boxSizing: 'border-box'
                            }}> 
                            <img 
                                alt="resource extraction icon" 
                                style={{maxHeight: '35px', marginTop: '3px'}} 
                                src={require('../../../images/end-of-life-icon-white.svg')} 
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
                    <h1 className="mobile-page-title" style={{color: this.state.endOfLifeColor}}> 
                        The end of life phase 
                    </h1> 
                    <p className="page-introduction-text">
                       End of life is the phase in which the mobile phone is no longer in endOfLife as 
                        the result of planned, functional or perceived obsolescence of the phone. 
                        These mobile phones disappear in dusty drawers, get sold or are repaired 
                        or thrown away. In countries with a functional electronic waste collection 
                        system, mobile phones are recycled so that valuable minerals can be re-used. 
                        Sometimes only the motherboard (PCB) is take out for recycling and the rest 
                        is burned, resulting in the release of hazardous materials in water and air.
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
                                backgroundColor: this.state.endOfLifeColor, 
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
                                src={require('../../../images/end-of-life-icon-white.svg')} 
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
                    <h1 style={{color: this.state.endOfLifeColor}} className="selected-impact"> 
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
                                src={require('../../../images/end-of-life-icon-white.svg')} 
                            /> 
                        </button>
            
                        <button 
                            className="social-selection"
                            onClick={this.handleSocialClicked} 
                            style={{
                                backgroundColor: this.state.endOfLifeColor, 
                                color: 'white',
                                boxSizing: 'border-box'}}> 
                            Social 
                        </button>
                    </div>

                    <h1 style={{color: this.state.endOfLifeColor}} className="selected-impact"> 
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
