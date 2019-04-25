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
        .attr("points", "304 46,304 46,304 47,304 47,305 47,305 47,305 48,305 48,306 48,306 49,306 49,306 50,307 50,307 50,310 50,311 51,312 51,312 51,313 51,313 51,314 51,314 51,316 51,316 51,318 51,318 51,319 52,321 52,321 52,323 52,323 52,324 52,325 53,326 53,329 54,331 55,332 56,334 56,338 58,341 60,345 63,351 68,356 72,362 75,367 79,372 82,377 87,383 92,389 99,394 105,398 110,405 118,408 122,412 126,414 132,414 148,412 170,410 180,409 192,406 200,402 217,397 235,393 248,387 260,383 267,372 282,366 289,357 300,350 306,335 316,327 322,312 329,296 334,268 334,255 333,244 331,230 327,222 325,205 317,196 311,174 295,164 286,151 274,142 265,132 254,124 243,118 234,114 228,113 220,113 213,114 204,117 194,119 184,125 168,133 151,140 135,148 120,156 107,164 96,180 76,189 66,197 57,204 52,211 49,218 47,229 46,304 46");

        svgContainer.append("polygon")
        .attr("class", "polygonStyle")
        .attr("fill", "red")
        .attr("fill-opacity", 0.4)
        .attr("points", "40,40, 200,80, 100,30");
  	}
        
  	render(){
    	return <div id={"#" + this.props.id}></div>
  	}
}

export default Polygon;