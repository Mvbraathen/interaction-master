import React from 'react';
import Fade from "react-reveal/Fade";

class DiscriminationMobile extends React.Component {
	render() {
        return (
            <Fade duration={1000}>
                <div className="info-box">
                    <h1 
                        className="impact-box-header">
                        Discrimination 
                    </h1>
                    <div>
                        <div className="image-container">
                            <img alt="people demonstrating" width="100%" src={require('./images/Discrimination.jpg')} />
                            <a 
                                className="image-credit"
                                href="https://unsplash.com/@historyhd?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> 
                                History in HD
                            </a>
                        </div>
                        <div className="info-positioning">
                            <p>
                                Social equity is a general concept, which applies notions of justice 
                                and fairness in social policy. Migrant workers and their families are 
                                often discriminated against.
                            </p>
                        </div>
                    </div>
                </div>
            </Fade>
        );
	}
}

export default DiscriminationMobile;