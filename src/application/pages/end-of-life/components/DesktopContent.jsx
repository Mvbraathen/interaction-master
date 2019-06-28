import React from "react";
// Various components
import Desktop from "../../../menus/desktop/Desktop";
import DesktopHeader from "../../components/DesktopHeader";
import Breadcrumb from "../../components/Breadcrumb";
// Impacts
import MobileEnvironmental from "../../impacts/MobileEnvironmental";
import MobileSocial from "../../impacts/MobileSocial";
// Styling
import "../../css/DesktopBig.css";
import "../../css/SubMenu.css";

class DesktopContent extends React.Component {
    constructor() {
        super();
        this.state = {
            // Decides content
            default: true,
            environmental: false,
            social: false,
            // Submenu element's background color
            defaultColor: '#e6e6e6',
            environmentalColor: '#fafafa',
            socialColor: '#fafafa',
            // Submenu element's font weight
            defaultFontWeight: '600',
            environmentalFontWeight: '300',
            socialFontWeight: '300'
        }
    }

    handleDefaultClick() {
        this.setState({
            default: true,
            social: false,
            environmental: false,
            // Submenu element's background color
            defaultColor: '#e6e6e6',
            environmentalColor: '#fafafa',
            socialColor: '#fafafa',
            // Submenu element's font weight
            defaultFontWeight: '600',
            environmentalFontWeight: '300',
            socialFontWeight: '300'
        })
    }

    handleEnvironmentalClick() {
        this.setState({
            default: false,
            social: false,
            environmental: true,
            // Submenu element's background color
            defaultColor: '#fafafa',
            environmentalColor: '#e6e6e6',
            socialColor: '#fafafa',
            // Submenu element's font weight
            defaultFontWeight: '300',
            environmentalFontWeight: '600',
            socialFontWeight: '300'
        })
    }

    handleSocialClick() {
        this.setState({
            default: false,
            environmental: false,
            social: true,
            // Submenu element's background color
            defaultColor: '#fafafa',
            environmentalColor: '#fafafa',
            socialColor: '#e6e6e6',
            // Submenu element's font weight
            defaultFontWeight: '300',
            environmentalFontWeight: '300',
            socialFontWeight: '600'
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
                <div className="default-content">
                    <h1> The end of life phase </h1>
                    <div className="default-content-text">
                        End of life is the phase in which the mobile phone is no longer in use as the result of planned, functional or perceived obsolescence of the phone. 
                        These mobile phones disappear in dusty drawers, get sold or are repaired or thrown away. 
                        In countries with a functional electronic waste collection system, mobile phones are recycled so that valuable minerals can be re-used. 
                        Sometimes only the motherboard (PCB) is take out for recycling and the rest is burned, resulting in the release of hazardous materials in water and air.
                    </div>
                </div>
            )
        }

        if(this.state.environmental) {
            content = (
                <div>
                    <div className="environmental-content">
                        <MobileEnvironmental fromPage={fromPage} />
                    </div>
                </div>
            )
        }

        if(this.state.social) {
            content = (
                <div>
                    <div className="social-content">
                        <MobileSocial fromPage={fromPage} />
                    </div>
                </div>
            )
        }

        return (
            <div id="end-of-life-page">
                <DesktopHeader pageHeader={pageHeader} />
                {/* Left half */}
                <div className="split left-half">
                    <Breadcrumb fromPage={fromPage} />
                    <div className="sub-menu-left-half"></div>
                    <Desktop />
                </div>

                {/* Right half */}
                <div className="split right-half">
                    <div className="sub-menu">
                        <div className = "default-menu-element"
                            style={{
                                backgroundColor: this.state.defaultColor, 
                                fontWeight: this.state.defaultFontWeight
                            }} 
                            onClick={e => {
                                this.handleDefaultClick(e);
                            }}>
                            Default
                        </div>
                        <div className="environmental-menu-element"
                            style={{
                                backgroundColor: this.state.environmentalColor,
                                fontWeight: this.state.environmentalFontWeight
                            }} 
                            onClick={e => {
                                this.handleEnvironmentalClick(e);
                            }}>
                            Environmental
                        </div>
                        <div className="social-menu-element"
                            style={{
                                backgroundColor: this.state.socialColor,
                                fontWeight: this.state.socialFontWeight
                            }} 
                            onClick={e => {
                                this.handleSocialClick(e);
                            }}>
                            Social
                        </div>
                    </div>
                    <div className="content-manager">
                        {content}
                    </div>
                </div>
            </div>
        );
    }
}

export default DesktopContent;

