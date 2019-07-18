import React from "react";
/* Mobile menu */
import Mobile from "../../../menus/mobile/Mobile";
/* Header and footer for mobile devices */
import MobileHeader from "../../../components/mobile-header/MobileHeader";
import Footer from "../../../components/footer/Footer";
/* Impacts */
import Environmental from "../../../components/impacts/Environmental";
import Social from "../../../components/impacts/Social";
/* Scroll up */
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
            useColor: '#EB0000'
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
        const pageHeader = "Use";
        /* To get impacts that corresponds with design phase */
        let fromPage = "use";
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
                                backgroundColor: this.state.useColor, 
                                boxSizing: 'border-box'
                            }}> 
                            <img 
                                alt="resource extraction icon" 
                                style={{maxHeight: '35px', marginTop: '3px'}} 
                                src={require('../../../images/use-icon-white.svg')} 
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
                    <h1 className="mobile-page-title" style={{color: this.state.useColor}}> 
                        The use phase 
                    </h1> 
                    <div className="page-introduction-text">
                       Use refers to the phase in which the mobile phone is used for information and 
                        communication activities by a mobile phone user. It is estimated that there 
                        are 4.43 billion mobile phone users worldwide, that is 60% of the total 
                        population of our planet.
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
                                backgroundColor: this.state.useColor, 
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
                                src={require('../../../images/use-icon-white.svg')} 
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
                    <h1 style={{color: this.state.useColor}} className="selected-impact"> 
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
                                src={require('../../../images/use-icon-white.svg')} 
                            /> 
                        </button>
            
                        <button 
                            className="social-selection"
                            onClick={this.handleSocialClicked} 
                            style={{
                                backgroundColor: this.state.useColor, 
                                color: 'white',
                                boxSizing: 'border-box'}}> 
                            Social 
                        </button>
                    </div>

                    <h1 style={{color: this.state.useColor}} className="selected-impact"> 
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
