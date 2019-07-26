import React from 'react';
import Fade from "react-reveal/Fade";

class PrecariousWorkMobile extends React.Component {
	render() {
        return (
            <Fade duration={1000}>
                <div className="info-box">
                    <h2 
                        className="impact-box-header">
                        Precarious work 
                    </h2>
                    <div>
                        <div className="image-container">
                            <img alt="dangerous work environment" width="100%" src={require('./images/PrecariousWork.jpg')} />
                            <a 
                                className="image-credit"
                                href="https://unsplash.com/@matthardy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> 
                                Matt Hardy
                            </a>
                        </div>
                        <div className="info-positioning">
                            <p>
                                Work is deemed precarious when it subjects workers to unstable or 
                                dangerous with little social or trade union protections.  The term 
                                is often used in opposition to the goal of Decent Work and is 
                                associated with short-term contract work and outsourcing. Women, 
                                minorities and migrant workers are much more likely to end up in 
                                jobs characterised as precarious and precarious work has been found 
                                among artisanal miners factory workers (in the Manufacturing phase) 
                                and workers involved in e-waste disposal tend to be particularly 
                                vulnerable to downward pressure on wage levels.
                            </p>
                            <p>
                                Precariousness has several dimensions: temporal (low certainty over 
                                continuity of employment); organisational (lack of worker control over 
                                working conditions, e.g. shifts, work intensity, pay, health and safety); 
                                economic (poor pay); social (few legal protections against e.g. 
                                unfair dismissal, discrimination) and social protection (e.g. 
                                health coverage, unemployment insurance). Informal work is work 
                                undertaken without contract or legal regulation. Informal workers 
                                may be organised but they often are not, leading to higher risks 
                                of non-payment of wages, compulsory overtime or extra shifts, 
                                lay-offs without notice or compensation, unsafe working conditions 
                                and the absence of social benefits such as pensions, sick pay and 
                                health insurance. Vulnerable workers such as women and migrants are 
                                often over-represented in the informal labour market.
                            </p>
                        </div>
                    </div>
                </div>
            </Fade>
        );
	}
}

export default PrecariousWorkMobile;