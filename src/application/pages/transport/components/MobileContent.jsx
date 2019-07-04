import React from "react";
/* Mobile menu */
import Mobile from "../../../menus/mobile/Mobile";
/* Header and footer for mobile devices */
import MobileHeader from "../../../components/mobile-header/MobileHeader";
import MobileFooter from "../../../components/mobile-footer/MobileFooter";
/* Impacts */
import Environmental from "../../../components/impacts/Environmental";
import Social from "../../../components/impacts/Social";

class MobileContent extends React.Component {
    constructor() {
        super();
        this.state = {
            /* decides which impact category to be shown */
            default: true,
            environmental: false,
            social: false,
            transportColor: '#0066FF'
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
            default: false,
            environmental: true,
            social: false
        });
    }

    handleSocialClicked() {
        this.setState({
            default: false,
            environmental: false,
            social: true
        });
    }

    render() {

        /* To get correct page header text */
        const pageHeader = "Transport";
        /* To get impacts that corresponds with design phase */
        let fromPage = "transport";
        let content;

        if(this.state.default) {
            content = (
                <div>
                    <div style={{color: this.state.transportColor}} className="page-title"> 
                        The transport phase 
                    </div> 
                    <div className="page-introduction-text">
                        Transport is short-hand for a variety of activities that take place during 
                        the whole lifecycle of the mobile phone, such transportation of materials, 
                        components, and finished products; the packaging of the products being 
                        transported; and the logistics or organisation and implementation of it all.
                    </div>
                    <p style={{height: '30px'}}></p>
                    <div style={{marginTop: '-15px', marginBottom: '-6px'}} className="selected-info"> 
                        Select an impact category
                    </div>
                    <div style={{fontFamilty: 'Avenir Next', textAlign: 'center'}}>
                        <button className="commonButtonStyle environmentalButton" onClick={this.handleEnvironmentalClicked} style={{borderColor: this.state.transportColor, color: this.state.transportColor}}>
                            Environmental
                        </button>
                        <button className="commonButtonStyle socialButton" onClick={this.handleSocialClicked} style={{borderColor: this.state.transportColor, color: this.state.transportColor}}>
                            Social
                        </button>
                    </div>
                </div>
            )
        } 

        if(this.state.environmental) {
            content = (
                <div>
                    <div style={{height: '60px'}}></div>
                    <button className="defaultButton" onClick={this.handleDefaultClicked}> 
                        <span>&crarr;</span>Back 
                    </button>
                    <button  className="commonButtonStyle environmentalButton" onClick={this.handleEnvironmentalClicked} style={{backgroundColor: this.state.transportColor, borderColor: this.state.transportColor, color: 'white'}}>
                        Environmental
                    </button>
                    <button className="commonButtonStyle socialButton" onClick={this.handleSocialClicked} style={{borderColor: this.state.transportColor, color: this.state.transportColor}}>
                        Social
                    </button>
                    <div style={{marginTop: '10px'}} className="selected-info"> 
                        Environmental impacts
                    </div>
                    <div className="mobile-impacts-width">
                        <Environmental fromPage={fromPage} />
                    </div>
                </div>
            )
        }

        if(this.state.social) {
            content = (
                <div>
                    <div style={{height: '60px'}}></div>
                    <button className="defaultButton" onClick={this.handleDefaultClicked}> 
                        <span>&crarr;</span>Back 
                    </button>
                    <button  className="commonButtonStyle environmentalButton" onClick={this.handleEnvironmentalClicked} style={{borderColor: this.state.transportColor, color: this.state.transportColor}}>
                        Environmental
                    </button>
                    <button className="commonButtonStyle socialButton" onClick={this.handleSocialClicked} style={{backgroundColor: this.state.transportColor, borderColor: this.state.transportColor, color: 'white'}}>
                        Social
                    </button>
                    <div style={{marginTop: '10px'}} className="selected-info"> 
                        Social impacts
                    </div>
                    <div className="mobile-impacts-width">
                        <Social fromPage={fromPage} />
                    </div>
                </div>
            )
        }
        
        return (
            <div>
                <Mobile />
                <div className="mobilePage">
                    
                    <div className="mobileContent">
                        <MobileHeader pageHeader={pageHeader} />
                        {content}
                    </div>
                </div>
                <MobileFooter />
            </div>
        );
    }
}

export default MobileContent;
