import React, { Component } from 'react';
import { slide as BurgerMenu } from 'react-burger-menu';
import {
    NavLink
} from "react-router-dom";
import './Mobile.css';

class Menu extends Component {

    render() {
        return (
            <div>
                <BurgerMenu width={'100%'}
                    disableAutoFocus 
                    customCrossIcon = {   
                        <div className="close-burger-container">
                            <span className="custom-cross">
                                &#10005;
                            </span> 
                        </div>
                    } 
                    customBurgerIcon = {  
                        <div className="burger-container"> 
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                    }>
                    <ul className = "bm-item-list">
                        <li title="Home"><NavLink className="bm-item menu-element" to ="/"> Home </NavLink></li>
                        <li title="Design"><NavLink className="bm-item menu-element" to ="/design"> Design </NavLink></li>
                        <li title="Resource Extraction"><NavLink className="bm-item menu-element" to ="/resource-extraction"> Resource Extraction </NavLink></li>
                        <li title="Manufacturing"><NavLink className="bm-item menu-element" to ="/manufacturing"> Manufacturing </NavLink></li>
                        <li title="Transport"><NavLink className="bm-item menu-element" to ="/transport"> Transport </NavLink></li>
                        <li title="Use"><NavLink className="bm-item menu-element" to ="/use"> Use </NavLink></li>
                        <li title="End of Life"><NavLink className="bm-item menu-element" to ="/end-of-life"> End of Life </NavLink></li>
                    </ul>
                </BurgerMenu>
            </div>
        );
    }
}

export default Menu;