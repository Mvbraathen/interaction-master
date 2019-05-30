import React from 'react';
/* Environmental impacts */
import Acidification from "./environmental/Acidification";
import Biodiversity from "./environmental/Biodiversity";
import Co2 from "./environmental/Co2";
import Deforestation from "./environmental/Deforestation";
import Eutrophication from "./environmental/Eutrophication";
import ExcessiveWaterUse from "./environmental/ExcessiveWaterUse";
import Ecotoxicity from "./environmental/Ecotoxicity";
import OzoneDepletion from "./environmental/OzoneDepletion";
import ParticulateMatter from "./environmental/ParticulateMatter";

class Environmental extends React.Component {
    constructor() {
        super();
        this.state = {
            /* show all info elements */
            designInfoElementClicked: false,
            Acidification: false,
            Biodiversityloss: false,
            CO2emissions: false,
            Deforestation: false,
            Eutrophication: false,
            Excessivewateruse: false,
            Ecotoxicity: false,
            Ozonedepletion: false,
            Particulatematter: false
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
        let resourceExtractionArray = ['Acidification', 'Biodiversity loss', 'CO2 emissions', 'Deforestation', 'Eutrophication', 'Excessive water use', 'Ecotoxicity', 'Ozone depletion', 'Particulate matter'];
        let manufacturingArray = ['Acidification', 'Biodiversity loss', 'CO2 emissions', 'Eutrophication', 'Excessive water use', 'Ecotoxicity', 'Ozone depletion', 'Particulate matter'];
        let transportArray = ['Acidification', 'CO2 emissions', 'Eutrophication', 'Ecotoxicity', 'Particulate matter'];
        let useArray = ['Acidification', 'CO2 emissions', 'Eutrophication', 'Ecotoxicity', 'Particulate matter'];
        let endOfLifeArray = ['Biodiversity loss', 'CO2 emissions', 'Ecotoxicity', 'Particulate matter'];
        
        
        /* Determines which elements to render based on the fromPage prop from parent component */
        if(this.props.fromPage === 'resourceExtraction') {
            console.log(this.props.fromPage);
            info =   
                <div className="right-half-flex-container" >
                    {resourceExtractionArray.map((value, index) => {
                        return (
                            <div key={index} className="environmental-info-element"  onClick={(e) => {this.handleClick(e, value)}}>
                                <div className="info-box-content"> {value} </div> 
                                <div class="expand">
                                    +
                                </div> 
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
        if(this.state.Acidification ===  true){
            info =   
                <div className="right-half-flex-container">
                    <div className="active-environmental-info-element" onClick={() => this.setState({ Acidification: false })}> 
                        <div className="active-info-box-content"> <Acidification /> </div>

                    </div>
                </div>
        }

        if(this.state.Biodiversityloss){
            info =   
                <div className="right-half-flex-container">
                    <div className="active-environmental-info-element" onClick={() => this.setState({ Biodiversityloss: false })}> 
                        <div className="active-info-box-content"> <Biodiversity /> </div>

                    </div>
                </div>

        }

        if(this.state.CO2emissions){
            info =   
                <div className="right-half-flex-container">
                    <div className="active-environmental-info-element" onClick={() => this.setState({ CO2emissions: false })}> 
                        <div className="active-info-box-content"> <Co2 /> </div>

                    </div>
                </div>

        }

        if(this.state.Deforestation){
            info =   
                <div className="right-half-flex-container">
                    <div className="active-environmental-info-element" onClick={() => this.setState({ Deforestation: false })}> 
                        <div className="active-info-box-content"> <Deforestation /> </div>

                    </div>
                </div>

        }

        if(this.state.Ecotoxicity){
            info =   
                <div className="right-half-flex-container">
                    <div className="active-environmental-info-element" onClick={() => this.setState({ Ecotoxicity: false })}> 
                        <div className="active-info-box-content"> <Ecotoxicity /> </div>

                    </div>
                </div>

        }

        if(this.state.Eutrophication){
            info =   
                <div className="right-half-flex-container">
                    <div className="active-environmental-info-element" onClick={() => this.setState({ Eutrophication: false })}> 
                        <div className="active-info-box-content"> <Eutrophication /> </div>

                    </div>
                </div>

        }

        if(this.state.Excessivewateruse){
            info =   
                <div className="right-half-flex-container">
                    <div className="active-environmental-info-element" onClick={() => this.setState({ Excessivewateruse: false })}> 
                        <div className="active-info-box-content"> <ExcessiveWaterUse /> </div>

                    </div>
                </div>

        }

        if(this.state.Ozonedepletion){
            info =   
                <div className="right-half-flex-container">
                    <div className="active-environmental-info-element" onClick={() => this.setState({ Ozonedepletion: false })}> 
                        <div className="active-info-box-content"> <OzoneDepletion /> </div>

                    </div>
                </div>

        }

        if(this.state.Particulatematter){
            info =   
                <div className="right-half-flex-container">
                    <div className="active-environmental-info-element" onClick={() => this.setState({ Particulatematter: false })}> 
                        <div className="active-info-box-content"> <ParticulateMatter /> </div>

                    </div>
                </div>

        }

        return (
            <div>{info}</div>
        );
    }
}

export default Environmental;
