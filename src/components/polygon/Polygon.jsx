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

  	}
        
  	render(){
    	return <div>
            <svg width="200" height="150" viewbox="0 0 0 0">
                <g>
                    <path className="slice1" 
                        d="M99.42,23.65C70.8,23.29,43.6,29.43,19.19,40.67l35.15,
                        31.01l14.86,68.89c8.9-3.57,18.63-5.5,28.82-5.37 c9.76,
                        0.12,19.04,2.13,27.55,5.63L180,94.39l9.57-46.2C162.94,
                        32.96,132.21,24.06,99.42,23.65z"
                    />
                </g>
                    
                <g>
                    <path className="slice2" 
                        d="M99.48,18.65c33.09,0.42,
                        64.15,9.23,91.16,24.39l3.95-19.07C166.21,9.06,133.97,0.45,
                        99.71,0.02 C63.75-0.44,29.79,8.18,0,23.74l15.1,13.32C40.67,
                        24.92,69.31,18.27,99.48,18.65z" 
                    />
                </g>
            </svg>
        </div>
  	}
}

export default Polygon;