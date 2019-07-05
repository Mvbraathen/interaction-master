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
            image: 'manufacturing-purple',
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
            // Submenu element's background color
            defaultColor: 'white',
            environmentalColor: '#D3D3D3',
            socialColor: '#D3D3D3',
            image: 'manufacturing-purple',
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
            // Submenu element's background color
            defaultColor: '#D3D3D3',
            environmentalColor: 'white',
            socialColor: '#D3D3D3',
            image: 'manufacturing-black',
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
            // Submenu element's background color
            defaultColor: '#D3D3D3',
            environmentalColor: '#D3D3D3',
            socialColor: 'white',
            image: 'manufacturing-black',
            borderDefault: 'none',
            borderEnvironmental: 'none',
            borderSocial: '1px solid grey'
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
                <div>
                    <h1 
                        className="desktop-page-title" 
                        style={{color: '#BD2EC2'}}> 
                        The manufacturing phase 
                    </h1>
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
                <div style={{position: 'relative', marginTop: '-60px'}}>
                    <Breadcrumb fromPage={fromPage} />
                </div>
                    <div  onClick={e => {
                                this.handleSocialClick(e);
                            }} className="new-sub-menu-element"> <div style={{boxSizing: 'borderBox', border: this.state.borderSocial}} className="new-sub-menu-element-text" tabIndex="0"> Social </div> </div>
                    <div onClick={e => {
                                this.handleEnvironmentalClick(e);
                            }} className="new-sub-menu-element"> <div style={{border: this.state.borderEnvironmental}} className="new-sub-menu-element-text" tabIndex="0"> Environmental </div> </div>
                    <div onClick={e => {
                                this.handleDefaultClick(e);
                            }} className="new-sub-menu-element"> <div style={{border: this.state.borderDefault}} className="new-sub-menu-element-text" tabIndex="0"> <div>
                                <img 
                                    alt="manufacturing icon" 
                                    style={{maxHeight: '35px', verticalAlign: 'middle'}} 
                                    src={require('../../../images/manufacturing-black.svg')} 
                                />
                            </div> </div> </div>
                </div>
                

                        <hr style={{marginTop: '60px', height: '1px', backgroundColor: 'lightgrey', width: '95%', border: 'none'}} />
                {/* Left half */}
                <div className="split left-half">
                    
                    <Desktop />
                </div>

                {/* Right half */}
                <div className="split right-half">
                    <div className="right-half-content">
                        {content}
                    </div>
                </div>
            </div>
        );
    }
}

export default DesktopContent;
