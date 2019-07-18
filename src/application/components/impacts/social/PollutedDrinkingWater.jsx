import React from 'react';
import Fade from "react-reveal/Fade";

class PollutedDrinkingWaterMobile extends React.Component {
	render() {
        return (
            <Fade duration={1000}>
                <div className="info-box">
                    <h1 id="drinkingWaterPollution" className="info-header"> Drinking water pollution </h1>
                    <div>
                        <div className="image-container">
                            <img alt="drinking water" width="100%" src={require('./images/PollutedDrinkingWater.jpg')} />
                            <a
                                className="image-credit" 
                                href="https://unsplash.com/@belart84?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> 
                                Artem Beliaikin
                            </a>
                        </div>
                        <div className="info-positioning">
                            Access to clean drinking water is a human right. Pollution of drinking 
                            water as a result of chemical pollution is in particular found in and 
                            around mining sites (Resource Extraction), near electronic industries, 
                            and near informal electronic waste disassembling sites.
                        </div>
                    </div>
                </div>
            </Fade>
        );
	}
}

export default PollutedDrinkingWaterMobile;