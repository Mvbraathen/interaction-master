import React, {Component} from 'react';
import Menu from "../components/menu/Menu";

class Home extends Component {        
    render(){
        return <div>
            <Menu />
            <div> Du er nå på hjemsiden! </div>
        </div>
    }
}

export default Home;