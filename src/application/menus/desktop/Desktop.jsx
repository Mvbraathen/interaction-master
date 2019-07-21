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

class Desktop extends Component {
    render() {
        return (
            <div>
                {/* Circular menu */}
                <div className="scaling-svg-container">
                    <MediaQuery minHeight="440px">
                        <svg viewBox="0 0 425 425" className="scaling-svg">
                            <Design />
                            <ResourceExtraction />
                            <Manufacturing />
                            <Transport />
                            <Use />
                            <EndOfLife />
                            <Home />
                        </svg>
                    </MediaQuery>
                </div>
                {/* Backup menu for small, but wide screens */}
                <MediaQuery maxHeight="439px">
                    <div className="mini-menu">
                        <NavLink 
                            style={{backgroundColor: '#E00070'}} 
                            className="mini-menu-element" 
                            title="link to design page" 
                            to="/design">
                            Design
                        </NavLink>
                        <NavLink 
                            style={{backgroundColor: '#00AD00'}} 
                            className="mini-menu-element" 
                            title="link to resource extraction page" 
                            to="/resource-extraction">
                            Resource extraction
                        </NavLink>
                        <NavLink 
                            style={{backgroundColor: '#BD2EC2'}} 
                            className="mini-menu-element" 
                            title="link to manufacturing page" 
                            to="/manufacturing">
                            Manufacturing
                        </NavLink>
                        <NavLink 
                            style={{backgroundColor: '#0066FF'}} 
                            className="mini-menu-element" 
                            title="link to transport page" 
                            to="/transport">
                            Transport
                        </NavLink>
                        <NavLink 
                            style={{backgroundColor: '#EB0000'}} 
                            className="mini-menu-element" 
                            title="link to use page" 
                            to="/use">
                            Use
                        </NavLink>
                        <NavLink 
                            style={{backgroundColor: '#C75000'}} 
                            className="mini-menu-element" 
                            title="link to end of life page" 
                            to="/end-of-life">
                            End of life
                        </NavLink>
                    </div>
                </MediaQuery>
            </div>
        );
    }
}

export default Desktop;
