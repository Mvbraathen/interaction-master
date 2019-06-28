import React from "react";
import Desktop from "../../../menus/desktop/Desktop";
import "../../css/DesktopBig.css";
import Environmental from "../../impacts/Environmental";
import Social from "../../impacts/Social";
import DesktopHeader from "../../components/DesktopHeader";
import Breadcrumb from "../../components/Breadcrumb";

class DesktopContent extends React.Component {
  render() {
    /* to select the correct lists of impacts from the two impact components  */
    const fromPage = "endOfLife";
    const pageHeader = "End of life";

    return (
      <div id="end-of-life-page">
        {/* Header */}
        <DesktopHeader pageHeader={pageHeader} />

        {/* Left half */}
        <div className="split left-half">
          <Breadcrumb fromPage={fromPage} />
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
