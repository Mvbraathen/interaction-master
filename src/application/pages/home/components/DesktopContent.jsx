import React from "react";
// Various components
import Desktop from "../../../menus/desktop/Desktop";
import DesktopHeader from "../../../components/desktop-header/DesktopHeader";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import MobileFooter from "../../../components/mobile-footer/MobileFooter";

class DesktopContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { word: 'design', bGColor: '#E00070' };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if(this.state.word === 'design') {
            this.setState({ word: 'resource extraction', bGColor: '#00AD00' });
        }
        if(this.state.word === 'resource extraction') {
            this.setState({ word: 'manufacturing', bGColor: '#BD2EC2' });
        }
        if(this.state.word === 'manufacturing') {
            this.setState({ word: 'transport', bGColor: '#0066FF' });
        }
        if(this.state.word === 'transport') {
            this.setState({ word: 'use', bGColor: '#EB0000' });
        }
        if(this.state.word === 'use') {
            this.setState({ word: 'end of life', bGColor: '#C75000' });
        }
        if(this.state.word === 'end of life') {
            this.setState({ word: 'design', bGColor: '#E00070' });
        }
    }

    render() {    
        /* No header text on this page */
        const pageHeader = "";
        const fromPage = "home";

        let word = this.state.word;
        
        return (
            <div>
                <DesktopHeader pageHeader={pageHeader} />
                <div className="new-sub-menu">
                    <Breadcrumb fromPage="Home" />
                </div>
                {/* Left half */}
                <div className="split left-half">
                    {/*<div style={{position: 'absolute', marginTop: '151px', marginLeft: '5%', marginRight: '5%', color: 'red', fontFamily: 'Avenir Next', fontSize: '1.5em'}}> To navigate, please interact with the circular menu below </div>*/}
                    <div className="sub-menu-without-selection"></div>
                    <Desktop fromPage={fromPage} />
                </div>
                <hr className="vertical-line" />
                {/* Right half */}
                <div  className="split right-half">
                    <div id="top"  className="sub-menu-without-selection"></div>
                    <div className="right-half-content">
                        <h1 
                            className="desktop-page-title" 
                            style={{color: '#33333'}}> 
                            <a href="http://smart.uio.no" 
                                    className="home-smart">
                                    SMART
                            </a>
                            research
                        </h1>
                        
                        {/*<div className="image-container" style={{zIndex: '-99'}}>
                            <img 
                                alt="iphone" 
                                width="100%" 
                                src={require('../../../images/iphone.jpg')} 
                            />
                            <div className="image-credit"> 
                                <a href="https://unsplash.com/@williamtm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> 
                                    William Hook
                                </a>
                            </div>
                        </div>*/}
                        <div style={{fontSize: '1.5em'}} className="default-content-text">
                            <h2 style={{fontSize: '3em', fontWeight: '800', marginTop: '-20px', lineHeight: '80px'}}> 
                                The mobile <div style={{display: 'inline-block'}}>{word}</div> lifecycle 
                            </h2>

                            <div style={{marginTop: '-40px', backgroundColor: 'pink', padding: '20px'}}>
                                Hey, there <span aria-label="waving hand" role="img">👋 </span> 
                                To learn more about the 

                                <div style={{backgroundColor: this.state.bGColor}} id="loading" className="home-interact" onClick={this.handleClick}>
                                    {word}
                                </div> 

                                phase in mobile lifecycle, interact 
                                with the circular menu on the left side <span aria-label="waving hand" role="img">👈</span>
                            </div>
                        </div>

                        <div>
                      </div>
                    </div>
                    <MobileFooter />
                    <a href="#top">
                        <button 
                            style={{
                                position: 'fixed',
                                bottom: '0',
                                right: '0',
                                marginRight: '20px',
                                marginBottom: '20px',
                                backgroundColor: 'rgba(1, 1, 1, 0.3)',
                                color: 'rgba(255, 255, 255, 1)',
                                height: '60px',
                                width: '60px',
                                borderRadius: '30px',
                                verticalAlign: 'middle',
                                fontSize: '1.8em',
                                lineHeight: '60px',
                                cursor: 'pointer'
                            }}> 
                            <span role="img" aria-label="Finger pointing upwards"> ☝️ </span> 
                        </button>
                    </a>
                </div>
            </div>

        );
    }
}

export default DesktopContent;
