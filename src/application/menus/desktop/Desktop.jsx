import React, {Component} from 'react';
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

class Menu extends Component {        
    render(){
        return (
            <div>
                <div className="mobileHeader"></div>
                <div className="desktopMenu">
                    <div>
                        <svg className="svg">
                            <g>
                                <ResourceExtraction />              
                                <Manufacturing />
                                <Transport />
                                <Use />
                                <EndOfLife />
                                <Design />
                                <Home />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;