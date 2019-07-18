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
            transportColor: '#0066FF'
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
        const pageHeader = "Transport";
        /* To get impacts that corresponds with design phase */
        let fromPage = "transport";
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
                                backgroundColor: this.state.transportColor, 
                                boxSizing: 'border-box'
                            }}> 
                            <img 
                                alt="resource extraction icon" 
                                style={{maxHeight: '35px', marginTop: '3px'}} 
                                src={require('../../../images/transport-icon-white.svg')} 
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

                    <div id="main-content" className="mobile-page-title" style={{color: this.state.transportColor}}> 
                        The transport phase 
                    </div> 
                    <div className="page-introduction-text">
                       Transport is short-hand for a variety of activities that take place during 
                        the whole lifecycle of the mobile phone, such transportation of materials, 
                        components, and finished products; the packaging of the products being 
                        transported; and the logistics or organisation and implementation of it all.
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
                                backgroundColor: this.state.transportColor, 
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
                                src={require('../../../images/transport-icon-white.svg')} 
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
                    <h1 style={{color: this.state.transportColor}} className="selected-impact"> 
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
                                src={require('../../../images/transport-icon-white.svg')} 
                            /> 
                        </button>
            
                        <button 
                            className="social-selection"
                            onClick={this.handleSocialClicked} 
                            style={{
                                backgroundColor: this.state.transportColor, 
                                color: 'white',
                                boxSizing: 'border-box'}}> 
                            Social 
                        </button>
                    </div>

                    <h1 style={{color: this.state.transportColor}} className="selected-impact"> 
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
                <ScrollUp />
            </div>
        );
    }
}

export default MobileContent;
