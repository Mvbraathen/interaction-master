import React, {Component} from 'react';
import Menu from "../components/menu/Menu";
import "./UsePage.css";

class UsePage extends Component {        
    render(){
        return <div>
            <Menu />
            <div> Du er nå på USE-siden! </div>
        </div>
    }
}

export default UsePage;