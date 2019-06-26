import React from "react";
import Desktop from "../../../menus/desktop/Desktop";
import { NavLink } from "react-router-dom";

import "../../css/DesktopBig.css";
import Environmental from "../../impacts/Environmental";
import Social from "../../impacts/Social";
import DesktopHeader from "../../components/DesktopHeader";

class DesktopContent extends React.Component {
  render() {
    /* to select the correct lists of impacts from the two impact components  */
    const fromPage = "resourceExtraction";
    const pageHeader = "Resource extraction";

    return (
      <div id="resource-extraction-page">
        <DesktopHeader pageHeader={pageHeader} />

        {/* Left half */}
        <div className="split left-half">
          <div className="breadcrumb">
            <NavLink to="/home">
              <div className="prevPage">Home</div>
            </NavLink>
            <div className="breadcrumbSpacing">
              {" "}
              <span className="breadcrumbArrow">&#8594;</span>
            </div>
            <NavLink to="/resource-extraction">
              <div className="activePage">Resource Extraction</div>
            </NavLink>
          </div>
          <Desktop />
        </div>

        {/* Right half */}
        <div className="split right-half">
          <div className="desktop-header-txt">
            <div className="fix-top-margin-environmental" />
            <h1>Environmental Impacts</h1>
            <div className="purple-line" />
          </div>

          <Environmental fromPage={fromPage} />
          <div className="fix-top-margin-social" />
          <div className="desktop-header-txt">
            <h1>Social Impacts</h1>
            <div className="purple-line" />
          </div>

          <Social fromPage={fromPage} />
        </div>
      </div>
    );
  }
}

export default DesktopContent;
