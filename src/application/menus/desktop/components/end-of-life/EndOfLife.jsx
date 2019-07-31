import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./EndOfLife.css";

class EndOfLife extends Component {
    render() {
        return (
            <g>
                <NavLink className="endOfLife" to="/end-of-life">
                    <title>End of life</title>
                    <path
                        d="M96.9,384.3C40.8,348.7,2.8,287.1,0,216.5l18.2-5.7c0.8,64.1,33.5,120.6,82.9,154.4L96.9,384.3z
                        M112.7,312.4l52-44.5c-16.1-11.7-27.2-29.8-29.8-50.5l-65-23L26.8,208c0,0.1,0,0.1,0,0.2c0,61,30.1,115,76.3,147.8L112.7,312.4z"
                    />

                    <path id="_x5F_x32_x5F_-END_x5F_OF_x5F_LIFE_x5F_1_x5F_" fill="none" class="st1" d="M11.4,260.2c28,108.9,138.9,174.4,247.7,146.5
                    s174.4-138.9,146.5-247.7C377.7,50.1,266.8-15.5,157.9,12.4S-16.5,151.3,11.4,260.2z"/>
                    <text id="_x32_-END_OF_LIFE">   <textPath  xlinkHref="#_x5F_x32_x5F_-END_x5F_OF_x5F_LIFE_x5F_1_x5F_" startOffset="0.1261%">
                    <tspan  class="st0" style={{fontFamily:'Helvetica-Bold', fontSize: '14.6544px', fill: 'white'}}>END OF LIFE</tspan></textPath>
                    </text>

                    <path
                        className="endIcon"
                        d="M70.3,251.9l2.8,2.2l-2.7,5.1c-1.3,2.3,1,4.6,2.4,5.4s3.7,0.9,5.7,0.8l3.7-6.1l2.8,1.5
                        l-4.9-9.1L70.3,251.9z M70.7,264.2l6.1,11.2c1.2,1.6,3.5,1.9,5.9,1.9h6.4v-10.6L77,266.6C75.1,266.8,72.6,266.4,70.7,264.2z
                         M108.9,243.7l-3.3,1.4l-3.2-4.8c-1.4-2.3-4.5-1.4-5.9-0.5s-2.5,2.8-3.5,4.6l3.5,6.2l-2.7,1.7l10.3,0.1L108.9,243.7z M97.8,238
                        l-12.7-0.1c-2,0.3-3.4,2.1-4.5,4.3l-3.1,5.6l9.3,5.1l6-10.6C93.5,240.6,95,238.6,97.8,238z M98.3,281.1l0.4-3.6l5.7-0.4
                        c2.7-0.1,3.4-3.3,3.3-4.9s-1.2-3.6-2.3-5.3l-7.2,0.1l-0.2-3.2l-5.1,9L98.3,281.1z M108.7,274.2l6.3-11.1c0.7-1.9-0.2-4-1.5-6
                        l-3.4-5.4l-9,5.6l6.4,10.3C108.5,269.2,109.5,271.6,108.7,274.2z"
                    />
                </NavLink>
            </g>
        );
    }
}

export default EndOfLife;
