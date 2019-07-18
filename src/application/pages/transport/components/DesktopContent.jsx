import React from "react";
// Various components
import Desktop from "../../../menus/desktop/Desktop";
import DesktopHeader from "../../../components/desktop-header/DesktopHeader";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import Footer from "../../../components/footer/Footer";
import IconSelector from "../../../components/icon-selector/IconSelector";
import TransportPhase from "../../../components/text/TransportPhase";
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
            borderDefault: '1px solid grey',
            borderEnvironmental: 'none',
            borderSocial: 'none'
        }
    }

    handleDefaultClick() {
        this.setState({
            default: true,
            social: false,
            environmental: false,
            borderDefault: '1px solid grey',
            borderEnvironmental: 'none',
            borderSocial: 'none'
        })
    }

    handleEnvironmentalClick() {
        this.setState({
            default: false,
            social: false,
            environmental: true,
            borderDefault: 'none',
            borderEnvironmental: '1px solid grey',
            borderSocial: 'none'
        })
    }

    handleSocialClick() {
        this.setState({
            default: false,
            environmental: false,
            social: true,
            borderDefault: 'none',
            borderEnvironmental: 'none',
            borderSocial: '1px solid grey'
        })
    }

    render() {
        /* To select corresponding components */
        const fromPage = "transport";
        
        /* To get correct header text */
        const pageHeader = "Transport";
        
        /* The variable that holds the content */
        let content;

        if(this.state.default) {
            content = (
                <div>
                    <h1 
                        className="desktop-page-title" 
                        style={{color: '#0066FF'}}> 
                        The transport phase 
                    </h1>
                    <div className="default-content-text">
                        <TransportPhase />
                    </div>
                </div>
            )
        }

        if(this.state.environmental) {
            content = (
                <div>
                    <div className="desktop-page-title" style={{color: '#0066FF'}}> 
                        Environmental impacts
                    </div>
                    <Environmental fromPage={fromPage} />
                </div>
            )
        }

        if(this.state.social) {
            content = (
                <div>
                    <div className="desktop-page-title" style={{color: '#0066FF'}}> 
                        Social impacts
                    </div>
                    <Social fromPage={fromPage} />
                </div>
            )
        }

        return (
            <div id="transport-page">
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
                            style={{border: this.state.borderDefault}} 
                            className="new-sub-menu-element-text" 
                            tabIndex="0"> 
                            <IconSelector fromPage={fromPage} />
                        </button> 
                    </div>

                    <div 
                        className="new-sub-menu-element"> 
                        <button
                            onClick={e => {
                                this.handleEnvironmentalClick(e);
                            }} 
                            style={{border: this.state.borderEnvironmental}} 
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
                            style={{boxSizing: 'borderBox', border: this.state.borderSocial}} 
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

