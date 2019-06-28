import React from 'react';
import Fade from "react-reveal/Fade";

class Co2Mobile extends React.Component {
	render() {
        return (
            <Fade duration={1000}>
                  <div className="page-one">
                    <h1 className="info-header"> Co2 </h1>
                    <div>
                        <div className="image-container">
                            <img alt="chimney" width="100%" src={require('./images/Co2.jpg')} />
                            <div className="image-credit"> Photo by <a href="https://unsplash.com/@veeterzy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> veeterzy</a></div>
                        </div>
                        <div style={{textAlign: 'justify'}} className="info-positioning">
                            The emission of carbon dioxide as a result of human activity, such as the burning of fossil fuels and deforestation. CO2 emissions can be found throughout the whole mobile phone lifecycle.
                        </div>
                    </div>
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                        <button className="page-one-button"> Read more </button>
                    </a>
                </div>
            </Fade>
        );
	}
}

export default Co2Mobile;