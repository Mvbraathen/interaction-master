import React from 'react';
import Fade from "react-reveal/Fade";

class AcidificationMobile extends React.Component {
	render() {
        return (
            <Fade duration={1000}>
                  <div className="page-one">
                    <h1 className="info-header"> Acidification</h1>
                    <div>
                        <div className="image-container">
                            <img alt="ocean" width="100%" src={require('./images/Acidification.jpg')} />
                            <div className="image-credit"> Photo by <a href="https://unsplash.com/@matthardy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Matt Hardy</a></div>
                        </div>
                        <div style={{textAlign: 'justify'}} className="info-positioning">
                            Decrease of the ocean’s pH-level as a result of uptake of CO2. 
                            Acidification of water bodies is the result of mining and 
                            processing of, for example, gold, fossil fuels, and aluminium. 
                            Acidification threatens aquatic life (Ecotoxicity) and drinking 
                            water (Drinking water pollution).
                        </div>
                    </div>
                </div>
            </Fade>
        );
	}
}

export default AcidificationMobile;