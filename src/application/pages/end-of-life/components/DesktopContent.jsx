import React from "react";
// Various components
import Desktop from "../../../menus/desktop/Desktop";
import DesktopHeader from "../../../components/header/desktop-header/DesktopHeader";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import Footer from "../../../components/footer/Footer";
import EndOfLifePhase from "../../../components/text/EndOfLifePhase";
// Impacts
import Environmental from "../../../components/impacts/Environmental";
import Social from "../../../components/impacts/Social";
/* Scroll to top */
import ScrollUpDesktop from "../../../components/scroll-up/desktop-scroll-up/ScrollUpDesktop";
/* Jump to main content */ 
import ScrollToMain from "../../../components/scroll-to-main/ScrollToMain";
/* Menu for impact selection */
import ImpactSelection from "../../../components/impact-selection/ImpactSelection";

class DesktopContent extends React.Component {
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

    render() {
        /* To select corresponding components */
        const fromPage = "endOfLife";
        
        /* To get correct header text */
        const pageHeader = "End of life";
        
        /* The variable that holds the content */
        let content;

        if(this.state.default) {
            content = (
                <div>
                    <h1 
                        className="h1-impact-style" 
                        style={{color: '#C65000'}}> 
                        The end of life phase 
                    </h1>
                    <ImpactSelection
                        fromPage={fromPage}
                        pageState="default"
                        environmental = {this.handleEnvironmentalClick} 
                        social = {this.handleSocialClick} 
                    />
                    <div className="default-content-text">
                        <EndOfLifePhase />
                    </div>
                </div>
            )
        }

        if(this.state.environmental) {
            content = (
                <div>
                    <div className="h1-impact-style" style={{color: '#C65000'}}> 
                        Environmental impacts
                    </div>
                    <ImpactSelection
                        pageState="environmental"
                        default = {this.handleDefaultClick} 
                        social = {this.handleSocialClick} 
                    />
                    <Environmental fromPage={fromPage} />
                </div>
            )
        }

        if(this.state.social) {
            content = (
                <div>
                    <div className="h1-impact-style" style={{color: '#C65000'}}> 
                        Social impacts
                    </div>
                    <ImpactSelection
                        pageState="social"
                        default = {this.handleDefaultClick} 
                        environmental = {this.handleEnvironmentalClick} 
                    />
                    <Social fromPage={fromPage} />
                </div>
            )
        }

        return (
            <div id="end-of-life-page">
                <ScrollToMain />
                <DesktopHeader pageHeader={pageHeader} />
                <Breadcrumb fromPage={fromPage} />
                {/* Left half */}
                <div className="split left-half">
                    <Desktop />
                </div>
                {/* Right half */}
                <div className="split right-half">
                    <div id="top" />
                    <div id="main-content" className="fix-top"/> 
                    <div className="right-half-content">
                        {content}
                    </div>
                    <Footer />
                    <ScrollUpDesktop />
                </div>
            </div>
        );
    }
}

export default DesktopContent;

