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
                        <svg viewBox="50 0 1150 525" className="home-scaling-svg">
                            <g transform="translate(150, 0)">
                                <ResourceExtraction />              
                                <Manufacturing />
                                <Transport />
                                <Use />
                                <EndOfLife />
                                <Design />
                                <Home />
                            </g>
                             <g transform="rotate(-90, 20, 380)">
                                <path className="svg-arrow" transform="translate(3,960)" d="M193.626,3.672c-2.448-4.896-10.404-4.896-12.852,0c-20.808,37.944-39.78,76.5-50.796,118.116
                                c-1.224,6.12,5.508,12.24,11.016,8.568c12.24-8.568,22.644-18.972,31.824-31.212c-2.448,85.68-14.076,174.42,6.12,258.876
                                c1.224,6.12,11.627,4.896,11.015-1.225c-11.015-87.516-2.447-174.42-1.224-261.936c10.404,9.18,20.808,18.36,30.6,27.54
                                c4.284,4.284,13.465,1.836,12.853-5.508C227.285,76.5,213.821,38.556,193.626,3.672z M186.894,76.5
                                c-3.672-5.508-14.076-4.284-14.076,4.284c0,0.612,0,1.224,0,1.224c-7.344,7.344-14.076,14.688-22.032,22.032
                                c9.792-28.152,22.032-54.468,36.107-80.784c12.24,23.868,21.42,48.348,26.316,74.664c-6.732-6.12-14.076-12.24-20.809-18.972
                                C191.178,76.5,188.729,75.888,186.894,76.5z"/>
                            </g>
                            <text className="svg-text" x="800" y="160"> Hi!</text>
                            <text className="svg-text2" x="854" y="160"> Click </text>
                            <text className="svg-text3" x="938" y="160"> the </text>
                            <text className="svg-text4" x="996" y="160"> menu </text>
                        </svg>
                    </div>
                </div>
			</div>
		)
	}
}

export default DesktopContent;