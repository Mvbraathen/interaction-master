import React, {Component} from 'react';
import Menu from "../components/menu/Menu";
import MobileMenu from "../components/mobileMenu/MobileMenu";
import MediaQuery from 'react-responsive';
import "./Home.css";
import "../pageStyle.css";

class Home extends Component {        
    render(){
        return (
            <div>
                <MediaQuery minWidth="850px">
                    <div className="split left">
                        <div className="centerMenu">
                            <Menu />                
                        </div>
                    </div>
                    <div className="split right homeColor"> 
                        <div className="homeTxt">
                            <h1> The Mobile Lifecycle </h1>
                            Click on the menu to learn more about the mobile lifecycle!
                        </div> 
                    </div>
                </MediaQuery>
                <MediaQuery maxWidth={849}>
                    <div className="mobilePage">
                        <div className="mobileSize">
                            <div className="homeMobileTxt">
                                <h1> Life Cycle of Mobile Phones </h1>
                                <div>In the modern world, a mobile phone 
                                is a usual attribute that is presented in 
                                the life of every person. However, few 
                                people think about the risks that arise 
                                during the producton and operation of this 
                                device. This visualization is aimed to 
                                promote insight on the newest research 
                                in this field.
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

export default Home;