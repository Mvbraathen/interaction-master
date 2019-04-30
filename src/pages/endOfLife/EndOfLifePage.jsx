import React, {Component} from 'react';
import Menu from "../components/menu/Menu";
import "./EndOfLifePage.css";
import "../pageStyle.css";

class EndOfLifePage extends Component {        
    render(){
        return (
        	<div>
            	<div className="split left">
            		<div className="centerMenu">
            			<Menu />
            		</div>
            	</div>
            	<div className="split right endOfLifeColor"> 
            		<div className="endOfLifeTxt">
            			<h1> End of Life </h1>
            			Du er nå på End of Life-siden!
            		</div> 
            	</div>
        	</div>
        );
    }
}

export default EndOfLifePage;