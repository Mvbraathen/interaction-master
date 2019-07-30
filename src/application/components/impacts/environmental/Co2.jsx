import React from 'react';
import Fade from "react-reveal/Fade";

class Co2Mobile extends React.Component {
	render() {
        return (
            <Fade duration={1000}>
                <div className="info-box">
                    <h2 className="impact-box-header"> 
                        CO<sub>2</sub> 
                    </h2>
                    <div>
                        <div className="image-container">
                            <img alt="factory chimney with grey smoke" width="100%" src={require('./images/Co2.jpg')} />
                            <a
                                className="image-credit" 
                                href="https://unsplash.com/@veeterzy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> 
                                veeterzy
                            </a>
                        </div>
                        <div className="info-positioning">
                            <p>
                                The emission of carbon dioxide (CO<sub>2</sub>) as a result of the burning of fossil fuels and
                                deforestation during mining operations. The smelting and processing of mined
                                minerals are another important source of CO<sub>2</sub> emissions (read more about 

                                {' '}
                                <a 
                                    className="inline-link-style" 
                                    title="link to the guardian website"  
                                    href="https://www.theguardian.com/environment/2019/mar/12/resource-extraction-carbon-emissions-biodiversity-loss">
                                    carbon emissions
                                </a>).
                            </p>
                        </div>
                    </div>
                </div>
            </Fade>
        );
	}
}

export default Co2Mobile;
