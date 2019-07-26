import React from "react";
/* Mobile menu */
import Mobile from "../../../menus/mobile/Mobile";
/* Header and footer for mobile devices */
import MobileHeader from "../../../components/header/mobile-header/MobileHeader";
import Footer from "../../../components/footer/Footer";
/* Text */
import EndOfLifePhase from "../../../components/text/EndOfLifePhase";
/* Impacts */
import Environmental from "../../../components/impacts/Environmental";
import Social from "../../../components/impacts/Social";
/* Scroll up */
import ScrollUpMobile from "../../../components/scroll-up/mobile-scroll-up/ScrollUpMobile";
/* Scroll to main content */
import ScrollToMain from "../../../components/scroll-to-main/ScrollToMain";
/* Menu for impact selection */
import ImpactSelection from "../../../components/impact-selection/ImpactSelection";

class MobileContent extends React.Component {
    constructor() {
        super();
        this.state = {
            // Decides content
            default: true,
            environmental: false,
            social: false
        }; 
        this.handleDefaultClick = this.handleDefaultClick.bind(this);
        this.handleEnvironmentalClick = this.handleEnvironmentalClick.bind(this);
        this.handleSocialClick = this.handleSocialClick.bind(this);
    }

    handleDefaultClick() {
        this.setState({
            default: true,
            social: false,
            environmental: false
        })
    }

    handleEnvironmentalClick() {
        this.setState({
            default: false,
            social: false,
            environmental: true
        })
    }

    handleSocialClick() {
        this.setState({
            default: false,
            environmental: false,
            social: true
        })
    }

    /* Scrolls to top when page loads */
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {

        /* To get correct page header text */
        const pageHeader = "End of life";
        /* To get impacts that corresponds with design phase */
        let fromPage = "endOfLife";
        let content;

        if(this.state.default) {
            content = (
                <div className="mobile-content-margin">
                    <h1 
                        className="h1-impact-style" 
                        style={{color: '#C75000', paddingTop: '0px', paddingBottom: '0px'}}> 
                        The end of life phase 
                    </h1>
                    <div className="default-content-text">
                        <EndOfLifePhase />
                        <ImpactSelection
                            fromPage={fromPage}
                            pageState="default"
                            environmental = {this.handleEnvironmentalClick} 
                            social = {this.handleSocialClick} 
                        />
                    </div>
                </div>
            )
        }

        if(this.state.environmental) {
            content = (
                <div className="mobile-content-margin">
                    <ImpactSelection
                        fromPage={fromPage}
                        pageState="environmental"
                        default = {this.handleDefaultClick}
                    />
                    <div className="h1-impact-style environmental-responsive" style={{color: '#C75000'}}> 
                        Environmental impacts
                    </div>
                    <Environmental fromPage={fromPage} />
                </div>
            )
        }

        if(this.state.social) {
            content = (
                <div className="mobile-content-margin">
                    <ImpactSelection
                        fromPage={fromPage}
                        pageState="social"
                        default = {this.handleDefaultClick} 
                    />
                    <div className="h1-impact-style" style={{color: '#C75000'}}> 
                        Social impacts
                    </div>
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
                        
                        {/* For the ScrollToMain component */}
                        <div style={{marginTop: '80px'}} id="main-content" />
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
