import React from 'react';
import Desktop from "../../../menus/desktop/Desktop";
import Test from "./Test";

class DesktopContent extends React.Component {
	render() {
		return (
			<div id="home-page">
               <div className="split left-half">
                    <Desktop />
                </div>
                <div className="split right-half">
                    <div className="desktop-header-txt">
                        <h1>
                            Environmental Impacts
                        </h1>
                        <div className="desktop-purple-line"> {/* style from mobile */}
                            ____
                        </div> 
                    </div>

                    <div className="right-half-flex-container">
                        
                        <Test />

                       <div className="environmental-info-element">
                            <div className="info-box-content"> CO2 emissions </div>
                        </div>

                        <div className="environmental-info-element">
                            <div className="info-box-content"> Particulate matter </div>
                        </div>

                        <div className="environmental-info-element">
                            <div className="info-box-content"> Ecotoxicity </div>
                        </div>

                    </div>

                    <div className="desktop-header-txt">
                        <h1>
                            Social Impacts
                        </h1>
                        <div className="desktop-purple-line"> {/* style from mobile */}
                            ____
                        </div> 
                    </div>

                    <div className="right-half-flex-container">
                        
                        <div className="social-info-element">
                            <div className="info-box-content"> Acidification </div>
                        </div>

                       <div className="social-info-element">
                            <div className="info-box-content"> CO2 emissions </div>
                        </div>

                        <div className="social-info-element">
                            <div className="info-box-content"> Particulate matter </div>
                        </div>

                        <div className="social-info-element">
                            <div className="info-box-content"> Ecotoxicity </div>
                        </div>

                        <div className="social-info-element">
                            <div className="info-box-content"> Ecotoxicity </div>
                        </div>

                    </div>
                </div>
			</div>
		)
	}
}

export default DesktopContent;