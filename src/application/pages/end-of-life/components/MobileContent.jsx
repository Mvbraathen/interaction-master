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
        const pageHeader = "End of life";
        /* To get impacts that corresponds with design phase */
        let fromPage = "endOfLife";
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
                        The end of life phase 
                    </div> 
                    <div className="page-introduction-text">
                        End of life is the phase in which the mobile phone is no longer in use as 
                        the result of planned, functional or perceived obsolescence of the phone. 
                        These mobile phones disappear in dusty drawers, get sold or are repaired 
                        or thrown away. In countries with a functional electronic waste collection 
                        system, mobile phones are recycled so that valuable minerals can be re-used. 
                        Sometimes only the motherboard (PCB) is take out for recycling and the rest 
                        is burned, resulting in the release of hazardous materials in water and air.
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
