import React, {Component} from 'react';
import Menu from "../components/menu/Menu";
import "./DesignPage.css";

class DesignPage extends Component {        
    render(){
        return <div>
            <Menu />
            <div> Du er nå på Design-siden! </div>
        </div>
    }
}

export default DesignPage;