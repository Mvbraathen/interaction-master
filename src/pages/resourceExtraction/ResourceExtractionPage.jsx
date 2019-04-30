import React, {Component} from 'react';
import Menu from "../components/menu/Menu";
import "./ResourceExtractionPage.css";
import "../pageStyle.css";

class ResourceExtractionPage extends Component {        
    render(){
        return (
            <div>
                <div className="split left">
                    <div className="centerMenu">
                        <Menu />
                    </div>
                </div>
                <div className="split right resourceExtractionColor"> 
                    <div className="resourceExtractionTxt">
                        <h1> Resource Extraction </h1>
                        Du er nå på Resource Extraction-siden!
                    </div> 
                </div>
            </div>
        );
    }
}

export default ResourceExtractionPage;