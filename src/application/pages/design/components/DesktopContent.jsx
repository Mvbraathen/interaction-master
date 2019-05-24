import React from 'react';
import Desktop from "../../../menus/desktop/Desktop";
/* Environmental impacts */
import Acidification from "../../impacts/environmental/Acidification";
import Biodiversity from "../../impacts/environmental/Biodiversity";
import Co2 from "../../impacts/environmental/Co2";
import Deforestation from "../../impacts/environmental/Deforestation";
import Eutrophication from "../../impacts/environmental/Eutrophication";
import ExcessiveWaterUse from "../../impacts/environmental/ExcessiveWaterUse";
import Ecotoxicity from "../../impacts/environmental/Ecotoxicity";
import OzoneDepletion from "../../impacts/environmental/OzoneDepletion";
import ParticulateMatter from "../../impacts/environmental/ParticulateMatter";
/* Social impacts */
import FoodInsecurity from "../../impacts/social/FoodInsecurity";

import {
    NavLink
} from "react-router-dom";

class DesktopContent extends React.Component {
	render() {
		return (
			<div id="design-page">
                <div className="desktop-header">
                    <div className="home-header-txt">
                        <NavLink className="header-link" to="/home"><h1>
                            The Mobile Lifecycle
                        </h1></NavLink>
                    </div>
                </div>
                <div className="split left-half">
                    <div className="breadcrumb">
                        <NavLink to ="/home"><div className="prevPage">Home</div></NavLink>
                        <div className="breadcrumbSpacing"> <span className="breadcrumbArrow">&#8594;</span></div>
                        <NavLink to ="/design"><div className="activePage">Design</div></NavLink>
                    </div>
                    <Desktop />
                </div>
                <div className="split right-half">
                    <div className="desktop-header-txt">
                        <h1>
                            Environmental Impacts
                        </h1>
                        <div className="purple-line"></div> 
                    </div>

                    <div className="right-half-flex-container">
                        
                        <Acidification /> 
                        <Biodiversity />
                        <Co2 />
                        <Deforestation />
                        <Eutrophication />
                        <ExcessiveWaterUse />
                        <Ecotoxicity />
                        <OzoneDepletion />
                        <ParticulateMatter />

                    </div>

                    <div className="desktop-header-txt">
                        <h1>
                            Social Impacts
                        </h1>
                        <div className="purple-line"></div>  
                    </div>

                    <div className="right-half-flex-container">
                        
                        <FoodInsecurity />

                    </div>
                </div>
			</div>
		)
	}
}

export default DesktopContent;