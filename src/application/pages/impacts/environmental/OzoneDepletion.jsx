import React from 'react';
import Fade from "react-reveal/Fade";

class OzoneDepletionMobile extends React.Component {
	render() {
        return (
            <Fade duration={1000}>
                <div className="info-box">
                    <h1 className="info-header"> Ozone depletion </h1>
                    <div>
                        <div className="image-container">
                            <img alt="earth from space" width="100%" src={require('./images/OzoneDepletion.jpg')} />
                            <div className="image-credit"> Photo by <a href="https://unsplash.com/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> NASA</a></div>
                        </div>
                        <div style={{textAlign: 'justify'}} className="info-positioning">
                            Decline in the planet’s ozone layer as a result of man-made chemicals. In the mobile phone life cycle we find halogenated organic emissions, as an effect of the manufacturing of aluminium (the average mobile phone consists of 14% aluminium) and the use of flame-retardants.
                        </div>
                    </div>
                </div>
            </Fade>
        );
	}
}

export default OzoneDepletionMobile;