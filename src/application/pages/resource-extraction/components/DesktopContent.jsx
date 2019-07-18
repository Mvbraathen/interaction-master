import React from "react";
// Various components
import Desktop from "../../../menus/desktop/Desktop";
import DesktopHeader from "../../../components/desktop-header/DesktopHeader";
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import Footer from "../../../components/footer/Footer";
import IconSelector from "../../../components/icon-selector/IconSelector";
// Impacts
import Environmental from "../../../components/impacts/Environmental";
import Social from "../../../components/impacts/Social";
/* Scroll to top */
import ScrollUpDesktop from "../../../components/scroll-up/ScrollUpDesktop";

class DesktopContent extends React.Component {
    constructor() {
        super();
        this.state = {
            // Decides content
            default: true,
            environmental: false,
            social: false,
            borderDefault: '1px solid grey',
            borderEnvironmental: 'none',
            borderSocial: 'none'
        }
    }

    handleDefaultClick() {
        this.setState({
            default: true,
            social: false,
            environmental: false,
            borderDefault: '1px solid grey',
            borderEnvironmental: 'none',
            borderSocial: 'none'
        })
    }

    handleEnvironmentalClick() {
        this.setState({
            default: false,
            social: false,
            environmental: true,
            borderDefault: 'none',
            borderEnvironmental: '1px solid grey',
            borderSocial: 'none'
        })
    }

    handleSocialClick() {
        this.setState({
            default: false,
            environmental: false,
            social: true,
            borderDefault: 'none',
            borderEnvironmental: 'none',
            borderSocial: '1px solid grey'
        })
    }

    render() {
        /* To select corresponding components */
        const fromPage = "resourceExtraction";
        
        /* To get correct header text */
        const pageHeader = "Resource extraction";
        
        /* The variable that holds the content */
        let content;

        if(this.state.default) {
            content = (
                <div>
                    <h1 
                        className="desktop-page-title" 
                        style={{color: '#00AD00'}}> 
                        The resource extraction phase 
                    </h1>
                    <div className="default-content-text">
                        <p>Resource Extraction is the phase covering activities resulting in materials that
                        will be used in the manufacturing phase, such as the extraction and processing of
                        oil to make plastics, the mining and processing of cobalt and lithium to make
                        materials for the battery, and the mining and processing of tungsten to make the
                        mobile phone vibrate. Mobile phones can contain as many as 62 different metals,
                        including 16 of the 17 rare earth metals (
                        <a 
                            className="inline-link-style" 
                            title="link to smartphone materials statistics"  
                            href="https://www.statista.com/statistics/270454/top-10-materials-in-a-smartphone/">
                            Smartphone - Materials
                        </a>
                        ).</p>
                        <p>The most known social impact in this phase is conflict and associated illicit trade.
                        Some of the minerals mined for mobile phones and other electronics, gold, tin,
                        tantalum, and tungsten, are considered conflict minerals, because their
                        extraction is associated with armed groups that control the mining and trade of
                        the minerals. International regulation in the USA and the EU restricts the use of
                        conflict minerals. There are several international initiatives focusing on
                        improving the supply chain of minerals, such as the {' '} 
                        <a 
                            className="inline-link-style" 
                            title="link to responsible minerals initiative website"  
                            href="http://www.responsiblemineralsinitiative.org/">
                            Responsible Minerals Initiative
                        </a>
                        , the {' '} 
                        <a 
                            className="inline-link-style" 
                            title="link to responsible sourcing network website"  
                            href="https://www.sourcingnetwork.org/">
                            Responsible Sourcing Network
                        </a>       
                        , and the {' '}
                        <a 
                            className="inline-link-style" 
                            title="link to Enough Project website"  
                            href="https://enoughproject.org/">
                            Enough Project
                        </a>
                        .</p>
                        <p>A large part of the materials of the mobile phone are extracted in artisanal and
                        small-scale mining operations (ASM) in many African countries as well as in
                        countries in Asia and South-America. Both the industrial mining and ASM mining
                        of minerals are associated with a variety of environmental and social impacts (
                        <a 
                            className="inline-link-style" 
                            title="link to mapping mining to the sustainable development goals"  
                            href="http://unsdsn.org/resources/publications/mapping-mining-to-the-sustainable-development-goals-an-atlas/">
                            Mapping Mining to the Sustainable Development Goals: An Atlas
                        </a>
                        ).</p>
                    </div>
                </div>
            )
        }

        if(this.state.environmental) {
            content = (
                <div>
                    <div className="desktop-page-title" style={{color: '#00AD00'}}> 
                        Environmental impacts
                    </div>
                    <Environmental fromPage={fromPage} />
                </div>
            )
        }

        if(this.state.social) {
            content = (
                <div>
                    <div className="desktop-page-title" style={{color: '#00AD00'}}> 
                        Social impacts
                    </div>
                    <Social fromPage={fromPage} />
                </div>
            )
        }

        return (
            <div id="resource-extraction-page">
                <DesktopHeader pageHeader={pageHeader} />
                <div className="new-sub-menu">
                    <Breadcrumb fromPage={fromPage} />
                    {/* Two empty elements to align the three buttons right, without ruining tabindex */}
                    <div className="new-sub-menu-element"> </div>
                    <div className="new-sub-menu-element"> </div>
                    
                    {/* The three actual buttons */}
                    <div 
                        className="new-sub-menu-element"> 
                        <button
                            onClick={e => {
                                this.handleDefaultClick(e);
                            }}
                            style={{border: this.state.borderDefault}} 
                            className="new-sub-menu-element-text" 
                            tabIndex="0"> 
                            <IconSelector fromPage={fromPage} />
                        </button> 
                    </div>

                    <div 
                        className="new-sub-menu-element"> 
                        <button
                            onClick={e => {
                                this.handleEnvironmentalClick(e);
                            }} 
                            style={{border: this.state.borderEnvironmental}} 
                            className="new-sub-menu-element-text" 
                            tabIndex="0"> 
                            Environmental
                        </button> 
                    </div>

                    <div 
                        className="new-sub-menu-element"> 
                        <button
                            onClick={e => {
                                this.handleSocialClick(e);
                            }} 
                            style={{boxSizing: 'borderBox', border: this.state.borderSocial}} 
                            className="new-sub-menu-element-text" 
                            tabIndex="0"> 
                            Social 
                        </button> 
                    </div>
                    
                </div>
                {/* Line to visually seperate sub menu from page content */}
                <hr className="vertical-line" />
                
                {/* Left half */}
                <div className="split left-half">
                    <Desktop />
                </div>

                {/* Right half */}
                <div className="split right-half">
                    <div id="top" />
                    <div className="right-half-content">
                        {content}
                    </div>
                    <Footer />
                    <ScrollUpDesktop />
                </div>
            </div>
        );
    }
}

export default DesktopContent;
