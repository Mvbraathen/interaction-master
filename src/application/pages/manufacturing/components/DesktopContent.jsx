import React from 'react';
import Desktop from "../../../menus/desktop/Desktop";
import {
    NavLink
} from "react-router-dom";

import Environmental from "../../impacts/Environmental";
import Social from "../../impacts/Social";

class DesktopContent extends React.Component {
    render() {

        /* to select the correct lists of impacts from the two impact components  */
        const fromPage = "manufacturing";

        return (
            <div id="manufacturing-page">
                {/* Header */}
                <div className="desktop-header">
                    <div className="home-header-txt">
                        <NavLink className="header-link" to="/home">
                            <h1>
                                The Mobile Lifecycle
                            </h1>
                        </NavLink>
                    </div>
                </div>

                {/* Left half */}
                <div className="split left-half">
                    <div className="breadcrumb">
                        <NavLink to ="/home"><div className="prevPage">Home</div></NavLink>
                        <div className="breadcrumbSpacing"> <span className="breadcrumbArrow">&#8594;</span></div>
                        <NavLink to ="/manufacturing"><div className="activePage">Manufacturing</div></NavLink>
                    </div>
                    <Desktop />
                </div>

                {/* Right half */}
                <div className="split right-half">
                    <div className="desktop-header-txt">
                        <div className="fix-top-margin-environmental"></div> 
                        <h1>
                            Environmental Impacts
                        </h1>
                        <div className="purple-line"></div> 
                    </div>
                    
                    <Environmental fromPage={fromPage}/>
                    <div className="fix-top-margin-social"></div>
                    <div className="desktop-header-txt">
                        <h1>
                            Social Impacts
                        </h1>
                        <div className="purple-line"></div>  
                    </div>

                        <Social fromPage={fromPage}/> 
                </div>
            </div>
        )
    }
}

export default DesktopContent;