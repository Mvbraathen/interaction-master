import React from 'react';
import Fade from "react-reveal/Fade";

class AcidificationMobile extends React.Component {
	render() {
        return (
            <Fade duration={1000}>
                <div className="info-box">
                    <h1 
                        className="impact-box-header"> 
                        Acidification
                    </h1>
                    <div className="image-container">
                        <img alt="ocean" width="100%" src={require('./images/Acidification.jpg')} />
                        <a
                            className="image-credit" 
                            href="https://unsplash.com/@matthardy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> 
                            Matt Hardy
                        </a>
                    </div>
                    <div className="info-positioning">
                        <p>Acidification refers to the decrease of the ocean’s pH-level as a result of uptake of
                        CO 2 . Acidification of water bodies is the result of mining and processing of, for
                        example, gold, fossil fuels, and aluminium. Acidification threatens 
                        {' '}
                        <a 
                            className="inline-link-style" 
                            title="link to future of life institute website"  
                            href="https://futureoflife.org/2018/02/22/as-acidification-increases-ocean-biodiversity-may-decline/?cn-reloaded=1">
                            aquatic life
                        </a>
                        {' '}
                        (see <i>Ecotoxicity</i>) 
                        and 

                        {' '}
                        <a 
                            className="inline-link-style" 
                            title="link to scientific american website"  
                            href="https://www.scientificamerican.com/article/like-oceans-freshwater-is-also-acidifying/">
                            drinking water
                        </a>
                        {' '}

                        (see <i>Drinking water pollution</i> in social impacts).</p>
                    </div>
                </div>
            </Fade>
        );
	}
}

export default AcidificationMobile;