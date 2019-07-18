import React from 'react';
import Fade from "react-reveal/Fade";

class DeforestationMobile extends React.Component {
	render() {
        return (
            <Fade duration={1000}>
                <div className="info-box">
                    <h1 className="info-header"> Deforestation </h1>
                    <div>
                        <div className="image-container">
                            <img alt="lumber" width="100%" src={require('./images/Deforestation.jpg')} />
                            <a
                                className="image-credit" 
                                href="https://unsplash.com/@alessiofurlan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> 
                                Alessio Furlan
                            </a>
                        </div>
                        <div className="info-positioning">
                            Deforestation refers to the removal of a forest or stand of trees, converting land-
                            use to non-forest. This is especially the case in forested areas with mineral
                            deposits (see also Land use change) (read more about 
                            
                            {' '}
                            <a 
                                className="inline-link-style" 
                                title="link to cobalt blues publication"  
                                href="https://www.somo.nl/cobalt-blues/">
                                environmental pollution
                            </a>).   
                        </div>
                    </div>
                </div>
            </Fade>
        );
	}
}

export default DeforestationMobile;