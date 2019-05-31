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

/* Package to add fade inn effect to social impact elements */
import Fade from 'react-reveal/Fade';


class Social extends React.Component {
    constructor() {
        super();
        this.state = {
            /* States to expand or collapse all Environmental info elements */
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
            Violentconflict: false,
             /* expand text will change on hover */
            expandText: '+',
            changeTextStyle: 'default-style'
        }
    }

    handleClick(event, value){
        /* removes spaces from array values to correspond with state name */
        value = value.replace(/\s+/g, '');
        this.setState({
            [value]: true
        })
    }

    /* function that makes elements accessible through tab navigation  */
    keyPressed(event, value) {
      if (event.key === "Enter") {
        this.handleClick(event, value)
      }
    }

     //set the text
    onMouseover (e) {
        this.setState({ expandText : 'Explore',
                        changeTextStyle: 'not-default-style'})
    }
    //clear the text
    onMouseout (e) {
        this.setState({ expandText : '+',
                        changeTextStyle: 'default-style'})
    }

	render() {
        let info;
        let resourceExtractionArray = ['Child labour', 'Discrimination', 'Food insecurity', 'Gender inequality', 'Human toxicity', 'Lack of clean household energy', 'Living in slums', 'Marginalisation', 'Polluted drinking water', 'Precarious work', 'Violent conflict'];
        let manufacturingArray = ['Child labour', 'Discrimination', 'Food insecurity', 'Gender inequality', 'Human toxicity', 'Lack of clean household energy', 'Polluted drinking water', 'Precarious work'];
        let transportArray = ['Human toxicity'];
        let useArray = ['Human toxicity'];
        let endOfLifeArray = ['Child labour', 'Food insecurity', 'Human toxicity', 'Lack of clean household energy', 'Living in slums', 'Polluted drinking water', 'Precarious work', 'Violent conflict'];

        const text = this.state.expandText;
        
        
        /* Determines which elements to render based on the fromPage prop from parent component */
        if(this.props.fromPage === 'resourceExtraction') {
            info =   
                <div className="right-half-flex-container" >
                    {resourceExtractionArray.map((value, index) => {
                        return (
                            <Fade delay="100">
                                <div tabIndex="0" onKeyPress={(e) => {this.keyPressed(e, value)}} key={index} className="social-info-element"  onClick={(e) => {this.handleClick(e, value)}}>
                                    <div className="info-box-content"> {value} </div> 
                                    <div className={this.state.changeTextStyle} onMouseEnter={this.onMouseover.bind(this)}
                                    onMouseLeave={this.onMouseout.bind(this)}>
                                        {text}
                                    </div> 
                                </div>
                            </Fade>
                        );
                    })}
                </div>
        }
            
        if(this.props.fromPage === 'manufacturing') {
            info =   
                <div className="right-half-flex-container" >
                    {manufacturingArray.map((value, index) => {
                        return (
                            <Fade delay="100">
                                <div tabIndex="0" onKeyPress={(e) => {this.keyPressed(e, value)}} key={index} className="social-info-element"  onClick={(e) => {this.handleClick(e, value)}}>
                                    <div className="info-box-content"> {value} </div> 
                                    <div className={this.state.changeTextStyle} onMouseEnter={this.onMouseover.bind(this)}
                                    onMouseLeave={this.onMouseout.bind(this)}>
                                        {text}
                                    </div> 
                                </div>
                            </Fade>
                        );
                    })}
                </div>
        }

        if(this.props.fromPage === 'transport') {
            info =   
                <div className="right-half-flex-container" >
                    {transportArray.map((value, index) => {
                        return (
                           <Fade delay="100">
                                <div tabIndex="0" onKeyPress={(e) => {this.keyPressed(e, value)}} key={index} className="social-info-element"  onClick={(e) => {this.handleClick(e, value)}}>
                                    <div className="info-box-content"> {value} </div> 
                                    <div className={this.state.changeTextStyle} onMouseEnter={this.onMouseover.bind(this)}
                                    onMouseLeave={this.onMouseout.bind(this)}>
                                        {text}
                                    </div> 
                                </div>
                            </Fade>
                        );
                    })}
                </div>
        }

        if(this.props.fromPage === 'use') {
            info =   
                <div className="right-half-flex-container" >
                    {useArray.map((value, index) => {
                        return (
                           <Fade delay="100">
                                <div tabIndex="0" onKeyPress={(e) => {this.keyPressed(e, value)}} key={index} className="social-info-element"  onClick={(e) => {this.handleClick(e, value)}}>
                                    <div className="info-box-content"> {value} </div> 
                                    <div className={this.state.changeTextStyle} onMouseEnter={this.onMouseover.bind(this)}
                                    onMouseLeave={this.onMouseout.bind(this)}>
                                        {text}
                                    </div> 
                                </div>
                            </Fade>
                        );
                    })}
                </div>
        }

        if(this.props.fromPage === 'endOfLife') {
            info =   
                <div className="right-half-flex-container" >
                    {endOfLifeArray.map((value, index) => {
                        return (
                            <Fade delay="100">
                                <div tabIndex="0" onKeyPress={(e) => {this.keyPressed(e, value)}} key={index} className="social-info-element"  onClick={(e) => {this.handleClick(e, value)}}>
                                    <div className="info-box-content"> {value} </div> 
                                    <div className={this.state.changeTextStyle} onMouseEnter={this.onMouseover.bind(this)}
                                    onMouseLeave={this.onMouseout.bind(this)}>
                                        {text}
                                    </div> 
                                </div>
                            </Fade>
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
