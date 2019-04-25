import React, {Component} from 'react';
import * as d3 from "d3";

class Circle extends Component {
	componentDidMount() {
    	this.drawCircle();
  	}
    
  	drawCircle() {
    	let svgContainer = d3.select("body")
    	.append("svg")
    	.attr("width", 200)
    	.attr("height", 200)
                  
    	svgContainer.append("circle")
      	.attr("cx", 120)
      	.attr("cy", 120)
      	.attr("r", 80);
  	}
        
  	render(){
    	return <div id={"#" + this.props.id}></div>
  	}
}

export default Circle;