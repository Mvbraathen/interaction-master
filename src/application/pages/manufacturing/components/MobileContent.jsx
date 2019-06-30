import React from "react";
/* Mobile menu */
import Mobile from "../../../menus/mobile/Mobile";
/* Header and footer for mobile devices */
import MobileHeader from "../../components/MobileHeader";
import MobileFooter from "../../components/MobileFooter";
/* Impacts */
import Environmental from "../../impacts/Environmental";
import Social from "../../impacts/Social";

class MobileContent extends React.Component {
    constructor() {
        super();
        this.state = {
            /* decides which impact category to be shown */
            default: false,
            environmental: true,
            social: false,
            /* background colors on active and inactive buttons */
            environmentalButtonColor: '#ff9900',
            socialButtonColor: '#6699ff',
            /* text colors in active and inactive buttons */
            environmentalButtonTextColor: 'black',
            socialButtonTextColor: 'black',
        }
        this.handleDefaultClicked = this.handleDefaultClicked.bind(this);
        this.handleEnvironmentalClicked = this.handleEnvironmentalClicked.bind(this);
        this.handleSocialClicked = this.handleSocialClicked.bind(this);
    }

    handleDefaultClicked() {
        this.setState({
            default: true,
            environmental: false,
            social: false
        });
    }

    handleEnvironmentalClicked() {
        this.setState({
            environmental: true,
            social: false,
            environmentalButtonColor: '#FC7307',
            socialButtonColor: '#707070',
            environmentalButtonTextColor: 'white',
            socialButtonTextColor: 'black',
        });
    }

    handleSocialClicked() {
        this.setState({
            social: true,
            environmental: false,
            environmentalButtonColor: '#707070',
            socialButtonColor: '#FC7307',
            environmentalButtonTextColor: 'black',
            socialButtonTextColor: 'white',
        });
    }

