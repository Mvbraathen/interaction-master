import React from 'react';
import Fade from "react-reveal/Fade";

class EcotoxicityMobile extends React.Component {
	render() {
        return (
            <Fade duration={1000}>
                <div className="info-box">
                    <h1 id="jumpToEcotoxicity" className="info-header"> Ecotoxicity </h1>
                    <div>
                        <div className="image-container">
                            <img alt="waste" width="100%" src={require('./images/Ecotoxicity.jpg')} />
                            <a
                                className="image-credit" 
                                href="https://unsplash.com/@john_cameron?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> 
                                John Cameron
                            </a>
                        </div>
                        <div className="info-positioning">
                            <p>
                                Ecotoxicity refers to the missions of toxic and long-lived substances such as
                                {' '}
                                <a 
                                    className="inline-link-style" 
                                    title="link to wikipedia"  
                                    href="https://en.wikipedia.org/wiki/Persistent_organic_pollutant">
                                    persistent organic pollutants
                                </a>, 
                                heavy metal compounds and radioactive materials
                                during resource extraction, affecting ecosystems. Hazardous materials are both
                                used and produced in the mobile phone lifecycle. For example, in artisanal
                                mining, mercury and cyanide are used to process gold from ore and uranium and
                                cadmium are by-products of cobalt mining and cobalt processing.
                            </p>
                            <p>
                                Thousands of tonnes of mercury are emitted each year through releases to air,
                                land, and water. The most significant emissions come from human activities,
                                particularly
                                {' '}
                                <a 
                                    className="inline-link-style" 
                                    title="link to article on artisanal mining website"  
                                    href="http://www.artisanalmining.org/Repository/01/The_CASM_Files/CASM_Projects/Topic_Mercury/Pg108-150EnvrHealth.pdf">
                                    artisanal and small-scale gold mining
                                </a>.
                            </p>
                        </div>
                    </div>
                </div>
            </Fade>
        );
	}
}

export default EcotoxicityMobile;