import React from "react";
// Various components
import Desktop from "../../../menus/desktop/Desktop";
import DesktopHeader from "../../../components/desktop-header/DesktopHeader";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import MobileFooter from "../../../components/mobile-footer/MobileFooter";
import Youtube from "../../../components/youtube/Youtube";


class DesktopContent extends React.Component {

    render() {    
        /* No header text on this page */
        const pageHeader = "";
        const height = "390";
        const fromPage = "home";
        
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
                            Lifecycle of mobile phones
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
                        <div className="default-content-text">
                            This is a webpage made in collaboration with the SMART project, and presents 
                            SMARTs research on the mobile lifecycle. To learn more about the different 
                            phases in mobile lifecycle, interact with the circular menu on the left side.
                            <p></p>
                            <Youtube height={height}/>
                            <p></p>
                            Mobile phones have become one of the more unsustainable consumer goods. 
                            In 2015, more than 1.5 billion new mobile phones were shipped worldwide, 
                            often replacing fully functional phones. 
                            <p id="content"></p> 
                            In the next five years, an additional one billion people are estimated 
                            to become mobile phone subscribers. The smartphone adoption rate is 
                            already at 60 per cent in the developed world and will lead smartphone 
                            growth over the next five years as the average selling price of 
                            smartphones continues to decline. This is estimated to add a further 2.9 
                            billion smartphone connections by 2020.
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
