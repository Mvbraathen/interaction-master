import React from 'react';
import { Twitter } from 'react-social-sharing';
import { Facebook } from 'react-social-sharing';
import { Mail } from 'react-social-sharing';
import { Linkedin } from 'react-social-sharing';
import './Footer.css';

class Footer extends React.Component {

	render() {
        return (
            <div>
                <div style={{height: '10px'}}> </div>
                <div className="footer">
        			<div className="footer-info">
                        <p className="footer-text-first-section">
                            This website is designed and developed by Marius Bråthen and Vebjørn
                            Grønnhaug, master students at the Dept. of Informatics, University of Oslo. The
                            circular lifecyle is designed by master student Olga Skachkova. The textual content is based
                            on the SMART report <i>Sustainability Hotspots Analysis of the Mobile Phone
                            Lifecycle</i>, written by Maja van der Velden and Mark Taylor and is available in 
                            PDF format here:{' '} 
                            <a  
                                className="smart-link" 
                                title="link to smart report" 
                                href="https://www.smart.uio.no/publications/reports/sustainability-hotspots-analysis-of-the-mobile-phone-lifecycle.pdf"> 
                                SMART report
                            </a>
                        </p>

                        <div className="social-network">
                            <div className="share-text"> Share on social media: </div>
                            <div style={{marginLeft: '-7px'}}>
                                <Facebook 
                                    className="social" 
                                    style={{border: 'solid 1px orange'}} 
                                    solid small 
                                    message="Learn more about the mobile lifecycle!" 
                                    link="https://smart.uio.no" 
                                />

                                <Twitter 
                                    className="social" 
                                    style={{border: 'solid 1px orange'}} 
                                    solid small 
                                    message="Learn more about the mobile lifecycle!" 
                                    link="https://smart.uio.no" 
                                />

                                <Mail 
                                    className="social" 
                                    style={{border: 'solid 1px orange'}} 
                                    solid small 
                                    message="Learn more about the mobile lifecycle!" 
                                    link="https://smart.uio.no" 
                                />

                                <Linkedin 
                                    className="social" 
                                    style={{border: 'solid 1px orange'}} 
                                    solid small 
                                    message="Learn more about the mobile lifecycle!" 
                                    link="https://smart.uio.no" 
                                />
                            </div>
                        </div>
                        <p className="footer-text-second-section">
                            SMART has received funding from the European Union’s Horizon
                            2020 research and innovation programme under grant agreement No
                            693642. The contents of this website are the sole responsibility
                            of the SMART project and do not necessarily reflect the views of
                            the European Union. 
                            <br/> <br/>
                            For more information about the SMART project, please visit:{' '} 
                            <a  
                                className="smart-link" 
                                title="link to SMART's website" 
                                href="http://smart.uio.no"> 
                                http://smart.uio.no 
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;
