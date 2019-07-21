import React from 'react';
import Fade from "react-reveal/Fade";

class ParticulateMatterMobile extends React.Component {
	render() {
        return (
            <Fade duration={1000}>
                <div className="info-box">
                    <h1 className="impact-box-header"> Particulate matter </h1>
                    <div>
                        <div className="image-container">
                            <img alt="burning" width="100%" src={require('./images/ParticulateMatter.jpg')} />
                            <a
                                className="image-credit"
                                href="https://unsplash.com/@thesollers?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> 
                                Anton Darius
                            </a>
                        </div>
                        <div className="info-positioning">
                            <p>
                                Particulate matter denotes solid and liquid particles in the air, organic and
                                inorganic, mostly hazardous (read more about 
                                {' '}
                                <a 
                                    className="inline-link-style" 
                                    title="link to wikipedia"  
                                    href="https://en.wikipedia.org/wiki/Particulates">
                                    particulates
                                </a>). Mining and smelting operations
                                produce a large amount of particulate matter, containing a wide variety of
                                materials, such as iron, aluminium, 
                                {' '}
                                <a 
                                    className="inline-link-style" 
                                    title="link to new york state DEC website"  
                                    href="https://www.dec.ny.gov/chemical/8519.html">
                                    mercury
                                </a>, etc.
                            </p>    
                        </div>
                    </div>
                </div>
            </Fade>
        );
	}
}

export default ParticulateMatterMobile;