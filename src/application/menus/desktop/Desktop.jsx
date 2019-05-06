import React, {Component} from 'react';
import ResourceExtraction from "./components/resource-extraction/ResourceExtraction";
import Manufacturing from "./components/manufacturing/Manufacturing";
import Transport from "./components/transport/Transport";
import Use from "./components/use/Use";
import EndOfLife from "./components/end-of-life/EndOfLife";
import Design from "./components/design/Design";
import Home from "./components/home/Home";
import "./Desktop.css";

class Menu extends Component {        
    render(){
        return (
            <div className="desktopMenu">
                <div>
                    <svg width="430" height="430">
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
        );
    }
}

export default Menu;