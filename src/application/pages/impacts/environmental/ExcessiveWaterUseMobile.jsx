import React from 'react';
import Fade from "react-reveal/Fade";

class ExcessiveWaterUseMobile extends React.Component {
	render() {
        return (
            <Fade duration={1000}>
                  <div className="page-one">
                    <h1 className="info-header"> Excessive water use </h1>
                    <div>
                        <div className="image-container">
                            <img alt="dry land" width="100%" src={require('./images/ExcessiveWaterUse.jpg')} />
                            <div className="image-credit"> Photo by <a href="https://unsplash.com/@mparente?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Micaela Parente</a></div>
                        </div>
                        <div style={{textAlign: 'justify'}} className="info-positioning">
                            Industrial water use resulting in environmental degradation and decreasing water availability for humans and wildlife. Excessive water use is found in mining and in the manufacturing of mobile phones.
                        </div>
                    </div>
                    <a href="https://www.smart.uio.no/research/life-cycle-of-mobile-phones/">
                        <button className="page-one-button"> Read more </button>
                    </a>
                </div>
            </Fade>
        );
	}
}

export default ExcessiveWaterUseMobile;