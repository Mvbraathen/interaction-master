import React from "react";
/* Mobile menu */
import Mobile from "../../../menus/mobile/Mobile";
/* Header and footer for mobile devices */
import MobileHeader from "../../../components/mobile-header/MobileHeader";
import MobileFooter from "../../../components/mobile-footer/MobileFooter";
/* Fade effect */
import Fade from "react-reveal/Fade";

class MobileContent extends React.Component {

    render() {

        /* To get correct page header text */
        const pageHeader = "Design";

        return (
            <div>
                <Mobile />
                <div className="mobile-page">        
                    <div style={{marginTop: '70px'}} className="mobile-content">
                        <MobileHeader pageHeader={pageHeader} />
                        <div className="mobile-impacts-width">
                            <Fade duration={1000}>
                                <div className="info-box">
                                    <h1 className="info-header"> 
                                        Where all decisions are made
                                    </h1>
                                    <div>
                                        <div className="image-container">
                                            <img alt="broken iphone" width="100%" src={require('../../../images/broken-iphone.jpg')} />
                                            <div className="image-credit">
                                                <a href="https://unsplash.com/@_actually_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> 
                                                    Ali Abdul Rahman
                                                </a>
                                            </div>
                                        </div>
                                        <div className="info-positioning">
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
                            </Fade>
                        </div>
                    </div>
                </div>
                <MobileFooter />
            </div>
        );
    }
}

export default MobileContent;
