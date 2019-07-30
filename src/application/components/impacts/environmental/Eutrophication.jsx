import React from 'react';
import Fade from "react-reveal/Fade";

class EutrophicationMobile extends React.Component {
	render() {
        return (
            <Fade duration={1000}>
                <div className="info-box">
                    <h2 className="impact-box-header"> Eutrophication </h2>
                    <div>
                        <div className="image-container">
                            <img alt="bubbles under water" width="100%" src={require('./images/Eutrophication.jpg')} />
                            <a 
                                className="image-credit"
                                href="https://unsplash.com/@turnlip19?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> 
                                Jong Marshes
                            </a>
                        </div>
                        <div className="info-positioning">
                            <p> 
                                Eutrophication refers to the increase of nutrients in a body of water, causing
                                structural changes to an ecosystem. Eutrophication can be the result of mining
                                activities (gold, copper, cobalt, etc.) and run-offs from mining activities, such as
                                
                                {' '}
                                <a 
                                    className="inline-link-style" 
                                    title="link to wikipedia"  
                                    href="https://en.wikipedia.org/wiki/Acid_mine_drainage">
                                    acid mine drainage
                                </a>. 
                                Eutrophication is also found in bodies of water near sites of
                                electronics manufacturing as a result of emissions of wastewater containing
                                toxic materials, as well as in bodies of water near sites where electronics are
                                disassembled.
                            </p>
                        </div>
                    </div>
                </div>
            </Fade>
        );
	}
}

export default EutrophicationMobile;