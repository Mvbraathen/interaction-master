import React from "react";
// Various components
import Desktop from "../../../menus/desktop/Desktop";
import DesktopHeader from "../../../components/header/desktop-header/DesktopHeader";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import Footer from "../../../components/footer/Footer";
import ManufacturingPhase from "../../../components/text/ManufacturingPhase";
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
        const fromPage = "manufacturing";

        /* To get correct header text */
        const pageHeader = "Manufacturing";
        
        /* The variable that holds the content */
        let content;

        if(this.state.default) {
            content = (
                <div>
                    <h1 
                        className="h1-impact-style" 
                        style={{color: '#BD2EC2'}}> 
                        The manufacturing phase 
                    </h1>
                    <div className="default-content-text">
                        <ManufacturingPhase />
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
                <div>
                    <ImpactSelection
                        fromPage={fromPage}
                        pageState="environmental"
                        default = {this.handleDefaultClick}
                    />
                    <div className="h1-impact-style environmental-responsive" style={{color: '#BD2EC2'}}> 
                        Environmental impacts
                    </div>
                    <Environmental fromPage={fromPage} />
                </div>
            )
        }

        if(this.state.social) {
            content = (
                <div>
                    <ImpactSelection
                        fromPage={fromPage}
                        pageState="social"
                        default = {this.handleDefaultClick} 
                    />
                    <div className="h1-impact-style" style={{color: '#BD2EC2'}}> 
                        Social impacts
                    </div>
                    <Social fromPage={fromPage} />
                </div>
            )
        }

        return (
            <div id="manufacturing-page">
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
