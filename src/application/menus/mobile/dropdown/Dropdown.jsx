import React, { Component } from 'react';
import {
    NavLink
} from "react-router-dom";
import './Dropdown.css';

class Dropdown extends Component {
    constructor() {
        super();
        this.state = {
            showMenu: false,
        };
        this.showMenu = this.showMenu.bind(this);
    }
  
    showMenu(event) {
        event.preventDefault();
    
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }
    render() {
        return (
            <div>
                <div className="bm-item" onClick={this.showMenu}>
                    Use
                </div>

                {
                    this.state.showMenu
                        ? (
                            <div 
                                className="menu"
                                ref={(element) => {
                                    this.dropdownMenu = element;
                                }}
                            >   
                                <ul>
                                    <li className="testSubMenuMain"><NavLink className="bm-item" to ="/use"> Mobile phone usage </NavLink></li>
                                    <li className="testSubMenu"><NavLink className="bm-item" to ="/use/lifetime"> Lifetime </NavLink></li>
                                    <li className="testSubMenu"><NavLink className="bm-item" to ="/use/lifetime"> Test </NavLink></li>
                                    <li className="testSubMenu"><NavLink className="bm-item" to ="/use/lifetime"> Test 2</NavLink></li>
                                    <li className="testSubMenu"><NavLink className="bm-item" to ="/use/lifetime"> Test 3 </NavLink></li>
                                </ul>
                            </div>
                        )
                        : (
                            null
                        )
                }
            </div>
        );
    }
}

export default Dropdown;