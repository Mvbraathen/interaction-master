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
        return (
            <div>
                <div className="menuTxt">  
                    <h1> Life Cycle of Mobile Phones </h1>
                    <div>In the modern world, a mobile phone is a usual attribute that is presented in the life of every person. However, few people think about the risks that arise during the producton and operation of this device. This visualization is aimed to promote insight on the newest research in this field.</div>  
                </div>
                <div>
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
            </div>
        );
    }
}

export default Menu;