import React from "react";
// Various components
import Desktop from "../../../menus/desktop/Desktop";
import DesktopHeader from "../../components/DesktopHeader";
import Breadcrumb from "../../components/Breadcrumb";
import MobileFooter from "../../components/MobileFooter";
// Styling
import "../../css/Desktop.css";
import "../../css/SubMenu.css";

class DesktopContent extends React.Component {

    render() {
        /* To select corresponding components */
        const fromPage = "design";
        
        /* To get correct header text */
        const pageHeader = "Design";
        
        return (
            <div id="design-page">

                <DesktopHeader pageHeader={pageHeader} />

                {/* Left half */}
                <div className="split left-half">
                    <div className="sub-menu-without-selection"></div>
                    <Breadcrumb fromPage={fromPage} />
                    <Desktop />
                </div>

                {/* Right half */}
                <div className="split right-half">
                    <div className="sub-menu-without-selection"></div>
                    <div style={{minHeight: '100%'}} className="content-manager">
                        <div className="default-content">
                            <h1 className="selected-info page-title" style={{color: '#E00070'}}> 
                                Where all decisions are made 
                            </h1>
                            <div style={{marginTop: '-15px', zIndex: '-1'}} className="image-container">
                                <img 
                                    alt="broken iphone" 
                                    width="100%" 
                                    src={require('../../images/broken-iphone.jpg')} 
                                />
                                <div className="image-credit">
                                    <a href="https://unsplash.com/@_actually_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> 
                                        Ali Abdul Rahman
                                    </a>
                                </div>
                            </div>
                            <div style={{textAlign: 'justify'}}>
                                Design is the lifecycle phase in which important decisions are made 
                                concerning the sustainability of a mobile phone. Choices are made in 
                                terms of materials, size, weight, but also about ease of repair, 
                                recycling or replacement of components, such as the battery. These 
                                choices will affect the health and safety of the people mining and 
                                processing the materials and the workers manufacturing the components 
                                of the mobile phone; these choices will affect the longevity of the 
                                mobile phone as well as the possibility to repair the mobile phone 
                                to extend its life.
                                <p></p> 
                                Materials, size, and weight are connected. A phone designed for 
                                repairability is thicker and weighs a bit more. A thin phone often 
                                uses glue to keep things together, making the replacement of a battery 
                                by the user impossible.
                            </div>
                        </div>
                    </div>
                    <MobileFooter />
                </div>
            </div>
        );
    }
}

export default DesktopContent;
