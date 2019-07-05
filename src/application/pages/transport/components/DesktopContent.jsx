import React from "react";
// Various components
import Desktop from "../../../menus/desktop/Desktop";
import DesktopHeader from "../../../components/desktop-header/DesktopHeader";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
// Impacts
import Environmental from "../../../components/impacts/Environmental";
import Social from "../../../components/impacts/Social";

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
            socialFontWeight: '400',
            // Image 
            image: 'transport-icon'
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
        const fromPage = "transport";
        
        /* To get correct header text */
        const pageHeader = "Transport";
        
        /* The variable that holds the content */
        let content;

        /* Decides which icon to render */
        let image = this.state.image;

        if(this.state.default) {
            content = (
                <div>
                    <h1 
                        className="desktop-page-title" 
                        style={{color: '#0066FF'}}> 
                        The transport phase 
                    </h1>
                    <div className="default-content-text">
                        Transport is short-hand for a variety of activities that take place during the whole lifecycle of the mobile phone, 
                        such transportation of materials, components, and finished products; 
                        the packaging of the products being transported; and the logistics or organisation and implementation of it all.
                    </div>
                </div>
            )
        }

        if(this.state.environmental) {
            content = (
                <div>
                    <div className="desktop-page-title" style={{color: '#00AD00'}}> 
                        Environmental impacts
                    </div>
                    <Environmental fromPage={fromPage} />
                </div>
            )
        }

        if(this.state.social) {
            content = (
                <div>
                    <div className="desktop-page-title" style={{color: '#00AD00'}}> 
                        Social impacts
                    </div>
                    <Social fromPage={fromPage} />
                </div>
            )
        }

        return (
            <div id="transport-page">
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
                            
                            <div>
                                <img 
                                    alt="transport icon" 
                                    style={{maxHeight: '50px', verticalAlign: 'middle'}} 
                                    src={require('../../../images/'+ image +'.png')} 
                                />
                            </div>
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
                    <div className="right-half-content">
                        {content}
                    </div>
                </div>
            </div>
        );
    }
}

export default DesktopContent;

