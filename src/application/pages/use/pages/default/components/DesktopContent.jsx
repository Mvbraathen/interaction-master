import React from 'react';
import Desktop from "../../../../../menus/desktop/Desktop";
import {
    NavLink
} from "react-router-dom";
import "../../../../css/DesktopBig.css";
import "../../../../css/Breadcrumbs.css";

class DesktopContent extends React.Component {
    constructor() {
     super();
     this.state = {
       moreInfo: false
     }
   }

	render() {

    

		return (
			<div id="use-page">
               <div className="split left-half">
                    <div className="breadcrumb">
                        <NavLink to ="/home"><div className="prevPage">Home</div></NavLink>
                        <div className="breadcrumbSpacing"> <span className="breadcrumbArrow">&#8594;</span></div>
                        <NavLink to ="/use"><div className="activePage">Use</div></NavLink>
                    </div>
                    <Desktop />
                </div>
                <div className="split right-half">

                    <div>
                        <div>
                        <p> hehe {this.state.moreInfo} </p>
                        <button onClick={() => this.setState({ moreInfo: true })}>
                          
                        </button>
                      </div>
                    </div>

                    <div className="desktop-header-txt">
                        <h1>
                            Environmental Impacts
                        </h1>
                        <div className="desktop-purple-line"> {/* style from mobile */}
                            ____
                        </div> 
                    </div>

                    <div className="right-half-flex-container">
                        
                        <div className="environmental-info-element">
                            <div className="info-box-content"> Acidification </div>
                        </div>

                       <div className="environmental-info-element">
                            <div className="info-box-content"> CO2 emissions </div>
                        </div>

                        <div className="environmental-info-element">
                            <div className="info-box-content"> Particulate matter </div>
                        </div>

                        <div className="environmental-info-element">
                            <div className="info-box-content"> Ecotoxicity </div>
                        </div>

                    </div>

                    <div className="desktop-header-txt">
                        <h1>
                            Social Impacts
                        </h1>
                        <div className="desktop-purple-line"> {/* style from mobile */}
                            ____
                        </div> 
                    </div>

                    <div className="right-half-flex-container">
                        
                        <div className="social-info-element">
                            <div className="info-box-content"> Acidification </div>
                        </div>

                       <div className="social-info-element">
                            <div className="info-box-content"> CO2 emissions </div>
                        </div>

                        <div className="social-info-element">
                            <div className="info-box-content"> Particulate matter </div>
                        </div>

                        <div className="social-info-element">
                            <div className="info-box-content"> Ecotoxicity </div>
                        </div>

                        <div className="social-info-element">
                            <div className="info-box-content"> Ecotoxicity </div>
                        </div>

                    </div>
                </div>
			</div>
		)
	}
}

export default DesktopContent;