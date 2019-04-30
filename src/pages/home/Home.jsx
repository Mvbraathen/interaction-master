import React, {Component} from 'react';
import Menu from "../components/menu/Menu";
import MediaQuery from 'react-responsive';
import "./Home.css";
import "../pageStyle.css";

class Home extends Component {        
    render(){
        return (
            <div>
                <MediaQuery minWidth="900px">
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
                </MediaQuery>
                <MediaQuery maxWidth={899}>
                    <div className="mobilePage">
                        <div className="mobileSize">
                            Oops! Det ser ut til at du er på en mobil enhet. For å se menyen må skjermen være større enn 900px bred!
                        </div>
                    </div>
                </MediaQuery>
            </div>
        );
    }
}

export default Home;