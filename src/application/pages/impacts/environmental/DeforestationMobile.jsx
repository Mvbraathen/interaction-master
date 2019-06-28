import React from 'react';
import Fade from "react-reveal/Fade";

class DeforestationMobile extends React.Component {
	render() {
        return (
            <Fade duration={1000}>
                  <div className="page-one">
                    <h1 className="info-header"> Deforestation </h1>
                    <div>
                        <div className="image-container">
                            <img alt="lumber" width="100%" src={require('./images/Deforestation.jpg')} />
                            <div className="image-credit"> Photo by <a href="https://unsplash.com/@alessiofurlan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Alessio Furlan</a></div>
                        </div>
                        <div style={{textAlign: 'justify'}} className="info-positioning">
                            Removal of a forest or stand of trees, converting land-use to non-forest. This is especially the case in forested areas with mineral deposits (see also Land use change).
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

export default DeforestationMobile;