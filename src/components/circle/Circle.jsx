import React, {Component} from 'react';
import * as d3 from "d3";
import "./Circle.css";

class Circle extends Component {
	componentDidMount() {
    	this.drawCircle();
  	}
    
  	drawCircle() {
    	let svgContainer = d3.select("body")
    	.append("svg")
    	.attr("width", 500)
    	.attr("height", 500)
                  
    	svgContainer.append("circle")
    	.attr("class", "circleStyle")
      	.attr("cx", 120)
      	.attr("cy", 120)
      	.attr("r", 80)
      	.attr("fill", "red");
  	}
        
  	render(){
    	return <div id={"#" + this.props.id}></div>
  	}
}

export default Circle;