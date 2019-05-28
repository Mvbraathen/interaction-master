 


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

import {
    NavLink
} from "react-router-dom";

class EnvironmentalInfoComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            // show all info elements
            infoElementClicked: false,
            designInfoElementClicked: false,
            Acidification: false,
            Biodiversity: false
        }
    }

    handleClick(event, value){
        console.log(value);
        this.setState({
            [value]: true
        })
}
	render() {
        let info;
        let designArray = ['Acidification', 'Biodiversity', 'Lol', 'Lø'];
        let mariusArray = ['Marius', 'Vørrang', 'Bråthen'];
        
    {/* Determines which elements to render based on infoElementClicked state and fromPage props from parent */}
        if(this.state.infoElementClicked == false){
            if(this.props.fromPage === 'design') {
                console.log(this.props.fromPage);
                info =   
                    <div className="right-half-flex-container" >

                        {designArray.map((value, index) => {
                            return (
                                <div key={index} className="environmental-info-element"  onClick={(e) => {this.handleClick(e, value)}}>
                                    <div className="info-box-content"> {value} </div> 
                                </div>
                            );
                        })}
                    </div>
            }
            if(this.props.fromPage === 'use') {
                info =   
                    <div>
                        <div onClick={() => this.setState({ infoElementClicked: 'acidification' })}> 
                            <div> Use </div>
                         </div>
                    </div>
            }
        }

        {/* All environmental impacts */}
        if(this.state.Acidification ===  true){
            info =   
                <div className="right-half-flex-container">
                    <div className="active-environmental-info-element" onClick={() => this.setState({ Acidification: false })}> 
                        <div className="active-info-box-content"> <Acidification /> </div>

                    </div>
                </div>
        }

        if(this.state.Biodiversity){
            info =   
                <div className="right-half-flex-container">
                    <div className="active-environmental-info-element" onClick={() => this.setState({ Biodiversity: false })}> 
                        <div className="active-info-box-content"> <Biodiversity /> </div>

                    </div>
                </div>

        }

        {/*if(this.state.infoElementClicked == true){
            info =   
                <div className="right-half-flex-container">
                    <div className="active-environmental-info-element" onClick={() => this.setState({ infoElementClicked: false })}> 
                        <div className="active-info-box-content"> <Biodiversity /> </div>
                    </div>
                </div>

        }

        if(this.state.infoElementClicked == true){
            info =   
                <div className="right-half-flex-container">
                    <div className="active-environmental-info-element" onClick={() => this.setState({ infoElementClicked: false })}> 
                        <div className="active-info-box-content"> <Co2 /> </div>
                    </div>
                </div>
        }*/}


        return (
            <div>{info}</div>
        );
    }
}

export default EnvironmentalInfoComponent;
