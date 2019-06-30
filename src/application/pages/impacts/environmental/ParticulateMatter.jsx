import React from 'react';
import Fade from "react-reveal/Fade";

class ParticulateMatterMobile extends React.Component {
	render() {
        return (
            <Fade duration={1000}>
                <div className="info-box">
                    <h1 className="info-header"> Particulate matter </h1>
                    <div>
                        <div className="image-container">
                            <img alt="burning" width="100%" src={require('./images/ParticulateMatter.jpg')} />
                            <div className="image-credit"> Photo by <a href="https://unsplash.com/@thesollers?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Anton Darius</a></div>
                        </div>
                        <div style={{textAlign: 'justify'}} className="info-positioning">
                            Solid and liquid particles in the air, organic and inorganic, mostly hazardous. Mining and smelting operations produce a large amount of particulate matter, containing a wide variety of materials, such as iron, aluminium, mercury, etc. Particulate matter emissions are also related to the use of diesel vehicles. The burning of electronic waste contributes to high emissions of foe example nitrogen oxides, sulphuric acid, chlorine, and volatile organic compounds (VOCs).
                        </div>
                    </div>
                </div>
            </Fade>
        );
	}
}

export default ParticulateMatterMobile;