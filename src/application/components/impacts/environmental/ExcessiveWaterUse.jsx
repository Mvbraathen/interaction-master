import React from 'react';
import Fade from "react-reveal/Fade";

class ExcessiveWaterUseMobile extends React.Component {
	render() {
        return (
            <Fade duration={1000}>
                <div className="info-box">
                    <h2 className="impact-box-header"> Excessive water use </h2>
                    <div>
                        <div className="image-container">
                            <img alt="dry cracked land" width="100%" src={require('./images/ExcessiveWaterUse.jpg')} />
                            <a
                                className="image-credit" 
                                href="https://unsplash.com/@mparente?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> 
                                Micaela Parente
                            </a>
                        </div>
                        <div className="info-positioning">
                            <p>
                                Excessive water use is a well-known problem in mining. It affects the availability
                                of drinking water for humans and animals and results in 
                                {' '}
                                <a 
                                    className="inline-link-style" 
                                    title="link to the guardian website"  
                                    href="https://www.theguardian.com/environment/2018/may/16/water-shortages-to-be-key-environmental-challenge-of-the-century-nasa-warns">
                                    environmental degradation
                                </a>
                                {' '}
                                (Read more about{' '}
                                <a 
                                    className="inline-link-style" 
                                    title="link to mining with principles website"  
                                    href="https://miningwithprinciples.com/water/">
                                    sustainable water use
                                </a>
                                ).
                            </p>
                        </div>
                    </div>
                </div>
            </Fade>
        );
	}
}

export default ExcessiveWaterUseMobile;