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
        const pageHeader = "Resource extraction";
        /* To get impacts that corresponds with design phase */
        let fromPage = "resourceExtraction";
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
                    <div className="selected-info"> 
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
                    <div className="page-title"> 
                        The resource extraction phase 
                    </div> 
                    <div className="page-introduction-text">
                        Resource extraction is the phase covering activities resulting in 
                        materials that will be used in the manufacturing phase, such as 
                        mineral extraction and the processing of minerals. For example, 
                        the extraction and processing of oil to make plastics, the mining 
                        and processing of cobalt and lithium to make batteries, and the 
                        mining and processing of tungsten to make your mobile phone vibrate.
                        <p></p>
                        Artisanal mining takes place in many African countries. Some of the 
                        minerals mined for mobile phones and other electronics, gold, tin, 
                        tantalum, and tungsten, are considered conflict minerals. International 
                        regulation (USA, EU) restricts the use of conflict minerals.
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
