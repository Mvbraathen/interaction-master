import React, {Component} from 'react';
import Menu from "../components/menu/Menu";
import "./DesignPage.css";
import "../pageStyle.css";

class DesignPage extends Component {        
    render(){
        return (
            <div>
                <div className="split left">
                    <div className="centerMenu">
                        <Menu />
                    </div>
                </div>
                <div className="split right designColor"> 
                    <div className="designTxt">
                        <h1> Design </h1>
                        Du er nå på Design-siden!
                    </div> 
                </div>
            </div>
        );
    }
}

export default DesignPage;