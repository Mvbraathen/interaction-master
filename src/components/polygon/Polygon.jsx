import React, {Component} from 'react';
import * as d3 from "d3";
import "./Polygon.css";

class Polygon extends Component {
	componentDidMount() {
    	this.drawPolygon();
  	}
    
  	drawPolygon() {
        let svgContainer = d3.select("body")
        .append("svg")
        .attr("width", 500)
        .attr("height", 500)
                  
        svgContainer.append("polygon")
        .attr("class", "polygonStyle")
        .attr("fill", "blue")
        .attr("points", "190 49,181 94,164 109,149 122,136 133,127 141,125 141,117 138,109 136,91 136,83 137,75 139,69 141,63 113,57 81,54 72,51 69,15 37,1 25,1 23,15 16,26 12,47 6,55 4,62 3,82 1,115 1,131 3,140 5,148 7,154 8,164 12,166 12,195 25");

        svgContainer.append("polygon")
        .attr("class", "polygonStyle")
        .attr("fill", "red")
        .attr("fill-opacity", 0.4)
        .attr("points", "300,20, 200,80, 100,30");
  	}
        
  	render(){
    	return <div id={"#" + this.props.id}></div>
  	}
}

export default Polygon;