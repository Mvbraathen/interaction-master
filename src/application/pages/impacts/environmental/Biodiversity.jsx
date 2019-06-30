import React from 'react';
import Fade from "react-reveal/Fade";

class BiodiversityMobile extends React.Component {
	render() {
        return (
            <Fade duration={1000}>
                <div className="info-box">
                    <h1 className="info-header"> Biodiversity </h1>
                    <div>
                        <div className="image-container">
                            <img alt ="panda" width="100%" src={require('./images/Biodiversity.jpg')} />
                            <div className="image-credit"> Photo by <a href="https://unsplash.com/@umbriferous?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Theodor Lundqvist</a></div>
                        </div>
                        <div style={{textAlign: 'justify'}} className="info-positioning">
                            Biodiversity loss, the drastic reduction or even extinction of certain species in a habitat.  Both artisanal and industrial mining have contributed to the destruction of local habitats (see also Deforestation), resulting in a decline and even extinction of species in particular countries. 
                        </div>
                    </div>
                </div>
            </Fade>
        );
	}
}

export default BiodiversityMobile;