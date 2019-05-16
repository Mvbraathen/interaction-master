import React from 'react';

import ResourceExtraction from "../../../menus/desktop/components/resource-extraction/ResourceExtraction";
import Manufacturing from "../../../menus/desktop/components/manufacturing/Manufacturing";
import Transport from "../../../menus/desktop/components/transport/Transport";
import Use from "../../../menus/desktop/components/use/Use";
import EndOfLife from "../../../menus/desktop/components/end-of-life/EndOfLife";
import Design from "../../../menus/desktop/components/design/Design";
import Home from "../../../menus/desktop/components/home/Home";

import "./DesktopContent.css";

class DesktopContent extends React.Component {
	render() {
		return (
			<div id="home-page">
               <div>
                    <div className="place-menu-header">
                        <div className="desktop-header-txt">
                            <h1>
                                The Mobile Lifecycle
                            </h1>
                            <div className="desktop-purple-line"> {/* style from mobile */}
                                ____
                            </div> 
                        </div>
                    </div>
                    <div className="home-scaling-svg-container">
                        <svg viewBox="50 0 1450 525" className="home-scaling-svg">
                            <g transform="translate(150, 60)">
                                <ResourceExtraction />              
                                <Manufacturing />
                                <Transport />
                                <Use />
                                <EndOfLife />
                                <Design />
                                <Home />
                            </g>
                             <g>
                                <path 
                                    transform="translate(700, 210)"
                                    className = "pointer" 
                                    d="M 21.9,50.2 45.5,73.7 44,75.3 17.8,49.1 44,22.9 45.5,24.5 21.9,48 75.7,48 75.7,50.2" 
                                />
                            </g>
                            <text className="svg-text" x="900" y="230"> Hey there! 👋 </text>
                            <text className="svg-text" x="900" y="270"> Navigate around the mobile lifecycle</text>
                            <text className="svg-text" x="900" y="290"> by clicking the menu</text>
                            <text className="svg-text" x="900" y="310"> to you're left!</text>
                        </svg> 
                    </div>
                </div>
			</div>
		)
	}
}

export default DesktopContent;