import React from "react";
import './ImpactSelection.css';

class ImpactSelection extends React.Component {
	render() {

		let menu;

		if(this.props.pageState === "default") {
			menu = (
				<div className="impact-sub-menu">
	                <button 
	                    className="environmental-element" 
	                    tabIndex="0" 
	                    onClick={this.props.environmental}>
	                    <h2>
	                        Environmental impacts 
	                        <span> &rarr; </span>
	                    </h2>
	                    <p 
	                        className="button-p">
	                        There are seven environmental impacts 
	                        in the manufacturing phase
	                    </p>
	                </button>
	                <button 
	                    className="social-element" 
	                    tabIndex="0" 
	                    onClick={this.props.social}> 
	                    <h2>
	                        Social impacts 
	                        <span> &rarr; </span>
	                    </h2>
	                    <p 
	                        className="button-p">
	                        There are eight social impacts 
	                        in the manufacturing phase
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
	                    onClick={this.props.default}>
	                    <h2>
	                    	<span> &larr; </span>
	                        Go back
	                    </h2>
	                    <p 
	                        className="button-p">
	                        Return to the main page of 
	                        the manufacturing phase
	                    </p>
	                </button>
	            </div>
			)
		} 

		return (
			<>{console.log.pageState}
			<div>{menu}</div></>
			
		);
	}
}
export default ImpactSelection;
