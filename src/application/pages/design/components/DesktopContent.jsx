import React from "react";
import Desktop from "../../../menus/desktop/Desktop";
import "../../css/DesktopBig.css";
import { NavLink } from "react-router-dom";
import DesktopHeader from "../../components/DesktopHeader";
import Fade from "react-reveal/Fade";

class DesktopContent extends React.Component {
  render() {
    
    const pageHeader = "Design";

    return (
      <div id="design-page">
        <DesktopHeader pageHeader={pageHeader}/>
        <div className="split left-half">
          <div className="breadcrumb">
            <NavLink to="/home">
              <div className="prevPage">Home</div>
            </NavLink>
            <div className="breadcrumbSpacing">
              {" "}
              <span className="breadcrumbArrow">&#8594;</span>
            </div>
            <NavLink to="/design">
              <div className="activePage">Design</div>
            </NavLink>
          </div>
          <Desktop />
        </div>
        <div className="split right-half">
          <div className="desktop-header-txt">
            <div className="fix-top-margin-environmental" />
            <h1>Where all decisions are being made</h1>
            <div className="purple-line" />
          </div>
          <Fade duration={1000}>
            <div className="design-info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default DesktopContent;
