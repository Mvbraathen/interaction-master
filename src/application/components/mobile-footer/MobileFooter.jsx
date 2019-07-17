import React from 'react';
import { Twitter } from 'react-social-sharing';
import { Facebook } from 'react-social-sharing';
import { Mail } from 'react-social-sharing';
import { Linkedin } from 'react-social-sharing';
import './MobileFooter.css';

class MobileFooter extends React.Component {

	render() {
        return (
            <div>
                <div style={{height: '10px'}}> </div>
                <div className="footer">
        			<div className="footer-info">
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
                        <p className="smart-footer-txt">
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
export default MobileFooter;
