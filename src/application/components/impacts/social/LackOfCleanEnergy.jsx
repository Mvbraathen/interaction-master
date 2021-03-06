import React from 'react';
import Fade from "react-reveal/Fade";

class LackOfCleanEnergyMobile extends React.Component {
	render() {
        return (
            <Fade duration={1000}>
                <div className="info-box">
                    <h2 
                        className="impact-box-header">
                        Lack of clean energy
                    </h2>
                    <div>
                        <div className="image-container">
                            <img alt="burning coal" width="100%" src={require('./images/LackOfCleanEnergy.jpg')} />
                            <a
                                className="image-credit"
                                href="https://unsplash.com/@thomasq?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> 
                                Thomas Q
                            </a>
                        </div>
                        <div className="info-positioning">
                            <p>
                                Access to electricity is a critical issue in all aspects of sustainable development. 
                                Data is scarce but the World Bank has launched efforts to map access. The cleanliness 
                                of energy is covered by the climate gas emissions categories above.
                            </p>
                        </div>
                    </div>
                </div>
            </Fade>
        );
	}
}

export default LackOfCleanEnergyMobile;