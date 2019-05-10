import React from 'react';
import Mobile from "../../../../../menus/mobile/Mobile";
import {
    NavLink
} from "react-router-dom";
import "../../../../css/MobilePageStyle.css";
import ScrollSnap from 'scroll-snap';

const snapConfig = {
  scrollSnapDestination: "0% 90%",
  scrollTimeout: 100,
  scrollTime: 300
};

class MobileContent extends React.Component {
    container = React.createRef();

    bindScrollSnap() {
        function callback() {
          // optional callback
        }

        const element = this.container.current;
        const snapObject = new ScrollSnap(element, snapConfig);
        snapObject.bind(callback);
    }

    componentDidMount() {
        this.bindScrollSnap();
    }


	render() {
		return (
			<div>
                <div className="mobilePage">
                    <div className="mobileContent">
                        <div className="mobileHeader"></div>
                        <div className="pageHeaderBigScreen">  
                            <h1> Use </h1>
                        </div>
                        <div id="container" ref={this.container}>
                            <div className="page first-page">
                                <div className="page-one-header">
                                    This is a header
                                </div>
                                <img
                                    alt="A road "
                                    className="page-one-image" 
                                    src={require('./images/smart-test-image.jpg')} 
                                />
                                <div className="page-one-info"> 
                                    More than half of the world population uses mobile 
                                    phone today. The popularity of mobile phones has lead to significant environmental 
                                    risk in the form of CO2 emissi... 
                                    <NavLink to="/use/lifetime">
                                        <button className="page-one-button"> Read more </button>
                                    </NavLink>
                                </div>
                                <div className="hint">
                                    Scroll down for next element <span>&darr;</span>
                                </div>
                            </div>
                            <div className="page second-page">
                                <div className="page-one-header">
                                    This is a header
                                </div>
                                <img
                                    alt="A road "
                                    className="page-one-image" 
                                    src={require('./images/smart-test-image.jpg')} 
                                />
                                <div className="page-one-info"> 
                                    More than half of the world population uses mobile 
                                    phone today. The popularity of mobile phones has lead to significant environmental 
                                    risk in the form of CO2 emissi... 
                                    <NavLink to="/use/lifetime">
                                        <button className="page-one-button"> Read more </button>
                                    </NavLink>
                                </div>
                                <div className="hint">
                                    Scroll down for next element <span>&darr;</span>
                                </div>
                            </div>
                            <div className="page third-page">
                                <div className="page-one-header">
                                    This is a header
                                </div>
                                <img
                                    alt="A road "
                                    className="page-one-image" 
                                    src={require('./images/smart-test-image.jpg')} 
                                />
                                <div className="page-one-info"> 
                                    More than half of the world population uses mobile 
                                    phone today. The popularity of mobile phones has lead to significant environmental 
                                    risk in the form of CO2 emissi... 
                                    <NavLink to="/use/lifetime">
                                        <button className="page-one-button"> Read more </button>
                                    </NavLink>
                                </div>
                                <div className="hint">
                                    Scroll down for next element <span>&darr;</span>
                                </div>
                            </div>
                            <div className="page fourth-page">
                                <div className="page-one-header">
                                    This is a header
                                </div>
                                <img
                                    alt="A road "
                                    className="page-one-image" 
                                    src={require('./images/smart-test-image.jpg')} 
                                />
                                <div className="page-one-info"> 
                                    More than half of the world population uses mobile 
                                    phone today. The popularity of mobile phones has lead to significant environmental 
                                    risk in the form of CO2 emissi... 
                                    <NavLink to="/use/lifetime">
                                        <button className="page-one-button"> Read more </button>
                                    </NavLink>
                                </div>
                                <div className="hint">
                                    Scroll up to go back <span>&uarr;</span>
                                </div>
                            </div>
                          </div>
                            




                            {/*<div className="pappa-salah">
                                <div className="salah">
                                    <div className="salah-header"> Acidification </div>
                                    <img className="salah-image" src={require('./images/smart-test-image.jpg')} />
                                    <div className="salah-info"> More than half of the world population uses mobile 
                                    phone today. The popularity of mobile phones has lead to significant environmental 
                                    risk in the form of CO2 emissions. CO2 emissions in the use phase is the result 
                                    of using energy for internet connections between networks, servers and a mobile 
                                    phone, and also for charging the batter. </div>
                                    <NavLink to="/use/lifetime">
                                        <button className="salah-button"> Learn more </button>
                                    </NavLink>
                                </div>
                                <div className="fill-empty-space-salah"> </div>
                                <div className="hazard">
                                    <div className="salah-header"> Acidification </div>
                                    <img className="salah-image" src={require('./images/smart-test-image.jpg')} />
                                    <div className="salah-info"> More than half of the world population uses mobile 
                                    phone today. The popularity of mobile phones has lead to significant environmental 
                                    risk in the form of CO2 emissions. CO2 emissions in the use phase is the result 
                                    of using energy for internet connections between networks, servers and a mobile 
                                    phone, and also for charging the batter. </div>
                                    <NavLink to="/use/lifetime">
                                        <button className="salah-button"> Learn more </button>
                                    </NavLink>
                                </div>
                                <div className="fill-empty-space-salah"> </div>
                                <div className="salah">
                                    <div className="salah-header"> Acidification </div>
                                    <img className="salah-image" src={require('./images/smart-test-image.jpg')} />
                                    <div className="salah-info"> More than half of the world population uses mobile 
                                    phone today. The popularity of mobile phones has lead to significant environmental 
                                    risk in the form of CO2 emissions. CO2 emissions in the use phase is the result 
                                    of using energy for internet connections between networks, servers and a mobile 
                                    phone, and also for charging the batter. </div>
                                    <NavLink to="/use/lifetime">
                                        <button className="salah-button"> Learn more </button>
                                    </NavLink>
                                </div>
                                <div className="fill-empty-space-salah"> </div>
                                <div className="hazard">
                                    <div className="salah-header"> Acidification </div>
                                    <img className="salah-image" src={require('./images/smart-test-image.jpg')} />
                                    <div className="salah-info"> More than half of the world population uses mobile 
                                    phone today. The popularity of mobile phones has lead to significant environmental 
                                    risk in the form of CO2 emissions. CO2 emissions in the use phase is the result 
                                    of using energy for internet connections between networks, servers and a mobile 
                                    phone, and also for charging the batter. </div>
                                    <NavLink to="/use/lifetime">
                                        <button className="salah-button"> Learn more </button>
                                    </NavLink>
                                </div> */}                               









                                {/*
                                <div className="mobile-flex-container">
                                    <h1 className="impactHeader">Environmental Impacts</h1>
                                    
                                    <NavLink className="environmentalImpacts" to ="/use/lifetime">
                                        <div className="removeUnderline">
                                            Acidification
                                            <span className="flexArrow">&#8594;</span>
                                        </div>
                                    </NavLink>
                                    
                                    <div className="environmentalImpacts">
                                        CO2 emissions
                                        <span className="flexArrow">&#8594;</span>
                                    </div>
                                    <div className="environmentalImpacts">
                                        Eutrophication
                                        <span className="flexArrow">&#8594;</span>
                                    </div>  
                                    <div className="environmentalImpacts">
                                        Ecotoxity
                                        <span className="flexArrow">&#8594;</span>
                                    </div>
                                    <div className="environmentalImpacts">
                                        Particulate matter
                                        <span className="flexArrow">&#8594;</span> 
                                    </div>
                                    <div className="hacky-flex-fix">  
                                    </div>
                                </div>
                                <div className="mobile-flex-container2">
                                    <h1 className="impactHeader">Social Impacts</h1>
                                    <div className="socialImpacts">
                                        Acidification
                                        <span className="flexArrow">&#8594;</span>
                                    </div>
                                    <div className="socialImpacts">
                                        CO2 emissions
                                        <span className="flexArrow">&#8594;</span>
                                    </div>
                                    <div className="socialImpacts">
                                        Eutrophication
                                        <span className="flexArrow">&#8594;</span>
                                    </div>  
                                    <div className="socialImpacts">
                                        Ecotoxity
                                        <span className="flexArrow">&#8594;</span>
                                    </div>
                                    <div className="socialImpacts">
                                        Particulate matter
                                        <span className="flexArrow">&#8594;</span>
                                    </div>
                                    <div className="hacky-flex-fix">  
                                    </div>
                                </div>
                            </div>
                            */}
                        </div>
                        <Mobile />
                    </div>
			</div>
		)
	}
}

export default MobileContent;