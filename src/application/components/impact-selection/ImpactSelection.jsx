import React from "react";
import './ImpactSelection.css';

class ImpactSelection extends React.Component {
	constructor() {
        super();
        this.state = {
        	/* Sets some default values if
        	   something goes wrong */
            page: 'current',
            numberOfEnvironmentalImpacts: 'some',
            numberOfSocialImpacts: 'some',
            plural: 's',
            bgColor: 'rgba(1, 1, 1, 0.1)'
        }; 
    }

    componentDidMount() {
    	if(this.props.fromPage === "resourceExtraction") {
    		this.setState({
    			page: 'resource extraction',
    			numberOfEnvironmentalImpacts: 'eight',
            	numberOfSocialImpacts: 'eleven',
            	bgColor: 'rgba(0, 138, 0, 0.1)'
    		})
    	}
    	if(this.props.fromPage === "manufacturing") {
    		this.setState({
    			page: 'manufacturing',
    			numberOfEnvironmentalImpacts: 'seven',
            	numberOfSocialImpacts: 'eight',
            	bgColor: 'rgba(189, 46, 194, 0.1)'
    		})
    	}
    	if(this.props.fromPage === "transport") {
    		this.setState({
    			page: 'transport',
    			numberOfEnvironmentalImpacts: 'five',
            	numberOfSocialImpacts: 'one',
            	bgColor: 'rgba(0, 102, 255, 0.1)',
            	plural: ''
    		})
    	}
    	if(this.props.fromPage === "use") {
    		this.setState({
    			page: 'use',
    			numberOfEnvironmentalImpacts: 'five',
            	numberOfSocialImpacts: 'one',
            	bgColor: 'rgba(235, 1, 0, 0.1)',
            	plural: ''
    		})
    	}
    	if(this.props.fromPage === "endOfLife") {
    		this.setState({
    			page: 'end of life',
    			numberOfEnvironmentalImpacts: 'four',
            	numberOfSocialImpacts: 'eight',
            	bgColor: 'rgba(198, 80, 0, 0.1)'
    		})
    	}
    }


	render() {

		let menu;

		if(this.props.pageState === "default") {
			menu = (
				<div className="impact-sub-menu">
	                <button 
	                    className="environmental-element" 
	                    tabIndex="0"
	                    style={{backgroundColor: this.state.bgColor}} 
	                    onClick={this.props.environmental}>
	                    <h2>
	                        Environmental impacts 
	                        <span> &rarr; </span>
	                    </h2>
	                    <p 
	                        className="button-p">
	                        There are {this.state.numberOfEnvironmentalImpacts} {' '} 
	                        environmental impacts in the {this.state.page} phase
	                    </p>
	                </button>
	                <button 
	                    className="social-element" 
	                    tabIndex="0" 
	                    style={{backgroundColor: this.state.bgColor}}
	                    onClick={this.props.social}> 
	                    <h2>
	                        Social impacts 
	                        <span> &rarr; </span>
	                    </h2>
	                    <p 
	                        className="button-p">
	                        There are {this.state.numberOfSocialImpacts} {' '} 
	                        social impact{this.state.plural} in the {this.state.page} phase
	                    </p>
	                </button>
	            </div>
			)
		}
		
		if(this.props.pageState === "environmental" || this.props.pageState === "social") {
			menu = (
				<div className="impact-sub-menu">
	                <button 
	                    className="default-element" 
	                    tabIndex="0"
	                    style={{backgroundColor: this.state.bgColor}} 
	                    onClick={this.props.default}>
	                    <h2>
	                    	<span> &larr; </span>
	                        Go back
	                    </h2>
	                </button>
	            </div>
			)
		} 

		return (
			<div>{menu}</div>	
		);
	}
}
export default ImpactSelection;
