import React from 'react';
import Fade from "react-reveal/Fade";

class Co2Mobile extends React.Component {
	render() {
        return (
            <Fade duration={1000}>
                <div className="info-box">
                    <h1 className="info-header"> 
                        Co2 
                    </h1>
                    <div>
                        <div className="image-container">
                            <img alt="chimney" width="100%" src={require('./images/Co2.jpg')} />
                            <a
                                className="image-credit" 
                                href="https://unsplash.com/@veeterzy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> 
                                veeterzy
                            </a>
                        </div>
                        <div className="info-positioning">
                            The emission of carbon dioxide (CO 2) as a result of the burning of fossil fuels and
                            deforestation during mining operations. The smelting and processing of mined
                            minerals are another important source of CO 2 emissions (read more about 

                            {' '}
                            <a 
                                className="inline-link-style" 
                                title="link to the guardian website"  
                                href="https://www.theguardian.com/environment/2019/mar/12/resource-extraction-carbon-emissions-biodiversity-loss">
                                carbon emissions
                            </a>).
                        </div>
                    </div>
                </div>
            </Fade>
        );
	}
}

export default Co2Mobile;