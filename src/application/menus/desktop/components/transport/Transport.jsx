import React, {Component} from 'react';
import {
    NavLink
} from "react-router-dom";
import "./Transport.css";

class Transport extends Component {
	    render() {
	    	return (
                <g> <NavLink className="transport" to ="/transport">
                        <title>Menu selection for the transport page</title>
                        <path d="M374.4,306.1c14.6-24.6,22.9-51.2,25.4-78L355.4,243l-67.1-21.6
                              c-1.4,9.5-4.6,18.9-9.8,27.6c-5,8.4-11.4,15.4-18.6,21l13,70.4l35.2,31.4C334.6,356.5,357.7,334.3,374.4,306.1z M378.7,308.6c-16.9,28.5-40.1,50.9-66.7,66.8l14.5,13c27.1-17.1,50.7-40.7,68.2-70.2
                              c18.4-30.9,27.9-64.6,29.3-98.2l-19.1,6.4C402.7,254.6,394.1,282.7,378.7,308.6z"/>

                        <path className ="transportTxt" d="M349,356.9l-1.2-1.2l5.5-5.3l1.2,1.2l-2,1.9l5.2,5.5l-1.5,1.4L351,355L349,356.9z M360,343.4c0.3-0.3,0.6-0.5,0.9-0.7s0.7-0.2,1-0.3c0.3,0,0.7,0,1,0.1c0.3,0.1,0.6,0.3,0.9,0.5
                              c0.4,0.4,0.7,0.8,0.8,1.2s0.1,0.9-0.1,1.4l0,0c0.2-0.1,0.4-0.2,0.7-0.2c0.2,0,0.4,0,0.6,0c0.2,0.1,0.4,0.1,0.6,0.3
                              c0.2,0.1,0.4,0.3,0.6,0.4c0.1,0.1,0.2,0.2,0.4,0.3c0.2,0.1,0.3,0.3,0.5,0.4c0.2,0.1,0.3,0.2,0.5,0.3c0.2,0.1,0.3,0.1,0.5,0.2
                              l-1.4,1.5c-0.3-0.1-0.6-0.3-0.9-0.6c-0.3-0.3-0.6-0.5-0.9-0.7c-0.4-0.3-0.8-0.4-1.1-0.4c-0.3,0-0.7,0.2-1,0.6l-1.4,1.5l2.7,2.5
                              l-1.4,1.5l-6.8-6.3L360,343.4z M362.6,346.7c0.3-0.3,0.5-0.7,0.5-1c0-0.3-0.2-0.6-0.5-0.9c-0.3-0.3-0.7-0.4-1-0.4
                              c-0.3,0-0.6,0.2-0.9,0.6l-1.5,1.6l1.9,1.8L362.6,346.7z M368.2,333.7l9.4,3.1l-1.3,1.7l-2-0.7l-2.2,2.7l1.2,1.9l-1.3,1.6l-5-8.6L368.2,333.7z M372.7,337.2
                              l-3.4-1.2l0,0l1.9,3.1L372.7,337.2z M374.2,325.8l7.3,0.4l0,0l-5.1-3.6l1.1-1.6l7.6,5.3L384,328l-7.3-0.4l0,0l5.1,3.6l-1.1,1.6l-7.6-5.3
                              L374.2,325.8z M387.3,318.8c0.2,0,0.5,0,0.7-0.1c0.2-0.1,0.4-0.2,0.6-0.4c0.2-0.2,0.3-0.4,0.5-0.6
                              c0.1-0.2,0.2-0.3,0.3-0.5c0.1-0.2,0.1-0.4,0.1-0.6c0-0.2,0-0.4-0.1-0.6c-0.1-0.2-0.2-0.3-0.4-0.4c-0.2-0.1-0.4-0.2-0.6-0.1
                              c-0.2,0.1-0.4,0.2-0.7,0.3c-0.2,0.2-0.4,0.4-0.7,0.6c-0.2,0.2-0.5,0.5-0.7,0.7c-0.3,0.3-0.5,0.5-0.8,0.7c-0.3,0.2-0.6,0.4-0.9,0.5
                              c-0.3,0.1-0.6,0.2-1,0.2c-0.3,0-0.7-0.1-1.1-0.3c-0.4-0.2-0.7-0.5-0.9-0.9s-0.3-0.7-0.4-1.1c0-0.4,0-0.8,0.1-1.2
                              c0.1-0.4,0.3-0.8,0.5-1.2c0.2-0.4,0.5-0.8,0.8-1.1c0.3-0.3,0.7-0.6,1.1-0.8c0.4-0.2,0.8-0.3,1.2-0.2s0.9,0.2,1.3,0.4l-1,1.7
                              c-0.2-0.1-0.5-0.2-0.7-0.2c-0.2,0-0.4,0-0.6,0.1c-0.2,0.1-0.3,0.2-0.5,0.4c-0.1,0.2-0.3,0.3-0.4,0.6c-0.1,0.1-0.2,0.3-0.2,0.5
                              s-0.1,0.3-0.1,0.5c0,0.2,0,0.3,0.1,0.5c0.1,0.1,0.2,0.3,0.4,0.4c0.2,0.1,0.3,0.1,0.4,0.1c0.1,0,0.3-0.1,0.5-0.2
                              c0.2-0.1,0.4-0.3,0.7-0.6c0.3-0.3,0.6-0.6,1-1c0.1-0.1,0.3-0.3,0.5-0.5c0.2-0.2,0.5-0.4,0.8-0.6c0.3-0.2,0.7-0.3,1.1-0.3
                              c0.4,0,0.8,0.1,1.3,0.4c0.4,0.2,0.7,0.5,0.9,0.8c0.2,0.3,0.4,0.7,0.4,1.1s0,0.9-0.1,1.4s-0.3,1-0.7,1.6c-0.3,0.4-0.6,0.8-0.9,1.2
                              c-0.4,0.3-0.7,0.6-1.2,0.8c-0.4,0.2-0.9,0.3-1.3,0.2c-0.5,0-0.9-0.2-1.4-0.5l1-1.7C386.8,318.7,387.1,318.8,387.3,318.8z M388.6,302.3c0.3-0.5,0.6-0.9,0.9-1.2s0.7-0.5,1.1-0.6c0.4-0.1,0.7-0.1,1.1-0.1
                              c0.4,0.1,0.7,0.2,1.1,0.4c0.3,0.2,0.6,0.4,0.9,0.7s0.5,0.6,0.6,0.9c0.1,0.4,0.2,0.8,0.1,1.2s-0.2,0.9-0.5,1.4l-1,1.9l2.9,1.6
                              l-1,1.8l-8.2-4.3L388.6,302.3z M392.2,304.9c0.1-0.2,0.2-0.4,0.3-0.6c0.1-0.2,0.1-0.4,0.1-0.6s-0.1-0.4-0.2-0.5
                              c-0.1-0.2-0.3-0.3-0.6-0.5c-0.3-0.1-0.5-0.2-0.7-0.2c-0.2,0-0.4,0.1-0.6,0.2c-0.2,0.1-0.3,0.2-0.4,0.4s-0.3,0.4-0.4,0.6L389,305
                              l2.5,1.3L392.2,304.9z M394.8,296.3c-0.5-0.4-0.8-0.9-1.1-1.5c-0.2-0.5-0.4-1.1-0.4-1.7c0-0.6,0.1-1.3,0.4-1.9
                              c0.3-0.7,0.7-1.2,1.1-1.6c0.5-0.4,1-0.7,1.5-0.9s1.2-0.2,1.8-0.2s1.3,0.2,1.9,0.5c0.6,0.3,1.2,0.6,1.6,1.1s0.8,0.9,1,1.4
                              c0.2,0.5,0.4,1.1,0.3,1.7c0,0.6-0.2,1.3-0.4,1.9c-0.3,0.6-0.7,1.2-1.1,1.6c-0.5,0.4-1,0.7-1.5,0.9s-1.1,0.2-1.8,0.2
                              c-0.6,0-1.2-0.2-1.9-0.5C395.8,297.1,395.2,296.7,394.8,296.3z M398.3,295.8c0.4,0.1,0.7,0.1,1.1,0c0.4-0.1,0.7-0.2,1-0.4
                              c0.3-0.2,0.5-0.5,0.7-1s0.3-0.8,0.2-1.2s-0.1-0.7-0.3-1c-0.2-0.3-0.4-0.6-0.7-0.8c-0.3-0.2-0.6-0.4-1-0.6c-0.4-0.2-0.8-0.3-1.1-0.4
                              s-0.8-0.1-1.1,0c-0.4,0.1-0.7,0.2-1,0.4c-0.3,0.2-0.5,0.5-0.7,1c-0.2,0.4-0.3,0.8-0.2,1.2s0.1,0.7,0.3,1c0.2,0.3,0.4,0.6,0.8,0.8
                              c0.3,0.2,0.7,0.4,1,0.6C397.6,295.6,398,295.7,398.3,295.8z M399.4,277.7c0.1-0.4,0.3-0.7,0.6-1c0.2-0.3,0.5-0.5,0.8-0.6c0.3-0.1,0.6-0.2,1-0.2
                              c0.3,0,0.7,0,1,0.2c0.5,0.2,0.9,0.5,1.2,0.8s0.5,0.8,0.5,1.4l0,0c0.2-0.2,0.3-0.4,0.5-0.5c0.2-0.1,0.4-0.2,0.6-0.2
                              c0.2,0,0.4,0,0.7,0s0.5,0.1,0.7,0.2c0.1,0,0.3,0.1,0.5,0.2c0.2,0.1,0.4,0.1,0.6,0.2s0.4,0.1,0.6,0.1c0.2,0,0.4,0,0.5,0l-0.7,1.9
                              c-0.3,0-0.7-0.1-1.1-0.2s-0.8-0.2-1.1-0.3c-0.5-0.1-0.9-0.1-1.2,0c-0.3,0.1-0.5,0.4-0.7,0.9l-0.7,1.9l3.4,1.2l-0.7,1.9l-8.7-3.2
                              L399.4,277.7z M403.1,279.8c0.2-0.4,0.2-0.8,0.1-1.1c-0.1-0.3-0.4-0.5-0.8-0.7c-0.4-0.2-0.8-0.2-1,0c-0.3,0.1-0.5,0.4-0.6,0.9
                              l-0.8,2.1l2.5,0.9L403.1,279.8z M403.4,271.5l-1.6-0.5l2.2-7.3l1.6,0.5l-0.8,2.7l7.3,2.2l-0.6,2l-7.3-2.2L403.4,271.5z"/> 

                        <path className="transportIcon" d="M342.4,271.3c-0.3-0.3-0.7-0.5-1.2-0.5h-27c-0.5,0-0.9,0.2-1.2,0.5
                              c-0.3,0.3-0.5,0.7-0.5,1.2v5.1h-4.2c-0.5,0-1,0.1-1.5,0.3c-0.6,0.2-1,0.5-1.3,0.8l-5.2,5.2c-0.2,0.2-0.4,0.5-0.6,0.8
                              s-0.3,0.6-0.4,0.8c-0.1,0.2-0.1,0.6-0.2,1c0,0.4-0.1,0.7-0.1,0.9c0,0.2,0,0.5,0,1s0,0.8,0,0.9v8.4c-0.5,0-0.9,0.2-1.2,0.5
                              c-0.3,0.3-0.5,0.7-0.5,1.2c0,0.3,0,0.5,0.1,0.7s0.2,0.4,0.4,0.5c0.2,0.1,0.3,0.2,0.4,0.3c0.1,0.1,0.3,0.1,0.6,0.2
                              c0.3,0,0.5,0,0.6,0.1c0.1,0,0.3,0,0.7,0c0.3,0,0.5,0,0.6,0h1.7c0,1.9,0.7,3.5,2,4.8s2.9,2,4.8,2s3.5-0.7,4.8-2s2-2.9,2-4.8h10
                              c0,1.9,0.7,3.5,2,4.8s2.9,2,4.8,2s3.5-0.7,4.8-2s2-2.9,2-4.8c0.1,0,0.3,0,0.6,0c0.3,0,0.6,0,0.7,0s0.3,0,0.6-0.1
                              c0.3,0,0.5-0.1,0.6-0.2s0.3-0.2,0.4-0.3c0.2-0.1,0.3-0.3,0.4-0.5s0.1-0.4,0.1-0.7v-27C342.9,272,342.7,271.6,342.4,271.3z
                               M311.5,303.5c-0.7,0.7-1.5,1-2.4,1s-1.7-0.3-2.4-1c-0.7-0.7-1-1.5-1-2.4s0.3-1.7,1-2.4c0.7-0.7,1.5-1,2.4-1s1.7,0.3,2.4,1
                              c0.7,0.7,1,1.5,1,2.4S312.2,302.8,311.5,303.5z M312.5,287.6h-10.1v-0.8c0-0.2,0.1-0.4,0.2-0.6l5.1-5.1c0.2-0.2,0.4-0.2,0.6-0.2h4.2
                              L312.5,287.6L312.5,287.6z M335.1,303.5c-0.7,0.7-1.5,1-2.4,1s-1.7-0.3-2.4-1c-0.7-0.7-1-1.5-1-2.4s0.3-1.7,1-2.4
                              c0.7-0.7,1.5-1,2.4-1s1.7,0.3,2.4,1c0.7,0.7,1,1.5,1,2.4S335.8,302.8,335.1,303.5z"/>

                        <path className="transportLine" d="M398.3,223.8c-3.8,64.4-41.1,120-94.7,149.4l5.5,4.9c54.9-31.1,92.9-88.8,96.3-155.5
                              L398.3,223.8z"/>

                </NavLink></g>
	    	)
	    }
	}

export default Transport;