    render() {

        /* To get correct page header text */
        const pageHeader = "Manufacturing";
        /* To get impacts that corresponds with design phase */
        let fromPage = "manufacturing";
        let content;

        if(this.state.default) {
            content = (
                <div>
                    <div className="page-title"> 
                        The manufacturing phase 
                    </div> 
                    <div className="page-introduction-text">
                        Manufacturing is the phase in which the different components of the mobile 
                        phone are produced and put together to become the finished product. The 
                        main components of a mobile phone are the circuit board (PCB), battery, 
                        LCD screen, antenna, microphone, speaker, camera(s), and shell. Each of 
                        these large components consists of several smaller components.
                        <p></p>
                        Manufacturing takes place in factories, with the largest factory, in Shenzen, 
                        China, housing up to 450.000 workers.
                    </div>
                    <p style={{height: '30px'}}></p>
                    <div style={{marginTop: '-15px', marginBottom: '-6px'}} className="selected-info"> 
                        Select impact
                    </div>
                    <div style={{fontFamilty: 'Avenir Next', textAlign: 'center'}}>
                        <button onClick={this.handleEnvironmentalClicked} style={{position: 'relative',left: '0', marginLeft: '2.5%',marginRight: '2.5%',  width: '45%', marginTop: '20px', marginBottom: '20px', border: 'solid 2px #BD2EC2', color: '#BD2EC2', borderRadius: '5px', padding: '18px 0px', fontWeight: '500', cursor: 'pointer', letterSpacing: '2px', fontFamilty:'Open sans', fontSize:'1.1em'}}>
                            Environmental
                        </button>
                        <button onClick={this.handleSocialClicked} style={{position: 'relative',right: '0', marginLeft: '2.5%', marginRight: '2.5%', width: '45%', marginTop: '20px', marginBottom: '20px', border: 'solid 2px #BD2EC2', color: '#BD2EC2', borderRadius: '5px', padding: '18px 50px', fontWeight: '500', cursor: 'pointer', letterSpacing: '2px', fontFamilty:'Open sans', fontSize:'1.1em'}}>
                            Social
                        </button>
                        {content}
                    </div>
                </div>
            )
        } 

        if(this.state.environmental) {
            content = (
                <div>
                    <div style={{height: '60px'}}></div>
                    <button onClick={this.handleDefaultClicked} style={{display: 'block', position: 'relative',right: '0', marginLeft: '3.3%', width: '100px', marginTop: '20px', marginBottom: '0px', border: 'solid 2px lightgrey', color: '#696969', borderRadius: '5px', padding: '5px 0px', fontWeight: '500', cursor: 'pointer', letterSpacing: '2px', fontFamilty:'Open sans', fontSize:'1.1em'}}> 
                        <span>&crarr;</span>Back 
                    </button>
                    <button onClick={this.handleEnvironmentalClicked} style={{backgroundColor: '#BD2EC2', position: 'relative',left: '0', marginLeft: '3.3%',marginRight: '3.3%',  width: '45%', marginTop: '20px', marginBottom: '20px', border: 'solid 2px #BD2EC2', color: 'white', borderRadius: '5px', padding: '18px 0px', fontWeight: '500', cursor: 'pointer', letterSpacing: '2px', fontFamilty:'Open sans', fontSize:'1.1em'}}>
                        Environmental
                    </button>
                    <button onClick={this.handleSocialClicked} style={{position: 'relative',right: '0', marginRight: '3.3%', width: '45%', marginTop: '20px', marginBottom: '20px', border: 'solid 2px #BD2EC2', color: '#BD2EC2', borderRadius: '5px', padding: '18px 50px', fontWeight: '500', cursor: 'pointer', letterSpacing: '2px', fontFamilty:'Open sans', fontSize:'1.1em'}}>
                        Social
                    </button>
                    <div style={{marginTop: '10px', marginBottom: '-50px'}} className="selected-info"> 
                        Environmental impacts
                    </div>
                    <div className="mobile-impacts-width">
                        <Environmental fromPage={fromPage} />
                    </div>
                    <MobileFooter />
                </div>
            )
        } 
        if(this.state.social) {
            content = (
                <div>
                    <div style={{height: '60px'}}></div>
                    <button onClick={this.handleDefaultClicked} style={{display: 'block', position: 'relative',right: '0', marginLeft: '3.3%', width: '100px', marginTop: '20px', marginBottom: '0px', border: 'solid 2px lightgrey', color: '#696969', borderRadius: '5px', padding: '5px 0px', fontWeight: '500', cursor: 'pointer', letterSpacing: '2px', fontFamilty:'Open sans', fontSize:'1.1em'}}> 
                        <span>&crarr;</span>Back 
                    </button>
                    <button onClick={this.handleEnvironmentalClicked} style={{position: 'relative',left: '0', marginLeft: '3.3%',marginRight: '3.3%',  width: '45%', marginTop: '20px', marginBottom: '20px', border: 'solid 2px #BD2EC2', color: '#BD2EC2', borderRadius: '5px', padding: '18px 0px', fontWeight: '500', cursor: 'pointer', letterSpacing: '2px', fontFamilty:'Open sans', fontSize:'1.1em'}}>
                        Environmental
                    </button>
                    <button onClick={this.handleSocialClicked} style={{backgroundColor: '#BD2EC2', position: 'relative',right: '0', marginRight: '3.3%', width: '45%', marginTop: '20px', marginBottom: '20px', border: 'solid 2px #BD2EC2', color: 'white', borderRadius: '5px', padding: '18px 50px', fontWeight: '500', cursor: 'pointer', letterSpacing: '2px', fontFamilty:'Open sans', fontSize:'1.1em'}}>
                        Social
                    </button>
                    <div style={{marginTop: '10px', marginBottom: '-50px'}} className="selected-info"> 
                        Social impacts
                    </div>
                    <div className="mobile-impacts-width">
                        <Social fromPage={fromPage} />
                    </div>
                    <MobileFooter />
                </div>
            )
        }
        return (
            <div className="mobilePage">
                <Mobile />
                <div className="mobileContent">
                    <MobileHeader pageHeader={pageHeader} />
                    {content}
                </div>
            </div>
        );
    }
}

export default MobileContent;
