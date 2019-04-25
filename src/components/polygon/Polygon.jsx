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
        .attr("points", "99,42, 13,65, 85,80");
  	}
        
  	render(){
    	return <div id={"#" + this.props.id}></div>
  	}
}

export default Polygon;