import React from 'react';
import Fade from "react-reveal/Fade";

class LivingInSlumsMobile extends React.Component {
	render() {
        return (
            <Fade duration={1000}>
                <div className="info-box">
                    <h1 className="info-header">  Living in slums </h1>
                    <div>
                        <div className="image-container">
                            <img alt="child in street" width="100%" src={require('./images/LivingInSlums.jpg')} />
                            <a  
                                className="image-credit"
                                href="https://unsplash.com/@derickray?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> 
                                Derick McKinney
                            </a>
                        </div>
                        <div className="info-positioning">
                            Housing is about urban population living in slum housing in developing countries. Large slums have been found around informal electronic waste sites, which often lack proper sanitation, access to drinking water.
                        </div>
                    </div>
                </div>
            </Fade>
        );
	}
}

export default LivingInSlumsMobile;