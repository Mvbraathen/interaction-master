import React from "react";
// Various components
import Desktop from "../../../menus/desktop/Desktop";
import DesktopHeader from "../../../components/desktop-header/DesktopHeader";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import Footer from "../../../components/footer/Footer";
import IconSelector from "../../../components/icon-selector/IconSelector";
import ResourcePhase from "../../../components/text/ResourcePhase";
// Impacts
import Environmental from "../../../components/impacts/Environmental";
import Social from "../../../components/impacts/Social";
/* Scroll to top */
import ScrollUpDesktop from "../../../components/scroll-up/ScrollUpDesktop";

class DesktopContent extends React.Component {
    constructor() {
        super();
        this.state = {
            // Decides content
            default: true,
            environmental: false,
            social: false,

            iconColor: 'white',
            environmentalColor: 'black',
            socialColor: 'black',

            defaultBgc: '#008A00',
            environmentalBgc: 'lightgrey',
            socialBgc: 'lightgrey'
        }
    }

    handleDefaultClick() {
        this.setState({
            default: true,
            social: false,
            environmental: false,

            iconColor: 'white',
            environmentalColor: 'black',
            socialColor: 'black',

            defaultBgc: '#008A00',
            environmentalBgc: 'lightgrey',
            socialBgc: 'lightgrey'
        })
    }

    handleEnvironmentalClick() {
        this.setState({
            default: false,
            social: false,
            environmental: true,

            iconColor: 'black',
            environmentalColor: 'white',
            socialColor: 'black',

            defaultBgc: 'lightgrey',
            environmentalBgc: '#008A00',
            socialBgc: 'lightgrey'
        })
    }

    handleSocialClick() {
        this.setState({
            default: false,
            environmental: false,
            social: true,

            iconColor: 'black',
            environmentalColor: 'black',
            socialColor: 'white',

            defaultBgc: 'lightgrey',
            environmentalBgc: 'lightgrey',
            socialBgc: '#008A00'
        })
    }

    render() {
        /* To select corresponding components */
        const fromPage = "resourceExtraction";
        let iconColor = this.state.iconColor;
        
        /* To get correct header text */
        const pageHeader = "Resource extraction";
        
        /* The variable that holds the content */
        let content;

        if(this.state.default) {
            content = (
                <div>
                    <h1 
                        className="desktop-page-title" 
                        style={{color: '#008A00'}}> 
                        The resource extraction phase 
                    </h1>
                    <div className="default-content-text">
                        <ResourcePhase />
                    </div>
                </div>
            )
        }

        if(this.state.environmental) {
            content = (
                <div>
                    <div className="desktop-page-title" style={{color: '#008A00'}}> 
                        Environmental impacts
                    </div>
                    <Environmental fromPage={fromPage} />
                </div>
            )
        }

        if(this.state.social) {
            content = (
                <div>
                    <div className="desktop-page-title" style={{color: '#008A00'}}> 
                        Social impacts
                    </div>
                    <Social fromPage={fromPage} />
                </div>
            )
        }

        return (
            <div id="resource-extraction-page">
                <DesktopHeader pageHeader={pageHeader} />
                <div className="fix-content-scroll-under-sub"/>
                <Breadcrumb fromPage={fromPage} />
                <div className="impact-sub-menu">
                    <button
                        className="lifecycle-icon"
                        onClick={e => {
                            this.handleDefaultClick(e);
                        }}
                        style={{backgroundColor: this.state.defaultBgc}} 
                        tabIndex="0"> 
                        <IconSelector fromPage={fromPage} iconColor={iconColor} />
                    </button> 
                    <button
                        className="environmental-element"
                        onClick={e => {
                            this.handleEnvironmentalClick(e);
                        }} 
                        style={{backgroundColor: this.state.environmentalBgc, color: this.state.environmentalColor}} 
                        tabIndex="0"> 
                        Environmental impacts
                    </button> 
                    <button
                        className="social-element"
                        onClick={e => {
                            this.handleSocialClick(e);
                        }} 
                        style={{backgroundColor: this.state.socialBgc, color: this.state.socialColor}} 
                        tabIndex="0">
                        Social impacts
                    </button>                     
                </div>
                
                {/* Line to visually seperate sub menu from page content */}
                <hr className="vertical-line" />
                
                {/* Left half */}
                <div className="split left-half">
                    <Desktop />
                </div>

                {/* Right half */}
                <div className="split right-half">
                    <div id="top" />
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
