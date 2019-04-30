import React, {Component} from 'react';
import Menu from "../components/menu/Menu";
import "./DistributionPage.css";
import "../pageStyle.css";

class DistributionPage extends Component {        
    render(){
        return (
        	<div>
            	<div className="split left">
            		<div className="centerMenu">
            			<Menu />
            		</div>
            	</div>
            	<div className="split right distributionColor"> 
            		<div className="distributionTxt">
            			<h1> Distribution </h1>
            			Du er nå på Distribution-siden!
            		</div> 
            	</div>
        	</div>
        );
    }
}

export default DistributionPage;