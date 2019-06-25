import React from 'react';

class PollutedDrinkingWater extends React.Component {
	render() {
        return (
            <div>
                <div className="image-container">
                    <img width="100%" src={require('./images/PollutedDrinkingWater.jpg')} />
                    <div className="image-credit"> Photo by <a href="https://unsplash.com/@belart84?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Artem Beliaikin</a></div>
                </div>
                <div className="info-positioning">
                    Access to clean drinking water is a human right. Pollution of drinking 
                    water as a result of chemical pollution is in particular found in and 
                    around mining sites (Resource Extraction), near electronic industries, 
                    and near informal electronic waste disassembling sites.
                </div>
            </div>
        );
	}
}

export default PollutedDrinkingWater;