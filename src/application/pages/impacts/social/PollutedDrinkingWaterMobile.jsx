import React from 'react';
import Fade from "react-reveal/Fade";

class PollutedDrinkingWaterMobile extends React.Component {
	render() {
        return (
            <Fade duration={1000}>
                  <div className="page-one">
                    <h1 className="info-header"> Polluted drinking water </h1>
                    <div>
                        <div className="image-container">
                            <img alt="drinking water" width="100%" src={require('./images/PollutedDrinkingWater.jpg')} />
                            <div className="image-credit"> Photo by <a href="https://unsplash.com/@belart84?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Artem Beliaikin</a></div>
                        </div>
                        <div className="info-positioning">
                            Access to clean drinking water is a human right. Pollution of drinking 
                            water as a result of chemical pollution is in particular found in and 
                            around mining sites (Resource Extraction), near electronic industries, 
                            and near informal electronic waste disassembling sites.
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

export default PollutedDrinkingWaterMobile;