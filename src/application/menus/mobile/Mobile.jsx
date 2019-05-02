import React, {Component} from 'react';
import { slide as BurgerMenu } from 'react-burger-menu';
import {
    NavLink
} from "react-router-dom";
import './Mobile.css';

class Menu extends Component {  
       
    render(){
        return (
            <div>
                <div className="burgerLabel">
                Menu
                </div>
                <BurgerMenu>
                    <ul className = "bm-item-list">
                        <li><NavLink className="bm-item" to ="/home"> Home </NavLink></li>
                        <li><NavLink className="bm-item" to ="/design"> Design </NavLink></li>
                        <li><NavLink className="bm-item" to ="/resource-extraction"> Resource Extraction </NavLink></li>
                        <li><NavLink className="bm-item" to ="/manufacturing"> Manufacturing </NavLink></li>
                        <li><NavLink className="bm-item" to ="/distribution"> Distribution </NavLink></li>
                        <li><NavLink className="bm-item" to ="/use"> Use </NavLink></li>
                        <li><NavLink className="bm-item" to ="/end-of-life"> End of Life </NavLink></li>
                    </ul>
                </BurgerMenu>
            </div>
        );
    }
}

export default Menu;