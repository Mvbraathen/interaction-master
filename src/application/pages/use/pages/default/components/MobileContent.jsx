import React from 'react';
import Mobile from "../../../../../menus/mobile/Mobile";
import {
    NavLink
} from "react-router-dom";
import "../../../../css/MobileResolutionStyle.css";

class MobileContent extends React.Component {

	render() {
		return (
			<div className="mobilePage">
                    <div className="mobileContent">
                    <Mobile />
                        <div className="fill-margin-height"> 
                            <div className="scroll-out-of-bounds"> 
                                <div className="joke-header">
                                    You're really at the top..
                                </div> 
                                "A climate scientist and a climate change denier walk into a bar. 
                                The denier says, nice to see you. The climate scientist says, nice to CO2"   
                            </div>
                        </div>
                        <div className="page-one">
                            <h1 className="info-header"> This is a header! </h1>
                            <figure className="img-item">
                                <img
                                    className="img-tst"
                                    alt="A road "
                                    src={require('./images/smart-test-image.jpg')} 
                                    />
                                    <figcaption className="txt-child">
                                        More than half of the world population uses mobile 
                                        phone today. The popularity of..
                                    <NavLink to="/use/lifetime">
                                        <button className="page-one-button"> Read more </button>
                                    </NavLink>
                                    <div className="hint">
                                        Scroll down for next element <span>&darr;</span>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>


                         <div className="page-two">
                            <h1 className="info-header"> This is a header! </h1>
                            <figure className="img-item">
                                <img
                                    className="img-tst"
                                    alt="A road "
                                    src={require('./images/smart-test-image.jpg')} 
                                    />
                                    <figcaption className="txt-child">
                                        More than half of the world population uses mobile 
                                        phone today. The popularity of..
                                    <NavLink to="/use/lifetime">
                                        <button className="page-one-button"> Read more </button>
                                    </NavLink>
                                    <div className="hint">
                                        Scroll down for next element <span>&darr;</span>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>


                        <div className="page-three">
                            <h1 className="info-header"> This is a header! </h1>
                            <figure className="img-item">
                                <img
                                    className="img-tst"
                                    alt="A road "
                                    src={require('./images/smart-test-image.jpg')} 
                                    />
                                    <figcaption className="txt-child">
                                        More than half of the world population uses mobile 
                                        phone today. The popularity of..
                                    <NavLink to="/use/lifetime">
                                        <button className="page-one-button"> Read more </button>
                                    </NavLink>
                                    <div className="hint">
                                        Scroll down for next element <span>&darr;</span>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
            </div>
		)
	}
}

export default MobileContent;