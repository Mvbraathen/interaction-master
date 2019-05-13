import React, {Component} from 'react';
import {
    NavLink
} from "react-router-dom";
import "./Use.css";

class Use extends Component {
	    render() {
	    	return (
                <g><NavLink className="use" to ="/use"> 
                    <title>Use</title>
                    <path d="M213.6,396.8c28.6,0.4,55.8-5.8,80.2-17l-35.1-31l-14.9-68.9c-8.9,3.6-18.6,5.5-28.8,5.4
                            c-9.8-0.1-19-2.1-27.6-5.6L133,326l-9.6,46.2C150.1,387.5,180.8,396.4,213.6,396.8z M213.5,401.8c-33.1-0.4-64.1-9.2-91.2-24.4l-3.9,19.1c28.4,14.9,60.6,23.5,94.9,24
                            c36,0.5,69.9-8.2,99.7-23.7l-15.1-13.3C272.3,395.5,243.7,402.2,213.5,401.8z "/> 

                    <path className = "useTxt" d="M199.9,415.3c-0.8,0.5-1.7,0.8-3,0.7c-1.2-0.1-2.2-0.5-2.8-1.1s-0.9-1.6-0.8-2.9l0.5-5.8l2,0.2
                            l-0.5,5.8c0,0.2,0,0.5,0,0.7s0.1,0.5,0.2,0.7c0.1,0.2,0.3,0.4,0.5,0.5s0.6,0.2,1,0.2c0.7,0.1,1.2-0.1,1.5-0.4s0.5-0.8,0.5-1.5
                            l0.5-5.8l2,0.2l-0.5,5.8C201.1,413.8,200.6,414.7,199.9,415.3z 
                            M212.4,414.1c0.1,0.2,0.3,0.4,0.5,0.5s0.4,0.2,0.7,0.3s0.5,0.1,0.8,0.1c0.2,0,0.4,0,0.6,0
                            c0.2,0,0.4-0.1,0.6-0.2c0.2-0.1,0.3-0.2,0.4-0.4s0.2-0.4,0.2-0.6s-0.1-0.5-0.2-0.6c-0.2-0.1-0.4-0.3-0.6-0.4s-0.6-0.2-0.9-0.3
                            s-0.7-0.1-1-0.2c-0.4-0.1-0.7-0.2-1-0.3s-0.6-0.3-0.9-0.5c-0.3-0.2-0.5-0.4-0.6-0.7c-0.2-0.3-0.2-0.7-0.3-1.1
                            c0-0.5,0.1-0.9,0.3-1.2c0.2-0.4,0.5-0.6,0.8-0.9c0.3-0.2,0.7-0.4,1.1-0.5s0.8-0.2,1.2-0.2c0.5,0,0.9,0,1.4,0.1s0.9,0.3,1.2,0.5
                            c0.4,0.2,0.6,0.5,0.8,0.9s0.3,0.8,0.3,1.4h-2c0-0.3-0.1-0.5-0.2-0.7s-0.2-0.3-0.4-0.4s-0.4-0.2-0.6-0.2s-0.4-0.1-0.7,0
                            c-0.2,0-0.3,0-0.5,0.1s-0.3,0.1-0.4,0.2s-0.2,0.2-0.3,0.3c-0.1,0.1-0.1,0.3-0.1,0.5s0,0.3,0.1,0.4s0.2,0.2,0.4,0.3
                            c0.2,0.1,0.5,0.2,0.9,0.3s0.8,0.2,1.4,0.3c0.2,0,0.4,0.1,0.7,0.2s0.6,0.2,0.9,0.4s0.6,0.5,0.8,0.8s0.3,0.8,0.4,1.3
                            c0,0.4-0.1,0.8-0.2,1.2c-0.2,0.4-0.4,0.7-0.7,1s-0.7,0.5-1.2,0.6s-1,0.2-1.7,0.2c-0.5,0-1,0-1.5-0.2c-0.5-0.1-0.9-0.3-1.3-0.6
                            s-0.7-0.6-0.9-1s-0.3-0.9-0.3-1.5h2C212.3,413.7,212.3,413.9,212.4,414.1z
                            M233.7,406.1l0.1,1.7l-4.9,0.4l0.2,2l4.5-0.4l0.1,1.6l-4.5,0.4l0.2,2.3l5-0.4l0.1,1.7l-7,0.6
                            l-0.8-9.2L233.7,406.1z"/> 

                    <path className = "useIcon" d="M222.4,356.2l-6.6-14.5c-0.5-1-1.4-1.8-2.4-2.1v-14.1c0-1.8-1.4-3.2-3.2-3.2h-21.6
                            c-1.8,0-3.2,1.4-3.2,3.2v38.9c0,1.8,1.4,3.2,3.2,3.2h21.6c0.1,0,0.3,0,0.4,0l2.2,1.3c0.4,0.3,0.9,0.4,1.4,0.4c1,0,1.8-0.5,2.3-1.3
                            l5.7-9.2C222.7,358,222.7,357,222.4,356.2z M188.2,358.2v-30.4h22.2v12.1c-0.7,0.3-1.2,0.9-1.6,1.4c-0.5,0.8-0.7,1.7-0.6,2.5l-7-4.3
                            c-0.8-0.4-1.5-0.6-2.3-0.6c-1.4,0-2.7,0.7-3.4,1.9c-1.2,1.9-0.6,4.4,1.3,5.5l3.6,2.2c-0.7,1.1-0.8,2.4-0.4,3.5
                            c-0.2,0.2-0.5,0.5-0.6,0.8c-1,1.6-0.7,3.5,0.5,4.8c-0.1,0.2-0.1,0.4-0.1,0.6H188.2z M201.9,362.9c0,1.4-1.2,2.6-2.6,2.6
                            c-1.4,0-2.6-1.2-2.6-2.6c0-1.4,1.2-2.6,2.6-2.6c0.3,0,0.6,0.1,0.9,0.2c0.3,0.6,0.8,1.2,1.5,1.6l0.1,0
                            C201.8,362.4,201.9,362.6,201.9,362.9z M220.5,357.8l-5.7,9.2c-0.2,0.3-0.4,0.4-0.7,0.4c-0.1,0-0.3,0-0.4-0.1l-11.1-6.8
                            c-0.8-0.5-1.1-1.5-0.9-2.3h0c0.1-0.2,0.1-0.4,0.2-0.6c0.1-0.2,0.3-0.4,0.5-0.5l-0.7-0.4c-1-0.6-1.3-1.9-0.7-2.9c0.4-0.6,1.1-1,1.8-1
                            c0.4,0,0.7,0.1,1.1,0.3l-1.2-0.7c-1-0.6-1.3-1.9-0.7-2.9c0.4-0.6,1.1-1,1.8-1c0.2,0,0.3,0,0.5,0.1l-6.4-3.9c-1-0.6-1.3-1.9-0.7-2.9
                            c0.4-0.6,1-1,1.7-1c0.4,0,0.7,0.1,1.1,0.3l11.6,7.2h0.1h0.1c0-0.1,0-0.1,0-0.2l-1.7-3.8c-0.3-0.7-0.2-1.4,0.1-2
                            c0.1-0.1,0.1-0.2,0.2-0.2v0.1c0.2-0.3,0.4-0.5,0.8-0.6c0.7-0.3,1.6-0.2,2.2,0.3v0c0.2,0.2,0.4,0.4,0.5,0.6l6.6,14.5
                            C220.6,357.2,220.6,357.5,220.5,357.8z"/> 

                    <path className="useLine" d="M295.8,377.2c-24.2,11.8-51.4,18.5-80.1,18.5c-34.6,0-67.1-9.7-94.7-26.5
                            c-0.5,2.3-1.2,5-1.7,7.1c28.3,16.7,61.2,26.3,96.3,26.3c30.9,0,60.1-7.4,86-20.6C299.8,380.5,297.6,378.7,295.8,377.2z"/>
                            
                </NavLink></g>
	    	)
	    }
	}

export default Use;