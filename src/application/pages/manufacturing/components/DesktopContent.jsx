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
            socialFontWeight: '400',
            image: 'manufacturing-purple'
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
            socialFontWeight: '400',
            image: 'manufacturing-purple'
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
            socialFontWeight: '400',
            image: 'manufacturing-black'
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
            socialFontWeight: '700',
            image: 'manufacturing-black'
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
        const fromPage = "manufacturing";
        
        /* To get correct header text */
        const pageHeader = "Manufacturing";
        
        /* The variable that holds the content */
        let content;

        /* Decides which icon to render */
        let image = this.state.image;

        if(this.state.default) {
            content = (
                <div className="default-content">
                    <h1 style={{color: '#BD2EC2'}}> The manufacturing phase </h1>
                    <div className="default-content-text">
                        Manufacturing is the phase in which the different components of the mobile 
                        phone are produced and put together to become the finished product. The 
                        main components of a mobile phone are the circuit board (PCB), battery, 
                        LCD screen, antenna, microphone, speaker, camera(s), and shell. Each of 
                        these large components consists of several smaller components.
                        <p></p>
                        Manufacturing takes place in factories, with the largest factory, in Shenzen, 
                        China, housing up to 450.000 workers.
                    </div>
                </div>
            )
        }

        if(this.state.environmental) {
            content = (
                <div>
                    <div className="selected-info"> 
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
                    <div className="selected-info"> 
                        Social impacts
                    </div>
                    <div className="social-content">
                        <Social fromPage={fromPage} />
                    </div>
                </div>
            )
        }

        return (
            <div id="manufacturing-page">
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
                                <img alt="resource extraction icon" style={{maxHeight: '80px', verticalAlign: 'middle'}} src={require('../../images/'+ image +'.svg')} />
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
                    <div className="content-manager">
                        {content}
                    </div>
                </div>
            </div>
        );
    }
}

export default DesktopContent;
