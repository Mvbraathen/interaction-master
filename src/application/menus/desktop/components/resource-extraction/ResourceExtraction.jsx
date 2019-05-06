import React, {Component} from 'react';
import {
    NavLink
} from "react-router-dom";
import "./ResourceExtraction.css";

class ResourceExtraction extends Component {
	    render() {
	    	return (
	    		<g> 
                    <NavLink className="resourceExtraction" to ="/resource-extraction">
                        <g>
                            <title>Menu selection for the resource extraction page</title>
                            <path d="M217.4,27.5c-28.6-0.4-55.8,5.8-80.2,17l35.1,31l14.9,68.9c8.9-3.6,18.6-5.5,28.8-5.4
                                    c9.8,0.1,19,2.1,27.6,5.6L298,98.2l9.6-46.2C280.9,36.8,250.1,27.9,217.4,27.5z M217.4,22.5c33.1,0.4,64.1,9.2,91.2,24.4l4-19.1c-28.4-14.9-60.6-23.5-94.9-24
                                    c-36-0.5-69.9,8.2-99.7,23.7l15,13.4C158.6,28.8,187.2,22.1,217.4,22.5z"/>

                            <path className="resourceTxt" d="M135.2,26c0.4-0.2,0.7-0.2,1-0.2s0.6,0,0.9,0.1c0.3,0.1,0.6,0.3,0.8,0.5s0.4,0.5,0.5,0.8
                                    c0.2,0.5,0.3,0.9,0.2,1.4c-0.1,0.4-0.2,0.8-0.6,1.2l0,0c0.2,0,0.5,0,0.7,0c0.2,0.1,0.4,0.1,0.5,0.3c0.2,0.1,0.3,0.3,0.4,0.5
                                    c0.1,0.2,0.2,0.4,0.4,0.6c0.1,0.1,0.1,0.3,0.2,0.4s0.2,0.3,0.3,0.5c0.1,0.2,0.2,0.3,0.3,0.5s0.2,0.2,0.4,0.3l-1.8,0.8
                                    c-0.2-0.2-0.4-0.5-0.6-0.8s-0.4-0.7-0.6-1c-0.2-0.4-0.5-0.6-0.8-0.8s-0.6-0.1-1.1,0.1l-1.8,0.8l1.4,3.1l-1.8,0.8l-3.5-8L135.2,26z
                                     M136.2,29.9c0.4-0.2,0.7-0.4,0.8-0.7s0.1-0.6-0.1-1c-0.2-0.4-0.4-0.6-0.7-0.7s-0.6,0-1,0.1l-1.9,0.9l1,2.2L136.2,29.9z M146.6,21.4l0.6,1.5l-4.3,1.6l0.7,1.8l3.9-1.5l0.5,1.4l-3.9,1.5l0.8,2l4.4-1.7l0.6,1.5l-6.2,2.4
                                    l-3.1-8.1L146.6,21.4z M152.8,26.2c0.2,0.2,0.4,0.3,0.6,0.3c0.2,0.1,0.4,0.1,0.7,0.1s0.5-0.1,0.7-0.1s0.3-0.1,0.5-0.2
                                    s0.3-0.2,0.5-0.3s0.2-0.3,0.3-0.5s0.1-0.4,0-0.6s-0.2-0.4-0.4-0.5s-0.4-0.1-0.7-0.2c-0.3,0-0.6,0-0.9,0c-0.3,0-0.6,0-1,0.1
                                    c-0.3,0-0.7,0-1,0s-0.6-0.1-0.9-0.2s-0.6-0.3-0.8-0.5s-0.4-0.5-0.5-0.9s-0.2-0.8-0.1-1.2s0.2-0.7,0.5-1c0.2-0.3,0.5-0.6,0.9-0.8
                                    c0.3-0.2,0.7-0.4,1.1-0.5c0.4-0.1,0.9-0.2,1.3-0.3c0.4,0,0.8,0,1.2,0.1s0.7,0.3,1,0.6s0.5,0.7,0.7,1.1l-1.8,0.6
                                    c-0.1-0.2-0.2-0.4-0.4-0.6s-0.3-0.2-0.5-0.3c-0.2,0-0.4,0-0.6,0c-0.2,0-0.4,0.1-0.6,0.1c-0.1,0-0.3,0.1-0.4,0.2s-0.2,0.2-0.4,0.3
                                    c-0.1,0.1-0.2,0.2-0.2,0.4s0,0.3,0,0.5c0.1,0.2,0.1,0.3,0.2,0.4s0.2,0.1,0.5,0.2c0.2,0,0.5,0,0.8,0c0.4,0,0.8,0,1.4-0.1
                                    c0.2,0,0.4,0,0.7,0s0.6,0,0.9,0.1s0.6,0.2,0.9,0.5s0.5,0.6,0.7,1c0.1,0.4,0.2,0.8,0.1,1.1s-0.2,0.7-0.4,1.1s-0.5,0.6-0.9,0.9
                                    s-0.9,0.5-1.4,0.7c-0.5,0.1-0.9,0.2-1.4,0.3s-0.9,0-1.3-0.1s-0.8-0.4-1.1-0.7c-0.3-0.3-0.6-0.7-0.7-1.2l1.8-0.6
                                    C152.5,25.8,152.6,26.1,152.8,26.2z M158.9,20c0-0.6,0.2-1.1,0.4-1.6s0.6-0.9,1-1.3s1-0.6,1.6-0.8s1.3-0.2,1.8-0.1c0.6,0.1,1.1,0.3,1.6,0.6
                                    c0.5,0.3,0.9,0.7,1.2,1.2s0.6,1,0.8,1.7c0.2,0.6,0.2,1.2,0.2,1.8c0,0.6-0.2,1.1-0.4,1.6s-0.6,0.9-1,1.3s-1,0.6-1.6,0.8
                                    s-1.3,0.2-1.8,0.1c-0.6-0.1-1.1-0.3-1.6-0.6c-0.5-0.3-0.9-0.7-1.2-1.2s-0.6-1-0.8-1.6C159,21.2,158.9,20.6,158.9,20z M161.4,22.4
                                    c0.2,0.3,0.4,0.6,0.6,0.8c0.2,0.2,0.6,0.4,0.9,0.5c0.3,0.1,0.7,0.1,1.1,0c0.4-0.1,0.8-0.3,1-0.5s0.4-0.5,0.5-0.8s0.2-0.6,0.1-1
                                    c0-0.4-0.1-0.7-0.2-1.1c-0.1-0.4-0.2-0.7-0.4-1s-0.4-0.6-0.6-0.8s-0.6-0.4-0.9-0.5s-0.7-0.1-1.1,0c-0.4,0.1-0.8,0.3-1,0.5
                                    s-0.4,0.5-0.5,0.8s-0.1,0.7-0.1,1s0.1,0.7,0.2,1.1C161.1,21.7,161.2,22,161.4,22.4z M177.1,21.2c-0.5,0.7-1.4,1.2-2.5,1.4c-1.2,0.2-2.1,0.2-2.9-0.2s-1.3-1.2-1.5-2.4l-1.1-5.3l1.9-0.4
                                    l1.1,5.3c0.1,0.2,0.1,0.5,0.2,0.7c0.1,0.2,0.2,0.4,0.4,0.5s0.4,0.2,0.6,0.3s0.6,0,0.9,0c0.7-0.1,1.1-0.4,1.3-0.8s0.2-0.9,0.1-1.5
                                    l-1.1-5.3l1.9-0.4l1.1,5.3C177.7,19.6,177.6,20.5,177.1,21.2z M184.1,11.7c0.4-0.1,0.7-0.1,1.1,0s0.6,0.2,0.9,0.4s0.5,0.4,0.6,0.7s0.3,0.6,0.3,0.9
                                    c0.1,0.5,0.1,1-0.1,1.4s-0.4,0.8-0.9,1l0,0c0.2,0,0.4,0.1,0.6,0.2c0.2,0.1,0.3,0.2,0.5,0.4s0.2,0.4,0.3,0.6s0.1,0.4,0.2,0.6
                                    c0,0.1,0.1,0.3,0.1,0.5s0.1,0.4,0.1,0.6c0.1,0.2,0.1,0.4,0.2,0.5s0.2,0.3,0.3,0.4l-1.9,0.3c-0.1-0.2-0.3-0.6-0.4-0.9
                                    s-0.2-0.7-0.3-1.1s-0.3-0.7-0.6-0.9s-0.6-0.2-1.1-0.1l-1.9,0.3l0.6,3.4l-1.9,0.3l-1.5-8.6L184.1,11.7z M184.1,15.7
                                    c0.4-0.1,0.7-0.2,0.9-0.5c0.2-0.2,0.2-0.6,0.2-1c-0.1-0.4-0.2-0.7-0.5-0.9c-0.2-0.1-0.6-0.2-1-0.1l-2.1,0.4L182,16L184.1,15.7z M195.6,12.6c-0.1-0.2-0.3-0.3-0.5-0.4c-0.2-0.1-0.4-0.2-0.6-0.3c-0.2-0.1-0.4-0.1-0.7,0
                                    c-0.4,0.1-0.8,0.2-1.1,0.4s-0.5,0.4-0.6,0.8s-0.3,0.6-0.3,1s-0.1,0.7,0,1.1c0,0.4,0.1,0.7,0.2,1.1c0.1,0.3,0.3,0.6,0.5,0.9
                                    s0.5,0.5,0.8,0.6s0.7,0.2,1.1,0.1c0.6-0.1,1-0.3,1.3-0.7c0.3-0.4,0.4-0.9,0.4-1.5l1.9-0.2c0,0.6-0.1,1.1-0.2,1.5
                                    c-0.1,0.5-0.4,0.9-0.7,1.2c-0.3,0.3-0.7,0.6-1.1,0.8s-0.9,0.4-1.4,0.4c-0.7,0.1-1.3,0-1.8-0.1c-0.6-0.2-1-0.4-1.4-0.8
                                    s-0.7-0.8-1-1.3s-0.4-1.1-0.5-1.7c-0.1-0.6,0-1.3,0.1-1.8c0.1-0.6,0.4-1.1,0.7-1.6c0.3-0.4,0.7-0.8,1.2-1.1s1.1-0.5,1.8-0.6
                                    c0.5-0.1,0.9,0,1.4,0.1s0.8,0.2,1.2,0.5c0.4,0.2,0.7,0.5,0.9,0.9c0.3,0.4,0.4,0.8,0.6,1.3l-1.9,0.2
                                    C195.8,12.9,195.7,12.7,195.6,12.6z M206.9,9.4L207,11l-4.6,0.3l0.1,1.9l4.2-0.3l0.1,1.5l-4.2,0.3l0.1,2.1l4.7-0.3l0.1,1.6l-6.6,0.4
                                    l-0.5-8.7L206.9,9.4z M221.1,9.3v1.6h-4.6v1.9h4.2v1.5h-4.2v2.1h4.7V18l-6.6-0.1l0.1-8.7L221.1,9.3z M223.4,9.3l2.2,0.1l1.6,2.9l1.9-2.7l2.1,0.1l-3,4l2.8,4.7l-2.3-0.1l-1.7-3.1l-2.1,2.9l-2.1-0.1l3.3-4.4
                                    L223.4,9.3z M232.9,11.5l0.2-1.6l7.1,0.7l-0.2,1.6l-2.6-0.3l-0.7,7.1l-1.9-0.2l0.7-7.1L232.9,11.5z M247.4,11.7c0.4,0.1,0.7,0.2,1,0.4s0.5,0.4,0.7,0.6c0.2,0.2,0.3,0.5,0.4,0.8c0.1,0.3,0.1,0.6,0,0.9
                                    c-0.1,0.5-0.2,0.9-0.5,1.3c-0.3,0.3-0.7,0.6-1.2,0.7l0,0c0.2,0.1,0.4,0.2,0.5,0.4c0.1,0.2,0.2,0.3,0.3,0.5s0.1,0.4,0.1,0.6
                                    s0,0.5,0,0.7c0,0.1,0,0.3-0.1,0.5s0,0.4,0,0.6s0,0.4,0,0.6s0.1,0.3,0.1,0.5l-1.9-0.3c-0.1-0.3-0.1-0.6,0-1c0-0.4,0.1-0.8,0.1-1.1
                                    c0-0.5-0.1-0.8-0.3-1s-0.5-0.4-1-0.5l-1.9-0.3l-0.5,3.4l-1.9-0.3l1.3-8.6L247.4,11.7z M246.1,15.5c0.4,0.1,0.8,0,1-0.1
                                    c0.2-0.2,0.4-0.5,0.5-0.9s0-0.7-0.2-1s-0.5-0.4-0.9-0.4l-2.1-0.3l-0.4,2.4L246.1,15.5z M257.2,13.5l1.4,9.2l-2-0.4l-0.3-2l-3.2-0.7l-1.1,1.8l-1.9-0.4l5-7.9L257.2,13.5z M256.2,18.8
                                    l-0.4-3.4l0,0l-1.8,2.9L256.2,18.8z M267.5,18.4c-0.1-0.2-0.2-0.4-0.3-0.6s-0.3-0.3-0.5-0.5s-0.4-0.2-0.6-0.3c-0.4-0.1-0.8-0.1-1.1,0
                                    c-0.3,0.1-0.6,0.2-0.9,0.5c-0.2,0.2-0.5,0.5-0.6,0.8s-0.3,0.7-0.4,1c-0.1,0.4-0.1,0.7-0.1,1.1s0,0.7,0.2,1c0.1,0.3,0.3,0.6,0.5,0.8
                                    s0.6,0.4,1,0.5c0.6,0.1,1.1,0.1,1.5-0.2c0.4-0.3,0.7-0.7,0.9-1.2l1.8,0.5c-0.2,0.5-0.4,1-0.7,1.3c-0.3,0.4-0.7,0.7-1.1,0.9
                                    c-0.4,0.2-0.8,0.4-1.3,0.4s-1,0-1.5-0.1c-0.6-0.2-1.2-0.4-1.7-0.8s-0.8-0.8-1.1-1.3c-0.2-0.5-0.4-1-0.5-1.6c0-0.6,0-1.2,0.2-1.8
                                    c0.2-0.6,0.4-1.2,0.7-1.7s0.7-0.9,1.2-1.2s1-0.5,1.5-0.6c0.6-0.1,1.2-0.1,1.8,0.1c0.5,0.1,0.9,0.3,1.3,0.5s0.7,0.5,1,0.9
                                    c0.3,0.3,0.5,0.7,0.6,1.2s0.1,0.9,0.1,1.4l-1.8-0.5C267.6,18.8,267.6,18.6,267.5,18.4z M271.8,18.8l0.5-1.5l6.8,2.1l-0.5,1.5l-2.5-0.8L274,27l-1.8-0.6l2.1-6.8L271.8,18.8z M283.2,20.9l-2.9,8.2l-1.8-0.6l2.9-8.2L283.2,20.9z M285.2,24.3c0.4-0.5,0.8-0.8,1.3-1s1-0.4,1.6-0.4s1.2,0.1,1.8,0.3c0.6,0.2,1.1,0.6,1.5,1
                                    s0.7,0.9,0.9,1.4c0.2,0.5,0.3,1.1,0.2,1.7c0,0.6-0.2,1.2-0.4,1.8c-0.2,0.6-0.5,1.1-0.9,1.5s-0.8,0.8-1.3,1s-1,0.4-1.6,0.4
                                    s-1.2-0.1-1.8-0.3c-0.6-0.2-1.1-0.6-1.5-1s-0.7-0.9-0.9-1.4s-0.3-1.1-0.2-1.6c0-0.6,0.1-1.2,0.4-1.8
                                    C284.5,25.3,284.8,24.8,285.2,24.3z M285.8,27.6c0,0.4,0,0.7,0,1s0.2,0.6,0.4,0.9c0.2,0.3,0.5,0.5,0.9,0.6s0.8,0.2,1.1,0.2
                                    c0.3,0,0.6-0.2,0.9-0.4s0.5-0.4,0.7-0.7c0.2-0.3,0.4-0.6,0.5-1s0.2-0.7,0.3-1.1c0-0.4,0-0.7,0-1c-0.1-0.3-0.2-0.6-0.4-0.9
                                    c-0.2-0.3-0.5-0.5-0.9-0.6s-0.8-0.2-1.1-0.2c-0.3,0-0.6,0.2-0.9,0.4s-0.5,0.4-0.7,0.7c-0.2,0.3-0.4,0.6-0.5,1
                                    C285.9,26.9,285.8,27.3,285.8,27.6z M298.3,26.9l0.9,6.8l0,0l2.5-5.3l1.6,0.8l-3.7,7.9l-1.7-0.8l-0.9-6.8l0,0l-2.5,5.3l-1.6-0.8l3.7-7.9
                                    L298.3,26.9z"/> 

                            <path className="resourceIcon" d="M229.6,70c-0.4-1.5-1.4-3.3-2.5-4.8c-0.2-0.3-0.5-0.6-0.8-1c0.3-0.4,0.5-0.9,0.4-1.5l0,0l0,0
                                        c0-0.2-0.1-0.3-0.3-0.6l0.2-0.3c0.6-0.6,0.8-1.2,0.8-2.1c0-0.9-0.4-1.4-1.1-2.2c-0.5-0.5-1-0.9-1.5-1.1l0,0l0,0
                                        c-0.3-0.1-0.7-0.1-0.8-0.1l0,0c-0.8,0-1.5,0.3-2,0.8l-0.2,0.2c-0.3-0.3-0.4-0.3-0.6-0.3c-0.2,0-0.3-0.1-0.4-0.1
                                        c-0.5,0-0.8,0.2-1.1,0.4l0,0c-2.4-2.1-5.1-3.3-7.6-3.6c-0.3,0-0.6-0.1-0.9-0.1c-0.5,0-0.8,0.1-1.1,0.2c-0.7,0.4-1.1,1.3-0.9,2.1
                                        c0.1,0.4,0.2,0.5,3.5,3.8L215,62c-0.3,0.4-0.5,0.9-0.3,1.5c0,0.2,0.1,0.3,0.4,0.7c-0.4,0.3-0.9,0.9-1.9,1.9
                                        c-1.2,1.2-2.9,2.9-4.7,4.7l-6.6,6.6l-0.4,0.4v0.5v0.3c0,1,0.4,2,1.2,2.7c0.7,0.7,1.7,1.2,2.7,1.2h0.3h0.5l0.4-0.4l6.6-6.6l6.6-6.6
                                        c0.2,0.2,0.3,0.2,0.4,0.3c0.2,0.1,0.4,0.1,0.7,0.1c0.4,0,0.8-0.2,1.1-0.4l2.3,2.3c3.4,3.4,3.5,3.4,3.9,3.5c0.1,0,0.2,0,0.4,0
                                        c0.7,0,1.3-0.4,1.6-1C230.3,72.9,229.8,70.7,229.6,70z M222.7,58.1c0.3-0.3,0.7-0.5,1.2-0.5l0,0c0.2,0,0.4,0,0.4,0
                                        c0.3,0.1,0.6,0.3,1,0.8c0.6,0.6,0.7,0.8,0.8,1.4c0,0.5-0.1,0.8-0.4,1.2l-0.2,0.2c-0.4-0.4-0.8-0.9-1.5-1.5
                                        c-0.6-0.6-1.1-1.1-1.5-1.5L222.7,58.1z M212,74.6l-6.6,6.6h-0.3c-0.7,0-1.4-0.3-1.9-0.8s-0.8-1.2-0.8-1.9v-0.3l6.6-6.6
                                        c3.3-3.3,6.1-6.1,6.6-6.6c0.4,0.4,0.8,0.8,1.4,1.4c0.7,0.7,1.2,1.2,1.5,1.5L212,74.6z M228.7,73.3c-0.1,0.2-0.3,0.3-0.5,0.3h-0.1
                                        c-0.1,0-1.3-1.2-3.3-3.2l-3.2-3.2l-0.4,0.4c-0.3,0.3-0.5,0.5-0.7,0.5c-0.1,0-0.1,0-0.2,0l0.1-0.1l-0.9-0.9l-1.5-1.5
                                        c-1.2-1.2-1.6-1.6-1.9-1.7c-0.3-0.3-0.5-0.6-0.5-0.6c-0.1-0.2,0-0.4,0.4-0.8l0.4-0.4l-3.1-3.1c-2.1-2.1-3.2-3.2-3.2-3.3
                                        c-0.1-0.2,0-0.5,0.3-0.6c0.1,0,0.3-0.1,0.5-0.1s0.4,0,0.7,0c2.3,0.3,4.8,1.5,7,3.3c0.3,0.2,0.5,0.5,0.6,0.6s0.2,0.2,0.2,0.2
                                        s0.2-0.2,0.4-0.4c0.3-0.3,0.5-0.4,0.7-0.4h0.1l0,0l0,0l0.9,0.9l1.5,1.5l1.5,1.5l0.9,0.9l0,0l0,0c0.1,0.2,0,0.4-0.4,0.8
                                        c-0.2,0.2-0.4,0.4-0.4,0.4s0.1,0.1,0.2,0.2c0.2,0.2,0.8,0.9,1.2,1.5c1,1.3,1.9,3,2.3,4.4C228.7,71.6,228.9,73,228.7,73.3z"/> 

                            <polygon className="mountain" points="212.6,97.8 252.3,97.8 237.1,61.3 228.5,84.4 223.9,76.4"/>
                        </g>
                    </NavLink>
                </g>
	    	)
	    }
	}

export default ResourceExtraction;