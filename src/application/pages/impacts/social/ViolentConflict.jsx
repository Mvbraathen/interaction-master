import React from 'react';
import Fade from "react-reveal/Fade";

class ViolentConflictMobile extends React.Component {
	render() {
        return (
            <Fade duration={1000}>
                <div className="info-box">
                    <h1 className="info-header"> Violent conflict </h1>
                    <div>
                        <div className="image-container">
                            <img alt="armed man" width="100%" src={require('./images/ViolentConflict.jpg')} />
                            <div className="image-credit">
                                <a href="https://unsplash.com/@specna_arms_4s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> 
                                    Specna Arms
                                </a>
                            </div>
                        </div>
                        <div className="info-positioning">
                            An armed conflict is a violent contestation between two or more organisations (often political organisations such as governments, insurgents), and which results in a significant damage number of casualties over a defined time period (e.g. 25 deaths per year). Armed conflict has been associated with the production of minerals.
                        </div>
                    </div>
                </div>
            </Fade>
        );
	}
}

export default ViolentConflictMobile;