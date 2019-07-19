import React from "react";
// Various components
import Desktop from "../../../menus/desktop/Desktop";
import DesktopHeader from "../../../components/desktop-header/DesktopHeader";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import Footer from "../../../components/footer/Footer";
import IconSelector from "../../../components/icon-selector/IconSelector";
import ManufacturingPhase from "../../../components/text/ManufacturingPhase";
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

            defaultBgc: '#BD2EC2',
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

            defaultBgc: '#BD2EC2',
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
            environmentalBgc: '#BD2EC2',
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
            socialBgc: '#BD2EC2'
        })
    }

     render() {
        /* To select corresponding components */
        const fromPage = "manufacturing";
        let iconColor = this.state.iconColor;
        
        /* To get correct header text */
        const pageHeader = "Manufacturing";
        
        /* The variable that holds the content */
        let content;

        if(this.state.default) {
            content = (
                <div>
                    <h1 
                        className="desktop-page-title" 
                        style={{color: '#BD2EC2'}}> 
                        The manufacturing phase 
                    </h1>
                    <div className="default-content-text">
                        <ManufacturingPhase />
                    </div>
                </div>
            )
        }

        if(this.state.environmental) {
            content = (
                <div>
                    <div className="desktop-page-title" style={{color: '#BD2EC2'}}> 
                        Environmental impacts
                    </div>
                    <Environmental fromPage={fromPage} />
                </div>
            )
        }

        if(this.state.social) {
            content = (
                <div>
                    <div className="desktop-page-title" style={{color: '#BD2EC2'}}> 
                        Social impacts
                    </div>
                    <Social fromPage={fromPage} />
                </div>
            )
        }

        return (
            <div id="manufacturing-page">
                <DesktopHeader pageHeader={pageHeader} />
                <div className="new-sub-menu">
                    <Breadcrumb fromPage={fromPage} />
                    {/* Two empty elements to align the three buttons right, without ruining tabindex */}
                    <div className="new-sub-menu-element"> </div>
                    <div className="new-sub-menu-element"> </div>
                    
                    {/* The three actual buttons */}
                    <div 
                        className="new-sub-menu-element"> 
                        <button
                            onClick={e => {
                                this.handleDefaultClick(e);
                            }}
                            style={{backgroundColor: this.state.defaultBgc}} 
                            className="new-sub-menu-element-text" 
                            tabIndex="0"> 
                            <IconSelector fromPage={fromPage} iconColor={iconColor} /> 
                        </button> 
                    </div>

                    <div 
                        className="new-sub-menu-element"> 
                        <button
                            onClick={e => {
                                this.handleEnvironmentalClick(e);
                            }} 
                            style={{backgroundColor: this.state.environmentalBgc, color: this.state.environmentalColor}} 
                            className="new-sub-menu-element-text" 
                            tabIndex="0"> 
                            Environmental
                        </button> 
                    </div>

                    <div 
                        className="new-sub-menu-element"> 
                        <button
                            onClick={e => {
                                this.handleSocialClick(e);
                            }} 
                            style={{backgroundColor: this.state.socialBgc, color: this.state.socialColor}} 
                            className="new-sub-menu-element-text" 
                            tabIndex="0"> 
                            Social 
                        </button> 
                    </div>
                    
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
