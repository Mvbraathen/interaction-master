import React from 'react';
import Fade from "react-reveal/Fade";

class GenderInequalityMobile extends React.Component {
	render() {
        return (
            <Fade duration={1000}>
                <div className="info-box">
                    <h1 className="info-header"> Gender inequality </h1>
                    <div>
                        <div className="image-container">
                            <img alt="painted wall" width="100%" src={require('./images/GenderInequality.jpg')} />
                            <div className="image-credit">
                                <a href="https://unsplash.com/@matteopaga?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> 
                                    Matteo Paganelli
                                </a>
                            </div>
                        </div>
                        <div className="info-positioning">
                            Equality of opportunity means “women and men, and girls and boys, 
                            enjoy the same rights, resources, opportunities and protections. 
                            It does not require that girls and boys, or women and men, be the 
                            same, or that they be treated exactly alike” (UNICEF). Equality of 
                            opportunity is based on the right not to be discriminated against 
                            on the basis of gender, race, religion or national origin 
                            established as a human right by the Article 2 of the UDHR.
                        </div>
                    </div>
                </div>
            </Fade>
        );
	}
}

export default GenderInequalityMobile;