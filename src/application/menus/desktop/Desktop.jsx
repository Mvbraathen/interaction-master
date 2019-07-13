import React, { Component } from "react";
// Menu elements
import ResourceExtraction from "./components/resource-extraction/ResourceExtraction";
import Manufacturing from "./components/manufacturing/Manufacturing";
import Transport from "./components/transport/Transport";
import Use from "./components/use/Use";
import EndOfLife from "./components/end-of-life/EndOfLife";
import Design from "./components/design/Design";
import Home from "./components/home/Home";
// Styling
import "./Desktop.css";
import MediaQuery from "react-responsive";
import { NavLink } from "react-router-dom";

class Menu extends Component {
  render() {
    let explainMenu;
    if(this.props.fromPage === 'home') {
      explainMenu = (
        <g>
          <text textAnchor="middle" x="212.5" y="-20" fontSize="20" fill="black"> </text>
        </g>
      )
    }
    return (
      <div className="scaling-svg-container">
        <MediaQuery minHeight="540px">
          <svg viewBox="0 0 425 425" className="scaling-svg">
            <g>
              <Design />
              {explainMenu}
              <ResourceExtraction />
              <Manufacturing />
              <Transport />
              <Use />
              <EndOfLife />
              <Home />
            </g>
          </svg>
        </MediaQuery>
        <MediaQuery maxHeight="539px">
          <div className="mini-menu-flex-container">
            <NavLink to="/design">
              <div className="mini-menu-flex-element design-color">Design</div>
            </NavLink>
            <NavLink to="/resource-extraction">
              <div className="mini-menu-flex-element resource-extraction-color">
                Resource Extraction
              </div>
            </NavLink>
            <NavLink to="/manufacturing">
              <div className="mini-menu-flex-element manufacturing-color">
                Manufacturing
              </div>
            </NavLink>
            <NavLink to="/transport">
              <div className="mini-menu-flex-element transport-color">
                Transport
              </div>
            </NavLink>
            <NavLink to="/use">
              <div className="mini-menu-flex-element use-color">Use</div>
            </NavLink>
            <NavLink to="/end-of-life">
              <div className="mini-menu-flex-element end-of-life-color">
                End of Life
              </div>
            </NavLink>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default Menu;
