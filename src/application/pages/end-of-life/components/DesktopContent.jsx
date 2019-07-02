import React from "react";
// Various components
import Desktop from "../../../menus/desktop/Desktop";
import DesktopHeader from "../../components/DesktopHeader";
import Breadcrumb from "../../components/Breadcrumb";
// Impacts
import Environmental from "../../impacts/Environmental";
import Social from "../../impacts/Social";
// Styling
import "../../css/Desktop.css";
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
            defaultColor: 'white',
            environmentalColor: '#D3D3D3',
            socialColor: '#D3D3D3',
            // Submenu element's font weight
            defaultFontWeight: '700',
            environmentalFontWeight: '400',
            socialFontWeight: '400'
        }
    }

    handleDefaultClick() {
        this.setState({
            default: true,
            social: false,
            environmental: false,
            // Submenu element's background color
            defaultColor: 'white',
            environmentalColor: '#D3D3D3',
            socialColor: '#D3D3D3',
            // Submenu element's font weight
            defaultFontWeight: '700',
            environmentalFontWeight: '400',
            socialFontWeight: '400'
        })
    }

    handleEnvironmentalClick() {
        this.setState({
            default: false,
            social: false,
            environmental: true,
            // Submenu element's background color
            defaultColor: '#D3D3D3',
            environmentalColor: 'white',
            socialColor: '#D3D3D3',
            // Submenu element's font weight
            defaultFontWeight: '400',
            environmentalFontWeight: '700',
            socialFontWeight: '400'
        })
    }

    handleSocialClick() {
        this.setState({
            default: false,
            environmental: false,
            social: true,
            // Submenu element's background color
            defaultColor: '#D3D3D3',
            environmentalColor: '#D3D3D3',
            socialColor: 'white',
            // Submenu element's font weight
            defaultFontWeight: '400',
            environmentalFontWeight: '400',
            socialFontWeight: '700'
        })
    }

    /* When enter is pressed on sub menu elements, click functions is called */
    handleDefaultEnterPressed(event) {
        if(event.key === 'Enter'){
            this.handleDefaultClick();
        }
    }

    handleEnvironmentalEnterPressed(event) {
        if(event.key === 'Enter'){
            this.handleEnvironmentalClick();
        }
    }

    handleSocialEnterPressed(event) {
        if(event.key === 'Enter'){
            this.handleSocialClick();
        }
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
                    <h1 className="selected-info page-title" style={{color: '#C75000'}}> The end of life phase </h1>
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
                    <div className="selected-info page-title" style={{color: '#C75000'}}> 
                        Environmental impacts
                    </div>
                    <div className="environmental-content">
                        <Environmental fromPage={fromPage} />
                    </div>
                </div>
            )
        }

        if(this.state.social) {
            content = (
                <div>
                    <div className="selected-info page-title" style={{color: '#C75000'}}> 
                        Social impacts
                    </div>
                    <div className="social-content">
                        <Social fromPage={fromPage} />
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
                        <div tabIndex="0" className = "default-menu-element"
                            style={{
                                backgroundColor: this.state.defaultColor, 
                                fontWeight: this.state.defaultFontWeight
                            }} 
                            onClick={e => {
                                this.handleDefaultClick(e);
                            }}
                            onKeyDown={event => {
                                this.handleDefaultEnterPressed(event);
                            }}>
                            Default
                        </div>
                        <div tabIndex="0" className="environmental-menu-element"
                            style={{
                                backgroundColor: this.state.environmentalColor,
                                fontWeight: this.state.environmentalFontWeight
                            }} 
                            onClick={e => {
                                this.handleEnvironmentalClick(e);
                            }}
                            onKeyDown={event => {
                                this.handleEnvironmentalEnterPressed(event);
                            }}>
                            Environmental
                        </div>
                        <div tabIndex="0" className="social-menu-element"
                            style={{
                                backgroundColor: this.state.socialColor,
                                fontWeight: this.state.socialFontWeight
                            }} 
                            onClick={e => {
                                this.handleSocialClick(e);
                            }}
                            onKeyDown={event => {
                                this.handleSocialEnterPressed(event);
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

