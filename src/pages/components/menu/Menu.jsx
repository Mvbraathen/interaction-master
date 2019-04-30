import React, {Component} from 'react';
import ResourceExtraction from "./components/resourceExtraction/ResourceExtraction";
import Manufacturing from "./components/manufacturing/Manufacturing";
import Distribution from "./components/distribution/Distribution";
import Use from "./components/use/Use";
import EndOfLife from "./components/endOfLife/EndOfLife";
import Design from "./components/design/Design";
import CenterObjects from "./components/centerObjects/CenterObjects";
import "./Menu.css";

class Menu extends Component {        
    render(){
        return <div>
            <svg width="430" height="430">
                <g>
                    <ResourceExtraction />              
                    <Manufacturing />
                    <Distribution />
                    <Use />
                    <EndOfLife />
                    <Design />
                    <CenterObjects />
                </g>
            </svg>
        </div>
    }
}

export default Menu;