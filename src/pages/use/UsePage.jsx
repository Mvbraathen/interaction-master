import React, {Component} from 'react';
import Menu from "../components/menu/Menu";
import MobileMenu from "../components/mobileMenu/MobileMenu";
import MediaQuery from 'react-responsive';
import "./UsePage.css";

class UsePage extends Component {        
    render(){
        return (
            <div>
                <MediaQuery minWidth="850px">
                    <div className="split left">
                        <div className="centerMenu">
                            <Menu />
                        </div>
                    </div>
                    <div className="split right useColor"> 
                        <div className="useTxt">
                            <h1> Use </h1>
                            Du er nå på Use-siden!
                        </div> 
                    </div>
                </MediaQuery>
                <MediaQuery maxWidth={849}>
                    <div className="mobilePage">
                        <div className="mobileSize">
                            <div className="homeMobileTxt">
                                <h1> Use </h1>
                                <div> Use Use Use
                                </div>
                            </div>
                        </div>
                        <div>
                            <MobileMenu />
                        </div>
                    </div>
                </MediaQuery>
            </div>
        );
    }
}

export default UsePage;