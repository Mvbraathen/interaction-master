import React from 'react';
import Fade from "react-reveal/Fade";

class MarginalisationMobile extends React.Component {
	render() {
        return (
            <Fade duration={1000}>
                  <div className="page-one">
                    <h1 className="info-header"> Marginalisation </h1>
                    <div>
                        <div className="image-container">
                            <img alt="money" width="100%" src={require('./images/Marginalisation.jpg')} />
                            <div className="image-credit"> Photo by <a href="https://unsplash.com/@sharonmccutcheon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Sharon McCutcheon</a></div>
                        </div>
                        <div className="info-positioning">
                            Even in tight labour markets marginalisation may also affect wage 
                            disparities, for example for women versus men, or for migrant labourers.
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

export default MarginalisationMobile;