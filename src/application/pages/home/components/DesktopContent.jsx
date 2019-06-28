import React from "react";
import Desktop from "../../../menus/desktop/Desktop";
import DesktopHeader from "../../components/DesktopHeader";
import Fade from "react-reveal/Fade";

class DesktopContent extends React.Component {
  
    render() {

    const fromPage = "fsdfsd";
    
    return (
        <div id="home-page">
            <DesktopHeader fromPage={fromPage} />
                <div className="split left-half">
                        <div style={{position: 'absolute', paddingTop: '20px', backgroundColor: '#F5FFFA', width: '100%', textAlign: 'center', zIndex: '99', marginTop: '61px', fontFamiliy: 'Avenir Next', fontSize: '1.5em' }}> 
                            <div style={{maxWidth: '500px', margin: '0 auto'}}>
                            Hey there!
                            <span role="img" aria-label="waving hand">
                                {" "}👋{" "}
                            </span>
                            <br />
                            If you want to learn more about the Mobile Lifecycle, 
                            please interact with the circular menu below.
                            </div>
                        </div>
                    <Desktop />
                </div>
                <div className="split right-half">
                    <div style={{marginTop: '100px', marginBottom: '100px', maxWidth: '700px', fontFamiliy: 'Avenir Next', fontSize: '1.5em'}}>
                        <Fade duration={1000}>
                            <div style={{maxWdth: '90%', marginLeft: '5%', marginRight: '5%'}} className="page-one">
                                <h1 className="info-header"> Lifecycle of mobile phones </h1>
                                <div>
                                    <div className="image-container">
                                        <img alt="iphone" width="100%" src={require('../../images/iphone.jpg')} />
                                        <div className="image-credit"> Photo by <a href="https://unsplash.com/@williamtm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> William Hook</a></div>
                                    </div>
                                    <div style={{textAlign: 'justify'}} className="info-positioning">
                                        Mobile phones have become one of the more unsustainable consumer goods. 
                                        In 2015, more than 1.5 billion new mobile phones were shipped worldwide, 
                                        often replacing fully functional phones. 
                                        <p></p> 
                                        In the next five years, an additional one billion people are estimated 
                                        to become mobile phone subscribers. The smartphone adoption rate is 
                                        already at 60 per cent in the developed world and will lead smartphone 
                                        growth over the next five years as the average selling price of 
                                        smartphones continues to decline. This is estimated to add a further 2.9 
                                        billion smartphone connections by 2020.
                                        <p></p>
                                        Yet, the average lifespan of a mobile phone has decreased significantly. 
                                        The rapid evolution of mobile technology, supported by marketing and 
                                        promotion campaigns, is making mobile phones prematurely obsolete and 
                                        transforming the device into a disposable product. The mobile phone 
                                        industry is an extremely competitive and litigious sector, and it is 
                                        associated with conflict minerals, labour rights issues and unsustainable 
                                        e-waste practices.
                                        <p></p>
                                        The high tech electronics sector is characterised by a global value chain 
                                        that integrates the economies of developing countries to the European 
                                        economy through the lifecycle of high-tech products. In order to understand 
                                        the challenges to policy coherence for development, arising from trade and 
                                        finance activities, it is important to understand the environmental and 
                                        social externalities that occur in these product lifecycles and how they 
                                        are maintained.
                                        <p></p>
                                        Mobile phones have global supply chains, which often start in a developing 
                                        country such as DR Congo, Rwanda, Tanzania, and Uganda. These countries 
                                        provide the raw materials, which after processing in Malaysia are used in 
                                        the manufacturing of mobile phones in China and Vietnam. The disposal or 
                                        recycling of mobile phones also takes place developing countries. Nigeria 
                                        and Ghana are the largest ports in Africa for the import of e-waste. The 
                                        unsustainable disposal and recycling of e-waste has important social and 
                                        environmental consequences. There is also significant illegal trade in e-waste, 
                                        which is linked with organised crime . According to ILO, 80 per cent of the 
                                        e-waste from developed countries ends up in developing countries such as Ghana, 
                                        Nigeria, India, and China.
                                        <p></p>
                                        Our research takes a life cycle approach to mobile phones: from conception as 
                                        technology design to the mining of minerals in Africa and South America to make 
                                        its materials; from the manufacturing sites in Asia to mobile phone use in 
                                        Europe; and finally from repair, recycling and discarding.
                                    </div>
                                </div>
                                <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                                    <button className="page-one-button"> Visit SMART for more info </button>
                                </a>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        );
    }
}

export default DesktopContent;
