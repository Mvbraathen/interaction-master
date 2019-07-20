import React, { Component } from 'react';
import { slide as BurgerMenu } from 'react-burger-menu';
import {
    NavLink
} from "react-router-dom";
import './Mobile.css';

class Menu extends Component {
    constructor() {
        super();
        this.state = {
            tabIndex: -1
        }
    }

    render() {

        /* Function to prevent keyboard users to tab through inactive / hidden menu */
        var isMenuOpen = function(state) {
            if(state.isOpen){
                this.setState({
                    tabIndex: 0
                })
            } else {
                this.setState({
                    tabIndex: -1
                })
            }
        }.bind(this);

        return (
            <div>
                <BurgerMenu onStateChange={ isMenuOpen } width={'100%'}
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
                        <li title="Home"><NavLink tabIndex={this.state.tabIndex} className="bm-item menu-element" to ="/home"> Home </NavLink></li>
                        <li title="Design"><NavLink tabIndex={this.state.tabIndex}  className="bm-item menu-element" to ="/design"> Design </NavLink></li>
                        <li title="Resource Extraction"><NavLink tabIndex={this.state.tabIndex}  className="bm-item menu-element" to ="/resource-extraction"> Resource Extraction </NavLink></li>
                        <li title="Manufacturing"><NavLink tabIndex={this.state.tabIndex}  className="bm-item menu-element" to ="/manufacturing"> Manufacturing </NavLink></li>
                        <li title="Transport"><NavLink tabIndex={this.state.tabIndex}  className="bm-item menu-element" to ="/transport"> Transport </NavLink></li>
                        <li title="Use"><NavLink tabIndex={this.state.tabIndex}  className="bm-item menu-element" to ="/use"> Use </NavLink></li>
                        <li title="End of Life"><NavLink tabIndex={this.state.tabIndex}  className="bm-item menu-element" to ="/end-of-life"> End of Life </NavLink></li>
                    </ul>
                </BurgerMenu>
            </div>
        );
    }
}

export default Menu;