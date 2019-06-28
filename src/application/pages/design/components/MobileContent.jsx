import React from "react";
import Mobile from "../../../menus/mobile/Mobile";
import MobileHeader from "../../components/MobileHeader";
import MobileFooter from "../../components/MobileFooter";
import Fade from "react-reveal/Fade";

class MobileContent extends React.Component {
  render() {

    const pageHeader = "Design";

    return (
      <div className="mobilePage">
        <Mobile />
        <div className="mobileContent">
          <MobileHeader pageHeader={pageHeader} />
          <div style={{marginTop: '100px', width: '95%', marginLeft: '2.5%'}}>
            <Fade duration={1000}>
                  <div className="page-one">
                    <h1 className="info-header"> Where all decisions are made </h1>
                    <div>
                        <div className="image-container">
                            <img alt="broken iphone" width="100%" src={require('../../images/broken-iphone.jpg')} />
                            <div className="image-credit"> Photo by <a href="https://unsplash.com/@_actually_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Ali Abdul Rahman</a></div>
                        </div>
                        <div style={{textAlign: 'justify'}} className="info-positioning">
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
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                        <button className="page-one-button"> Visit SMART for more info </button>
                    </a>
                </div>
            </Fade>
          </div>
          <div className="footer">
            <MobileFooter />
          </div>
        </div>
      </div>
    );
  }
}

export default MobileContent;
