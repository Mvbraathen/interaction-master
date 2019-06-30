import React from 'react';
import Fade from "react-reveal/Fade";

class EcotoxicityMobile extends React.Component {
	render() {
        return (
            <Fade duration={1000}>
                <div className="info-box">
                    <h1 className="info-header"> Ecotoxicity </h1>
                    <div>
                        <div className="image-container">
                            <img alt="waste" width="100%" src={require('./images/Ecotoxicity.jpg')} />
                            <div className="image-credit"> Photo by <a href="https://unsplash.com/@john_cameron?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> John Cameron</a></div>
                        </div>
                        <div style={{textAlign: 'justify'}} className="info-positioning">
                            Emissions of toxic and long-lived substances such as synthetic organic pollutants, heavy metal compounds and radioactive materials affecting ecosystems. Hazardous materials are both used and produced in the mobile phone lifecycle. For example, in artisanal mining, mercury and cyanide are used to process gold from ore and uranium and cadmium are by-products of cobalt mining and cobalt processing.
                        </div>
                    </div>
                </div>
            </Fade>
        );
	}
}

export default EcotoxicityMobile;