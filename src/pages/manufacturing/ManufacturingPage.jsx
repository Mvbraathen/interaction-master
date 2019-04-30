import React, {Component} from 'react';
import Menu from "../components/menu/Menu";
import "./ManufacturingPage.css";
import "../pageStyle.css";

class ManufacturingPage extends Component {        
    render(){
        return (
            <div>
                <div className="split left">
                    <div className="centerMenu">
                        <Menu />
                    </div>
                </div>
                <div className="split right manufacturingColor"> 
                    <div className="manufacturingTxt">
                        <h1> Manufacturing </h1>
                        Du er nå på Manufacturing-siden!
                    </div> 
                </div>
            </div>
        );
    }
}

export default ManufacturingPage;