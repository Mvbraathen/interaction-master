import React from 'react';
/* Environmental impacts */
import ChildLabour from "./social/ChildLabour";
import Discrimination from "./social/Discrimination";
import FoodInsecurity from "./social/FoodInsecurity";
import GenderInequality from "./social/GenderInequality";
import HumanToxicity from "./social/HumanToxicity";
import LackOfCleanHouseholdEnergy from "./social/LackOfCleanHouseholdEnergy";
import LivingInSlums from "./social/LivingInSlums";
import Marginalisation from "./social/Marginalisation";
import PollutedDrinkingWater from "./social/PollutedDrinkingWater";
import PrecariousWork from "./social/PrecariousWork";
import ViolentConflict from "./social/ViolentConflict";


class Social extends React.Component {
    constructor() {
        super();
        this.state = {
            /* show all info elements */
            designInfoElementClicked: false,
            Childlabour: false,
            Discrimination: false,
            Foodinsecurity: false,
            Genderinequality: false,
            Humantoxicity: false,
            Lackofcleanhouseholdenergy: false,
            Livinginslums: false,
            Marginalisation: false,
            Polluteddrinkingwater: false,
            Precariouswork: false,
            Violentconflict: false
        }
    }

    handleClick(event, value){
        /* removes spaces from array values to correspond with state name */
        value = value.replace(/\s+/g, '');
        this.setState({
            [value]: true
        })
    }
	render() {
        let info;
        let resourceExtractionArray = ['Child labour', 'Discrimination', 'Food insecurity', 'Gender inequality', 'Human toxicity', 'Lack of clean household energy', 'Living in slums', 'Marginalisation', 'Polluted drinking water', 'Precarious work', 'Violent conflict'];
        let manufacturingArray = ['Child labour', 'Discrimination', 'Food insecurity', 'Gender inequality', 'Human toxicity', 'Lack of clean household energy', 'Polluted drinking water', 'Precarious work'];
        let transportArray = ['Human toxicity'];
        let useArray = ['Human toxicity'];
        let endOfLifeArray = ['Child labour', 'Food insecurity', 'Human toxicity', 'Lack of clean household energy', 'Living in slums', 'Polluted drinking water', 'Precarious work', 'Violent conflict'];
        
        
        /* Determines which elements to render based on the fromPage prop from parent component */
        if(this.props.fromPage === 'resourceExtraction') {
            console.log(this.props.fromPage);
            info =   
                <div className="right-half-flex-container" >
                    {resourceExtractionArray.map((value, index) => {
                        return (
                            <div key={index} className="environmental-info-element"  onClick={(e) => {this.handleClick(e, value)}}>
                                <div className="info-box-content"> {value} </div> 
                            </div>
                        );
                    })}
                </div>
        }
            
        if(this.props.fromPage === 'manufacturing') {
            console.log(this.props.fromPage);
            info =   
                <div className="right-half-flex-container" >
                    {manufacturingArray.map((value, index) => {
                        return (
                            <div key={index} className="environmental-info-element"  onClick={(e) => {this.handleClick(e, value)}}>
                                <div className="info-box-content"> {value} </div> 
                            </div>
                        );
                    })}
                </div>
        }

        if(this.props.fromPage === 'transport') {
            console.log(this.props.fromPage);
            info =   
                <div className="right-half-flex-container" >
                    {transportArray.map((value, index) => {
                        return (
                            <div key={index} className="environmental-info-element"  onClick={(e) => {this.handleClick(e, value)}}>
                                <div className="info-box-content"> {value} </div> 
                            </div>
                        );
                    })}
                </div>
        }

        if(this.props.fromPage === 'use') {
            console.log(this.props.fromPage);
            info =   
                <div className="right-half-flex-container" >
                    {useArray.map((value, index) => {
                        return (
                            <div key={index} className="environmental-info-element"  onClick={(e) => {this.handleClick(e, value)}}>
                                <div className="info-box-content"> {value} </div> 
                            </div>
                        );
                    })}
                </div>
        }

        if(this.props.fromPage === 'endOfLife') {
            console.log(this.props.fromPage);
            info =   
                <div className="right-half-flex-container" >
                    {endOfLifeArray.map((value, index) => {
                        return (
                            <div key={index} className="environmental-info-element"  onClick={(e) => {this.handleClick(e, value)}}>
                                <div className="info-box-content"> {value} </div> 
                            </div>
                        );
                    })}
                </div>
        }
        

        /* All environmental impacts */
        if(this.state.Childlabour ===  true){
            info =   
                <div className="right-half-flex-container">
                    <div className="active-environmental-info-element" onClick={() => this.setState({ Childlabour: false })}> 
                        <div className="active-info-box-content"> <ChildLabour /> </div>

                    </div>
                </div>
        }

        if(this.state.Discrimination){
            info =   
                <div className="right-half-flex-container">
                    <div className="active-environmental-info-element" onClick={() => this.setState({ Discrimination: false })}> 
                        <div className="active-info-box-content"> <Discrimination /> </div>

                    </div>
                </div>
        }

        if(this.state.Foodinsecurity){
            info =   
                <div className="right-half-flex-container">
                    <div className="active-environmental-info-element" onClick={() => this.setState({ Foodinsecurity: false })}> 
                        <div className="active-info-box-content"> <FoodInsecurity /> </div>

                    </div>
                </div>
        }

        if(this.state.Genderinequality){
            info =   
                <div className="right-half-flex-container">
                    <div className="active-environmental-info-element" onClick={() => this.setState({ Genderinequality: false })}> 
                        <div className="active-info-box-content"> <GenderInequality /> </div>

                    </div>
                </div>
        }

        if(this.state.Humantoxicity){
            info =   
                <div className="right-half-flex-container">
                    <div className="active-environmental-info-element" onClick={() => this.setState({ Humantoxicity: false })}> 
                        <div className="active-info-box-content"> <HumanToxicity /> </div>

                    </div>
                </div>
        }

        if(this.state.Lackofcleanhouseholdenergy){
            info =   
                <div className="right-half-flex-container">
                    <div className="active-environmental-info-element" onClick={() => this.setState({ Lackofcleanhouseholdenergy: false })}> 
                        <div className="active-info-box-content"> <LackOfCleanHouseholdEnergy /> </div>

                    </div>
                </div>
        }

        if(this.state.Livinginslums){
            info =   
                <div className="right-half-flex-container">
                    <div className="active-environmental-info-element" onClick={() => this.setState({ Livinginslums: false })}> 
                        <div className="active-info-box-content"> <LivingInSlums /> </div>

                    </div>
                </div>
        }

        if(this.state.Marginalisation){
            info =   
                <div className="right-half-flex-container">
                    <div className="active-environmental-info-element" onClick={() => this.setState({ Marginalisation: false })}> 
                        <div className="active-info-box-content"> <Marginalisation /> </div>

                    </div>
                </div>
        }

        if(this.state.Polluteddrinkingwater){
            info =   
                <div className="right-half-flex-container">
                    <div className="active-environmental-info-element" onClick={() => this.setState({ Polluteddrinkingwater: false })}> 
                        <div className="active-info-box-content"> <PollutedDrinkingWater /> </div>

                    </div>
                </div>
        }

         if(this.state.Precariouswork){
            info =   
                <div className="right-half-flex-container">
                    <div className="active-environmental-info-element" onClick={() => this.setState({ Precariouswork: false })}> 
                        <div className="active-info-box-content"> <PrecariousWork /> </div>

                    </div>
                </div>
        } 

         if(this.state.Violentconflict){
            info =   
                <div className="right-half-flex-container">
                    <div className="active-environmental-info-element" onClick={() => this.setState({ Violentconflict: false })}> 
                        <div className="active-info-box-content"> <ViolentConflict /> </div>

                    </div>
                </div>
        }

        return (
            <div>{info}</div>
        );
    }
}

export default Social;
