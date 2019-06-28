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
        const fromPage = "resourceExtraction";
        
        /* To get correct header text */
        const pageHeader = "Resource extraction";
        
        /* The variable that holds the content */
        let content;

        if(this.state.default) {
            content = (
                <div className="default-content">
                    <h1> The use phase </h1>
                    <div className="default-content-text">
                        Use refers to the phase in which the mobile phone is used for information and communication activities by a mobile phone user. 
                        It is estimated that there are 4.43 billion mobile phone users worldwide, that is 60% of the total population of our planet.
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
            <div id="use-page">
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

