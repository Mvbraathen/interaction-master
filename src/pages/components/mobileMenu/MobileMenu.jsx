import React, {Component} from 'react';
import { slide as BurgerMenu } from 'react-burger-menu';
import {
    NavLink
} from "react-router-dom";
import './MobileMenu.css';

class Menu extends Component {  
    showSettings (event) {
    event.preventDefault();

  }      
    render(){
        return (
            <div>
                <BurgerMenu>
                    <div className = "bm-item-list">
                        <NavLink className="bm-item" to ="/"> Home </NavLink>
                        <br/>
                        <NavLink className="bm-item" to ="/design"> Design </NavLink>
                        <br/>
                        <NavLink className="bm-item" to ="/resource-extraction"> Resource Extraction </NavLink>
                        <br/>
                        <NavLink className="bm-item" to ="/manufacturing"> Manufacturing </NavLink>
                        <br/>
                        <NavLink className="bm-item" to ="/distribution"> Distribution </NavLink>
                        <br/>
                        <NavLink className="bm-item" to ="/use"> Use </NavLink>
                        <br/>
                        <NavLink className="bm-item" to ="/end-of-life"> End of Life </NavLink>
                    </div>
                </BurgerMenu>
            </div>
        );
    }
}

export default Menu;