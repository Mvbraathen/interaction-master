import React, {Component} from 'react';
import {
    NavLink
} from "react-router-dom";
import "./Design.css";

class Design extends Component {
	    render() {
	    	return (
                <g> 
                    <NavLink className="design" to ="/design">
                        <g>
                            <title>Menu selection for the design page</title>
                            <path d="M158,83.9l-35.2-31.4C96.3,67.8,73.3,90,56.5,118.2c-14.6,24.6-22.9,51.2-25.4,78
                                    l44.4-14.9l67.1,21.6c1.4-9.5,4.6-18.9,9.8-27.6c5-8.4,11.4-15.4,18.6-21L158,83.9z M118.9,48.8l-14.5-13C77.3,52.9,53.7,76.5,36.2,106c-18.4,31-27.9,64.8-29.3,98.3
                                    l19.1-6.4c2.2-28.2,10.8-56.3,26.2-82.3C69.1,87.2,92.3,64.7,118.9,48.8z"/> 

                            <path className="designTxt" d="M21.4,151.2c0.2-0.5,0.4-1,0.7-1.4s0.7-0.7,1.1-1c0.5-0.2,1-0.4,1.5-0.4c0.6,0,1.2,0.1,1.9,0.3
                                    c0.6,0.2,1.1,0.4,1.6,0.8c0.5,0.3,0.8,0.7,1.1,1.1c0.3,0.4,0.4,0.9,0.5,1.5c0.1,0.5,0,1.1-0.2,1.8l-1.1,3.6l-8.3-2.6L21.4,151.2z
                                     M28.2,153.5c0.1-0.3,0.1-0.5,0.1-0.8s-0.1-0.5-0.2-0.8s-0.4-0.5-0.6-0.7c-0.3-0.2-0.6-0.4-1.1-0.5c-0.4-0.1-0.8-0.2-1.2-0.2
                                    c-0.4,0-0.7,0-1,0.1s-0.6,0.3-0.8,0.6c-0.2,0.3-0.4,0.6-0.5,1.1l-0.4,1.3l5.2,1.6L28.2,153.5z M28.2,132.7l1.5,0.6l-1.7,4.3l1.7,0.7l1.6-3.9l1.4,0.6l-1.6,3.9l2,0.8l1.8-4.4l1.5,0.6l-2.5,6.1
                                    l-8.1-3.3L28.2,132.7z M38.6,125.9c0.2,0,0.4-0.1,0.6-0.2c0.2-0.1,0.4-0.2,0.5-0.4c0.2-0.2,0.3-0.4,0.4-0.6
                                    c0.1-0.2,0.2-0.3,0.2-0.5c0.1-0.2,0.1-0.4,0.1-0.6s0-0.4-0.1-0.5c-0.1-0.2-0.2-0.3-0.4-0.4s-0.4-0.1-0.6-0.1
                                    c-0.2,0.1-0.4,0.2-0.6,0.4c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.4,0.5-0.6,0.7c-0.2,0.2-0.5,0.5-0.7,0.7s-0.5,0.4-0.8,0.5
                                    s-0.6,0.2-0.9,0.2c-0.3,0-0.7-0.1-1-0.3c-0.4-0.2-0.7-0.5-0.9-0.8s-0.3-0.7-0.4-1c-0.1-0.4,0-0.8,0-1.2c0.1-0.4,0.2-0.8,0.4-1.1
                                    c0.2-0.4,0.5-0.8,0.7-1.1s0.6-0.6,0.9-0.8s0.7-0.3,1.1-0.3s0.8,0.1,1.3,0.3l-0.8,1.7c-0.2-0.1-0.5-0.2-0.7-0.1
                                    c-0.2,0-0.4,0.1-0.5,0.2c-0.2,0.1-0.3,0.2-0.4,0.4c-0.1,0.2-0.2,0.3-0.3,0.6c-0.1,0.1-0.1,0.3-0.2,0.4c0,0.2,0,0.3,0,0.4
                                    c0,0.2,0.1,0.3,0.1,0.4s0.2,0.2,0.4,0.3c0.2,0.1,0.3,0.1,0.4,0.1s0.3-0.1,0.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.5-0.6,0.9-1
                                    c0.1-0.1,0.3-0.3,0.5-0.5s0.5-0.4,0.8-0.6s0.6-0.3,1-0.3s0.8,0,1.2,0.3c0.4,0.2,0.7,0.4,0.9,0.7c0.2,0.3,0.4,0.6,0.5,1
                                    s0.1,0.8,0,1.3s-0.2,1-0.5,1.5c-0.2,0.4-0.5,0.8-0.8,1.2s-0.7,0.6-1,0.8c-0.4,0.2-0.8,0.3-1.2,0.3s-0.9-0.1-1.4-0.4l0.8-1.7
                                    C38.1,125.9,38.4,125.9,38.6,125.9z M40.4,108.8l7.5,4.4l-1,1.7l-7.5-4.4L40.4,108.8z M55.5,101.3c-0.1,0.4-0.3,0.8-0.5,1.2c-0.4,0.6-0.8,1-1.3,1.3s-1,0.5-1.6,0.6
                                    c-0.5,0.1-1.1,0-1.7-0.1c-0.6-0.2-1.1-0.4-1.6-0.8s-1-0.8-1.3-1.3s-0.6-1-0.7-1.5c-0.1-0.5-0.2-1.1,0-1.7c0.1-0.6,0.3-1.1,0.7-1.7
                                    c0.2-0.4,0.5-0.7,0.9-1c0.3-0.3,0.7-0.5,1.1-0.6c0.4-0.1,0.8-0.2,1.3-0.1s0.9,0.2,1.3,0.4l-1,1.5c-0.5-0.2-0.9-0.2-1.3-0.1
                                    c-0.4,0.1-0.7,0.4-1,0.8c-0.2,0.4-0.4,0.7-0.4,1.1c0,0.3,0,0.7,0.1,1s0.3,0.6,0.6,0.9s0.5,0.5,0.8,0.7s0.6,0.4,1,0.5s0.7,0.2,1,0.2
                                    s0.7-0.1,1-0.2c0.3-0.2,0.6-0.4,0.8-0.8c0.4-0.5,0.5-1,0.4-1.5s-0.3-0.9-0.8-1.3l-1.1,1.6L51,99.6l2.1-3l3.9,2.7l-0.7,1l-0.9-0.4
                                    C55.5,100.4,55.6,100.9,55.5,101.3z M56.7,85.3l6.8,0.9l0,0L59,82.4l1.1-1.4l6.8,5.5L65.7,88l-6.8-0.9l0,0l4.5,3.7l-1.1,1.4l-6.8-5.5
                                    L56.7,85.3z"/> 

                            <path className="designIcon" d="M128.7,108.1l-4.8,3.6l-4.8,11.2h-3.9l-1.5-3.3h1c1.8,0,3.3-1.5,3.3-3.3V113h1.6v-4.9h-4.9
                                    v4.9h1.6v3.3c0,0.9-0.7,1.6-1.6,1.6H113l-2.1-4.5l2.5-1.3l-8.2-3.5l-1.9,6.8c-0.1-4-3.3-7.3-7.4-7.3s-7.4,3.3-7.4,7.4
                                    c0,2.5,1.2,4.8,3.3,6.1v1.2h-2l-0.1,0.7c-0.4,2.1-0.4,4.2-0.1,6.3l-5.6,10l6.2,1.4v10.3h8.2v7.4H118v-11.4c5.7-4.1,9-10.6,9-17.6
                                    v-3c0-1.1-0.1-2.3-0.3-3.4l-0.1-0.7H125l3.7-8.8V108.1L128.7,108.1z M116.4,111.4v-1.6h1.6v1.6H116.4z M113.4,122.9h-3.1l-1.5-3.3
                                    h3.1L113.4,122.9z M106.2,110.9l3.3,1.4l-0.8,0.4l2.4,5.3H108l-2-4.4l-0.7,0.4L106.2,110.9z M108.5,122.9h-3.6v-1.6
                                    c0-0.9,0.7-1.7,1.6-1.7h0.5l0,0L108.5,122.9z M105.3,115.8l1,2.2c-1.7,0.1-3.1,1.5-3.1,3.3v1.6H100v-1.2c1.6-1.1,2.8-2.8,3.1-4.7
                                    L105.3,115.8z M90.1,115.5c0-3.2,2.6-5.7,5.7-5.7c3.2,0,5.7,2.6,5.7,5.7c0,2-1.1,3.9-2.9,5l-0.4,0.2v2.2h-1.6v-5.1
                                    c1-0.3,1.6-1.2,1.6-2.3c0-1.4-1.1-2.5-2.5-2.5s-2.5,1.1-2.5,2.5c0,1.1,0.7,2,1.6,2.3v5.1h-1.6v-2.2l-0.4-0.2
                                    C91.2,119.4,90.1,117.5,90.1,115.5z M95.9,116.3c-0.5,0-0.8-0.4-0.8-0.8c0-0.5,0.4-0.8,0.8-0.8c0.5,0,0.8,0.4,0.8,0.8
                                    S96.3,116.3,95.9,116.3z M125.2,124.5c0.1,0.8,0.2,1.7,0.2,2.5v3c0,6.6-3.2,12.7-8.7,16.5l-0.4,0.2v10.6H100v-7.4h-8.2v-10
                                    l-5.3-1.2l4.8-8.6v-0.3c-0.3-1.8-0.3-3.7-0.1-5.4h0.6h8.2L125.2,124.5L125.2,124.5z M123.2,122.9h-2.3l4.1-9.5l1.8,0.9L123.2,122.9
                                    z M127,112.5l-0.9-0.5l0.9-0.7V112.5z M97.5,129.4c-1.4,0-2.5-0.8-2.5-2.5h-1.6c0,2.5,1.8,4.1,4.1,4.1s4.1-1.6,4.1-4.1H100
                                    C100,128.6,98.9,129.4,97.5,129.4z"/> 

                            <path className="designLine" d="M33.3,198.9c4.8-63.2,41.8-117.5,94.6-146.5l-5.4-5c-54.5,30.8-92.4,87.8-96.4,153.7
                                    C28.5,200.4,31.2,199.5,33.3,198.9z"/>
                            
                        </g>
                    </NavLink>
                </g>
	    	)
	    }
	}

export default Design;