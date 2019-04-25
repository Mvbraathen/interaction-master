import React, {Component} from 'react';
import * as d3 from "d3";
import "./Polygon.css";

class Polygon extends Component {
	componentDidMount() {
    	this.drawPolygon();
  	}
    
  	drawPolygon() {
        var x = d3.scaleLinear().range([0, 500]);
        var y = d3.scaleLinear().range([500, 0]);

        x.domain([0, 50]);
        y.domain([0, 50]);

        var poly = [{"x":10, "y":50},
                    {"x":20,"y":20},
                    {"x":50,"y":10},
                    {"x":30,"y":30}];


        let svgContainer = d3.select("body")
        	.append("svg")
        	.attr("width", 500)
        	.attr("height", 500)
                      
        svgContainer.selectAll("polygon")
            .data([poly])
            .enter().append("polygon")
            .attr("points",function(d) { 
                return d.map(function(d) {
                    return [x(d.x),y(d.y)].join(",");
                }).join(" ");
            });
  	}
        
  	render(){
    	return <div id={"#" + this.props.id}></div>
  	}
}

export default Polygon;