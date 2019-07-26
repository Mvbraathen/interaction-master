import React from 'react';
import Fade from "react-reveal/Fade";

class HumanToxicityMobile extends React.Component {
	render() {
        return (
            <Fade duration={1000}>
                <div className="info-box">
                    <h2 
                        className="impact-box-header">
                        Human toxicity
                    </h2>
                    <div>
                        <div className="image-container">
                            <img alt="street with smoke" width="100%" src={require('./images/HumanToxicity.jpg')} />
                            <a 
                                className="image-credit"
                                href="https://unsplash.com/@ev?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> 
                                ev
                            </a>
                        </div>
                        <div className="info-positioning">
                            <p>
                                Emissions of toxic and long-lived substances such as synthetic organic pollutants, 
                                heavy metal compounds and radioactive materials affecting humans. Miners and 
                                communities working and living around mines and processing plants have a high risk 
                                of increased levels of concentrations of toxic materials in their blood. Many of 
                                these materials can result in acute or long-term health problems. Workers in the 
                                electronics industry and communities living near these facilities have a high risk 
                                of increased levels of concentrations of toxic materials in their blood. Many of 
                                these materials can result in acute or long-term health problems. Workers in the 
                                electronic waste, both informal and industrial, and communities living near these 
                                facilities, have a high risk of increased levels of concentrations of toxic 
                                materials in their blood. Many of these materials can result in acute or long-term 
                                health problems.
                            </p>
                        </div>
                    </div>
                </div>
            </Fade>
        );
	}
}

export default HumanToxicityMobile;