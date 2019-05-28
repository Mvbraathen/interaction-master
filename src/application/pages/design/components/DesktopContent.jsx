import React from 'react';
import Desktop from "../../../menus/desktop/Desktop";

/* Social impacts */
import FoodInsecurity from "../../impacts/social/FoodInsecurity";
import PrecariousWork from "../../impacts/social/PrecariousWork";
import PollutedDrinkingWater from "../../impacts/social/PollutedDrinkingWater";
import HumanToxicity from "../../impacts/social/HumanToxicity";
import ChildLabour from "../../impacts/social/ChildLabour";
import LackOfCleanHouseholdEnergy from "../../impacts/social/LackOfCleanHouseholdEnergy";
import GenderInequality from "../../impacts/social/GenderInequality";
import Discrimination from "../../impacts/social/Discrimination";
import Marginalisation from "../../impacts/social/Marginalisation";
import ViolentConflict from "../../impacts/social/ViolentConflict";
import LivingInSlums from "../../impacts/social/LivingInSlums";


import EnvironmentalInfoComponent from "./EnvironmentalInfoComponent";

import {
    NavLink
} from "react-router-dom";

class DesktopContent extends React.Component {
   render () {
        const fromPage = "design";

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
                    
                    <EnvironmentalInfoComponent fromPage={fromPage}/>

                    <div className="desktop-header-txt">
                        <h1>
                            Social Impacts
                        </h1>
                        <div className="purple-line"></div>  
                    </div>

                    <div className="right-half-flex-container">
                        
                        {/*<FoodInsecurity />
                        <PrecariousWork />
                        <PollutedDrinkingWater />
                        <HumanToxicity />
                        <ChildLabour />
                        <LackOfCleanHouseholdEnergy />
                        <GenderInequality />
                        <Discrimination />
                        <Marginalisation />
                        <ViolentConflict />
                        <LivingInSlums />*/}

                    </div>
                </div>
			</div>
		)
	}
}

export default DesktopContent;