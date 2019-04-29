import React, {Component} from 'react';
import Menu from "../components/menu/Menu";
import "./EndOfLifePage.css";

class EndOfLifePage extends Component {        
    render(){
        return <div>
            <Menu />
            <div> Du er nå på EndOfLife-siden! </div>
        </div>
    }
}

export default EndOfLifePage;