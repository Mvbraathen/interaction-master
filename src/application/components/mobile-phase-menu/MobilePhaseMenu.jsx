import React from 'react';
import { NavLink } from "react-router-dom";
import './MobilePhaseMenu.css';

class MobilePhaseMenu extends React.Component {
	render() {
        return (
            <div>
                <NavLink to ='/design'>
                    <div 
                        className="phase-button" 
                        style={{marginLeft: '2%', backgroundColor: '#E00070'}}> 
                        <img
                            alt="design icon" 
                            style={{maxHeight: '60px', verticalAlign: 'middle'}} 
                            src={require('../../images/design-icon.svg')} 
                        />
                    </div>
                </NavLink>

                <NavLink to ='/resource-extraction'>
                    <div 
                        className="phase-button" 
                        style={{backgroundColor: '#00AD00'}}> 
                        <img 
                            alt="design icon" 
                            style={{width: '60px', verticalAlign: 'middle'}} 
                            src={require('../../images/resource-extraction-icon-white.svg')} 
                        />
                    </div>
                </NavLink>

                <NavLink to ='/manufacturing'>
                    <div 
                        className="phase-button" 
                        style={{backgroundColor: '#BD2EC2'}}> 
                        <img 
                            alt="design icon" 
                            style={{maxHeight: '60px', verticalAlign: 'middle'}} 
                            src={require('../../images/manufacturing-icon-white.svg')} 
                        />
                    </div>
                </NavLink>

                <NavLink to ='/transport'>
                    <div 
                        className="phase-button"
                        style={{marginLeft: '2%', backgroundColor: '#0066FF'}}> 
                        <img 
                            alt="design icon" 
                            style={{maxHeight: '60px', verticalAlign: 'middle'}} 
                            src={require('../../images/transport-icon-white.svg')} 
                        />
                    </div>
                </NavLink>

                <NavLink to ='/use'>
                    <div
                        className="phase-button"
                        style={{backgroundColor: '#EB0000'}}> 
                        <img 
                            alt="design icon" 
                            style={{maxHeight: '60px', verticalAlign: 'middle'}} 
                            src={require('../../images/use-icon-white.svg')} 
                        />
                    </div>
                </NavLink>

                <NavLink to ='/end-of-life'>
                    <div 
                        className="phase-button"
                        style={{backgroundColor: '#C75000'}}> 
                        <img 
                            alt="design icon" 
                            style={{maxHeight: '60px', verticalAlign: 'middle'}} 
                            src={require('../../images/end-of-life-icon-white.svg')} 
                        />
                    </div>
                </NavLink>
            </div>
        );
	}
}
export default MobilePhaseMenu;