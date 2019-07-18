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
                            <a
                                className="image-credit" 
                                href="https://unsplash.com/@umbriferous?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> 
                                Theodor Lundqvist
                            </a>
                        </div>
                        <div className="info-positioning">
                            <p>Biodiversity loss, the drastic reduction or even 

                            {' '}
                            <a 
                                className="inline-link-style" 
                                title="link to national geographic website"  
                                href="https://www.nationalgeographic.com/animals/reference/extinct-species/">
                                extinction
                            </a>
                            {' '} 

                            of certain species in a habitat.  Both artisanal 
                            and industrial mining have contributed to the 
                            destruction of local habitats (see also 
                                Deforestation), resulting in a decline and 
                            even extinction of species in particular countries (read more about 

                            {' '}
                            <a 
                                className="inline-link-style" 
                                title="link to united nations environment website"  
                                href="https://www.unenvironment.org/news-and-stories/story/moving-global-mining-industry-towards-biodiversity-awareness">
                                biodiversity awareness
                            </a>).</p> 
                        </div>
                    </div>
                </div>
            </Fade>
        );
	}
}

export default BiodiversityMobile;