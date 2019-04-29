import React, {Component} from 'react';
import Menu from "../components/menu/Menu";
import "./ManufacturingPage.css";

class ManufacturingPage extends Component {        
    render(){
        return <div>
            <Menu />
            <div> Du er nå på Manufacturing-siden! </div>
        </div>
    }
}

export default ManufacturingPage;