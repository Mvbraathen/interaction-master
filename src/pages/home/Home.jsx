import React, {Component} from 'react';
import Menu from "../components/menu/Menu";
import "./Home.css";
import "../pageStyle.css";

class Home extends Component {        
    render(){
        return (
            <div>
                <div className="split left">
                    <div className="centerMenu">
                        <Menu />
                    </div>
                </div>
                <div className="split right homeColor"> 
                    <div className="homeTxt">
                        <h1> The Mobile Lifecycle </h1>
                        Click on the menu to learn more about the mobile lifecycle!
                    </div> 
                </div>
            </div>
        );
    }
}

export default Home;