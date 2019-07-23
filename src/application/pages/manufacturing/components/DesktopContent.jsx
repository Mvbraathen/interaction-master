import React from "react";
// Various components
import Desktop from "../../../menus/desktop/Desktop";
import DesktopHeader from "../../../components/header/desktop-header/DesktopHeader";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import Footer from "../../../components/footer/Footer";
import IconSelector from "../../../components/icon-selector/IconSelector";
import ManufacturingPhase from "../../../components/text/ManufacturingPhase";
// Impacts
import Environmental from "../../../components/impacts/Environmental";
import Social from "../../../components/impacts/Social";
/* Scroll to top */
import ScrollUpDesktop from "../../../components/scroll-up/desktop-scroll-up/ScrollUpDesktop";
/* Jump to main content */ 
import ScrollToMain from "../../../components/scroll-to-main/ScrollToMain";

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
                        style={{color: '#BD2EC2', fontSize: '3em', marginTop: '-70px'}}> 
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
                        <button tabIndec="0        " role="button" onClick={e => {
                                this.handleEnvironmentalClick(e);
                            }}  style={{height: '100px', width: '45%', backgroundColor: 'lightgrey', textAlign: 'center', color: 'black', display: 'inline-block',marginLeft: '2.5%'}}> <h2>Environmental impacts</h2><p>In the manufacturing phase, environmental impacts blablablabla..</p></button>
                        
                        <button tabIndec="0        " role="button" onClick={e => {
                                this.handleSocialClick(e);
                            }}  style={{height: '100px', width: '45%', backgroundColor: 'lightgrey', textAlign: 'center', color: 'black', display: 'inline-block',marginLeft: '2.5%'}}> <h2>Social impacts</h2><p>In the manufacturing phase, social impacts blablablabla..</p></button>
                    </div>
                    <Footer />
                    <ScrollUpDesktop />
                </div>
            </div>
        );
    }
}

export default DesktopContent;
