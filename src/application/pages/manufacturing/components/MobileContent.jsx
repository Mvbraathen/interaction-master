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
            environmental: true,
            social: false,
            /* background colors on active and inactive buttons */
            environmentalButtonColor: '#FC7307',
            socialButtonColor: '#707070',
            /* text colors in active and inactive buttons */
            environmentalButtonTextColor: 'white',
            socialButtonTextColor: 'black',
        }
        this.handleEnvironmentalClicked = this.handleEnvironmentalClicked.bind(this);
        this.handleSocialClicked = this.handleSocialClicked.bind(this);
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

        if(this.state.environmental) {
            content = (
                <div>
                    <div className="selected-info"> 
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
                    <div className="selected-info"> <strong>Social impacts</strong></div>
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
                    <div className="select-impact-category-text"> 
                        Select the impact category you want to learn more about 
                    </div>
                    <div className="impact-selection"> 
                        <div style={{backgroundColor: this.state.environmentalButtonColor, color: this.state.environmentalButtonTextColor}} className="select-environmental" onClick={this.handleEnvironmentalClicked}>
                            Environmental
                        </div>
                        <div style={{backgroundColor: this.state.socialButtonColor, color: this.state.socialButtonTextColor}}  className="select-social" onClick={this.handleSocialClicked}>
                            Social
                        </div>
                        {content}
                    </div>
                </div>
            </div>
        );
    }
}

export default MobileContent;
