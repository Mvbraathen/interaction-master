import React, {Component} from 'react';
import Menu from "../components/menu/Menu";
import "./UsePage.css";

class UsePage extends Component {        
    render(){
        return (
            <div>
                <div className="split left">
                    <div className="centerMenu">
                        <Menu />
                    </div>
                </div>
                <div className="split right useColor"> 
                    <div className="useTxt">
                        <h1> Use </h1>
                        Du er nå på Use-siden!
                    </div> 
                </div>
            </div>
        );
    }
}

export default UsePage;