import React from 'react';
import Fade from "react-reveal/Fade";

class DiscriminationMobile extends React.Component {
	render() {
        return (
            <Fade duration={1000}>
                  <div className="page-one">
                    <h1 className="info-header"> Discrimination </h1>
                    <div>
                        <div className="image-container">
                            <img alt="people demonstrating" width="100%" src={require('./images/Discrimination.jpg')} />
                            <div className="image-credit"> Photo by <a href="https://unsplash.com/@historyhd?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> History in HD</a></div>
                        </div>
                        <div className="info-positioning">
                            Social equity is a general concept, which applies notions of justice and fairness in social policy. Migrant workers and their families are often discriminated against.
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

export default DiscriminationMobile;