import React from 'react';

class Co2 extends React.Component {
	render() {
        return (
            <div>
            	<div className="image-container">
                    <img width="100%" src={require('./images/Co2.jpg')} />
                    <div className="image-credit"> Photo by <a href="https://unsplash.com/@veeterzy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> veeterzy</a></div>
                </div>
                <div className="info-positioning">
                	The emission of carbon dioxide as a result of human activity, such as the burning of fossil fuels and deforestation. CO2 emissions can be found throughout the whole mobile phone lifecycle.
                </div>
            </div>
        );  
	}
}

export default Co2;