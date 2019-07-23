import React from 'react';
import { NavLink } from "react-router-dom";
import { Twitter } from 'react-social-sharing';
import { Facebook } from 'react-social-sharing';
import { Mail } from 'react-social-sharing';
import { Linkedin } from 'react-social-sharing';
import './Footer.css';

class Footer extends React.Component {
    constructor() {
        super();
        this.state = {
            shareLink: window.location.href
        };
    } 

    componentDidMount() {
        if(this.state.shareLink.includes('#top')) {
            this.setState({
                shareLink: this.state.shareLink.replace('#top', '')
            })
        }
        if(this.state.shareLink.includes('#main-content')) {
            this.setState({
                shareLink: this.state.shareLink.replace('#main-content', '')
            })
        }
        /* fallback - social sharing won't accept localhost links */
        if(this.state.shareLink.includes('localhost')) {
            this.setState({
                shareLink: 'https://www.smart.uio.no/research/life-cycle-of-mobile-phones/'
            })
        }
    }

	render() {
        return (
            <div>
                <div className="footer">
        			<div className="footer-info">
                        <p className="footer-text-first-section">
                            This website is designed and developed by 
                            {' '}
                            <a 
                                className="smart-link" 
                                title="link to Marius Bråthen's LinkedIn profile" 
                                href="https://www.linkedin.com/in/mariusbrathen/">
                                Marius Bråthen
                            </a> and 
                            {' '}
                            <a 
                                className="smart-link" 
                                title="link to Vebjørn Grønhaug's LinkedIn profile" 
                                href="https://www.linkedin.com/in/vebjorngronhaug/">
                                Vebjørn Grønhaug
                            </a>, 

                            master students at the Dept. of Informatics, University of Oslo. The
                            circular lifecyle is designed by former master student Olga Skachkova. The textual content is based
                            on the SMART report <em>Sustainability Hotspots Analysis of the Mobile Phone
                            Lifecycle</em>, written by Maja van der Velden and Mark Taylor and is available in 
                            PDF format here:{' '} 
                            <a  
                                className="smart-link" 
                                title="link to smart report" 
                                href="https://www.smart.uio.no/publications/reports/sustainability-hotspots-analysis-of-the-mobile-phone-lifecycle.pdf"> 
                                SMART report
                            </a>.
                        </p>

                        <div className="social-network">
                            <div className="share-text"> Share on social media: </div>
                            <div style={{marginLeft: '-7px'}}>
                                <Facebook 
                                    className="social" 
                                    style={{border: 'solid 1px white', }} 
                                    solid small 
                                    message="Learn more about the mobile lifecycle!" 
                                    link={this.state.shareLink} 
                                />

                                <Twitter 
                                    className="social" 
                                    style={{border: 'solid 1px white'}} 
                                    solid small 
                                    message="Learn more about the mobile lifecycle!" 
                                    link={this.state.shareLink}
                                />

                                <Mail 
                                    className="social" 
                                    style={{border: 'solid 1px white'}} 
                                    solid small 
                                    message="Learn more about the mobile lifecycle!" 
                                    link={this.state.shareLink}
                                />

                                <Linkedin 
                                    className="social" 
                                    style={{border: 'solid 1px white'}} 
                                    solid small 
                                    message="Learn more about the mobile lifecycle!" 
                                    link={this.state.shareLink}
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
                                SMART website 
                            </a>.
                        </p>
                    </div>
                    <hr style={{border: '1px solid white', width: '90%'}}/>
                    <div style={{padding: '30px 10px 20px 10px', textAlign: 'center'}}>
                    <NavLink className="smart-link" title="link to home page" to="/home">
                        Home
                    </NavLink>
                    {' | '}
                    <NavLink className="smart-link" title="link to design page" to="/design">
                        Design
                    </NavLink>
                    {' | '}
                    <NavLink className="smart-link" title="link to resource extraction page" to="/resource-extraction">
                        Resource extraction
                    </NavLink>
                    {' | '}
                    <NavLink className="smart-link" title="link to manufacturing page" to="/manufacturing">
                        Manufacturing
                    </NavLink>
                    {' | '}
                    <NavLink className="smart-link" title="link to transport page" to="/transport">
                        Transport
                    </NavLink>
                    {' | '}
                    <NavLink className="smart-link" title="link to use page" to="/use">
                        Use
                    </NavLink>
                    {' | '}
                    <NavLink className="smart-link"   title="link to end of life page" to="/end-of-life">
                        End of life
                    </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;
