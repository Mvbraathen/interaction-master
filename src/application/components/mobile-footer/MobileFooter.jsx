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
                                <Facebook style={{border: 'solid 1px white', backgroundColor: '#4367B2'}} solid small message="Learn more about the mobile lifecycle!" link="https://smart.uio.no" />
                                <Twitter style={{border: 'solid 1px white'}} color="red" solid small message="Learn more about the mobile lifecycle!" link="https://smart.uio.no" />
                                <Mail style={{border: 'solid 1px white'}} solid small message="Learn more about the mobile lifecycle!" link="https://smart.uio.no" />
                                <Linkedin style={{border: 'solid 1px white'}} solid small message="Learn more about the mobile lifecycle!" link="https://smart.uio.no" />
                            </div>
                        </div>
                        <div className="smart-footer-txt">
                            SMART has received funding from the European Union’s Horizon
                            2020 research and innovation programme under grant agreement No
                            693642. The contents of this website are the sole responsibility
                            of the SMART project and do not necessarily reflect the views of
                            the European Union. 
                            <p></p>
                            For more information about the SMART project, please visit:{' '} 
                            <a style={{color: 'white'}} href="http://smart.uio.no"> 
                                http://smart.uio.no 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MobileFooter;
