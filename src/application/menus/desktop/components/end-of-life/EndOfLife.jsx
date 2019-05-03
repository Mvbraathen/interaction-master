import React, {Component} from 'react';
import {
    NavLink
} from "react-router-dom";
import "./EndOfLife.css";

class EndOfLife extends Component {
	    render() {
	    	return (
                <g> <NavLink className="endOfLife" to ="/end-of-life">
                    <path d="M30.3,278.5l-5.5,2.1l0.7,1.8c0.1,0.3,0.2,0.5,0.4,0.8c0.2,0.2,0.4,0.4,0.7,0.5c0.3,0.1,0.6,0.2,1,0.2
                            c0.4,0,0.8-0.1,1.3-0.3c0.4-0.2,0.8-0.4,1.1-0.6s0.6-0.5,0.7-0.8c0.2-0.3,0.3-0.6,0.3-1c0-0.4-0.1-0.8-0.2-1.3L30.3,278.5z M39.8,301.6c0.2-0.4,0.3-0.6,0.3-1c0-0.4-0.1-0.8-0.3-1.2c-0.2-0.4-0.5-0.7-0.8-0.9c-0.3-0.2-0.6-0.3-1-0.4
                            c-0.4-0.1-0.7,0-1.1,0.1c-0.4,0.1-0.8,0.2-1.1,0.4c-0.4,0.3-0.7,0.5-1,0.8c-0.3,0.2-0.5,0.5-0.7,0.8c-0.2,0.3-0.3,0.6-0.3,1
                            c0,0.4,0.1,0.8,0.3,1.2c0.2,0.4,0.5,0.7,0.8,0.9c0.3,0.2,0.6,0.3,1,0.4c0.3,0,0.7,0,1.1-0.1c0.4-0.1,0.7-0.2,1.1-0.4
                            c0.4-0.2,0.7-0.4,1-0.7C39.4,302.3,39.6,302,39.8,301.6z M50.3,305.3c-16.2-28.9-24.1-60.2-24.5-91.1l-18.5,6.1c1.3,32,9.9,64.3,26.7,94.2
                            c17.6,31.4,42,56.5,70.4,74.5l4-19.7C85.1,353.1,65,331.6,50.3,305.3z M15.2,253.9l9-2.1l1.6,6.7l-1.7,0.4l-1.1-4.8l-1.9,0.5
                            l1,4.4l-1.5,0.4l-1-4.4l-2.2,0.5l1.1,4.9l-1.7,0.4L15.2,253.9z M20.1,271.6l4.8-5.5l-5.9,1.8l-0.6-1.8l8.9-2.7l0.5,2l-4.8,5.5
                            l6-1.8l0.6,1.8l-8.9,2.7L20.1,271.6z M29.9,285.5c-0.6,0.2-1.2,0.4-1.8,0.4c-0.6,0-1.1,0-1.7-0.2c-0.5-0.2-1-0.5-1.4-0.9
                            c-0.4-0.4-0.7-0.9-1-1.6l-1.4-3.7l8.7-3.3l1.4,3.7c0.2,0.6,0.3,1.1,0.3,1.7c0,0.5-0.1,1.1-0.3,1.6s-0.6,0.9-1,1.3
                            C31.2,284.9,30.7,285.2,29.9,285.5z M35.3,305.4c-0.6-0.1-1.1-0.4-1.6-0.8c-0.5-0.4-0.9-0.9-1.2-1.5c-0.3-0.6-0.5-1.3-0.5-1.9
                            c0-0.6,0-1.2,0.3-1.7c0.2-0.5,0.5-1,1-1.5c0.4-0.5,0.9-0.8,1.5-1.1c0.7-0.3,1.3-0.5,1.9-0.6c0.6-0.1,1.2,0,1.8,0.1
                            c0.6,0.1,1.1,0.4,1.6,0.8c0.5,0.4,0.9,0.9,1.2,1.5c0.3,0.6,0.5,1.3,0.5,1.9c0,0.6-0.1,1.2-0.3,1.7s-0.5,1-1,1.5
                            c-0.4,0.5-1,0.8-1.6,1.1c-0.6,0.3-1.2,0.5-1.8,0.6C36.5,305.6,35.9,305.5,35.3,305.4z M45.4,314.3l-1.4,0.8l-2-3.3l-3.3,2l-1-1.8
                            l8-4.7l3.3,5.6l-1.5,0.9l-2.3-3.9l-1.8,1.1L45.4,314.3z M52.1,334l-3.9-5.3l7.5-5.5l1.2,1.6l-6.1,4.5l2.7,3.7L52.1,334z
                            M55.4,338.1l7.2-5.8l1.3,1.6l-7.2,5.8L55.4,338.1z M67.2,346l-2.6-2.9l-2.9,2.5l-1.4-1.5l6.9-6.2l4.5,5.1l-1.3,1.1l-3-3.4
                            l-1.6,1.4l2.6,2.9L67.2,346z M78.8,352.6l-3.5-3.5l-1.4,1.4l3.2,3.2l-1.1,1.1l-3.2-3.2l-1.6,1.6l3.6,3.5l-1.2,1.2l-5-5l6.6-6.6
                            l4.8,5.1L78.8,352.6z M151.8,248.3c-4.8-8.5-7.7-17.6-8.9-26.7l-67.4-23.9l-44.8,14.8c0.2,30.7,7.9,61.7,23.9,90.3
                            c14,25,32.9,45.5,54.8,61l9.3-45.9l52.2-47.3C163.4,264.7,156.8,257.2,151.8,248.3z M104.8,240.9l3.2,4.8l3.3-1.4l-4.8,8.7
                            l-10.3-0.1l2.7-1.7l-3.5-6.2c1-1.8,2.1-3.7,3.5-4.6C100.3,239.5,103.4,238.6,104.8,240.9z M72.7,252.5l9.8-0.2l4.9,9.1l-2.8-1.5
                            l-3.7,6.1c-2,0.1-4.3,0-5.7-0.8s-3.7-3.1-2.4-5.4l2.7-5.1L72.7,252.5z M91.5,278h-6.4c-2.4,0-4.7-0.3-5.9-1.9l-6.1-11.2
                            c1.9,2.1,4.4,2.5,6.3,2.4l12.1,0.1V278z M89.2,253.5l-9.3-5.1l3.1-5.6c1.1-2.2,2.5-4,4.5-4.3l12.7,0.1c-2.8,0.6-4.3,2.6-5,4.3
                            L89.2,253.5z M106.8,277.8l-5.7,0.4l-0.4,3.6l-5.4-8.3l5.1-9l0.2,3.2l7.2-0.1c1.1,1.7,2.2,3.7,2.3,5.3
                            C110.2,274.5,109.5,277.7,106.8,277.8z M117.4,263.8l-6.3,11.1c0.8-2.7-0.2-5-1.2-6.6l-6.4-10.3l9-5.6l3.4,5.4
                            C117.2,259.8,118.1,261.9,117.4,263.8z"/>
                </NavLink></g>
	    	)
	    }
	}

export default EndOfLife;