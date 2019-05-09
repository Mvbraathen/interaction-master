import React, {Component} from 'react';
import Desktop from "../../menus/desktop/Desktop";
import Mobile from "../../menus/mobile/Mobile";
import MediaQuery from 'react-responsive';
import "./Home.css";
import "../css/DesktopNormal.css";
import "../css/MobilePageStyle.css";

class Home extends Component {        
    render(){
        return (
            <div>
                {/* render if screen width is <= 850px */}
                <MediaQuery minWidth="850px">
                    <div className="split leftBig">
                        <div className="header"></div>
                        <div className="pageHeaderBigScreen">  
                            <h1> The Lifecycle of Mobile Phones </h1>
                        </div>
                        <div>
                            <Desktop />                
                        </div>
                    </div>
                    <div className="split rightBig bigDefaultContent"> 
                        <div className="header"></div>
                        <div className="homeTxt">
                            <h1> The Mobile Lifecycle </h1>
                            <div>In the modern world, a mobile phone is a usual attribute that is presented in the life of every person. However, few people think about the risks that arise during the producton and operation of this device. This visualization is aimed to promote insight on the newest research in this field.</div>  
                        </div> 
                    </div>
                </MediaQuery>
            {/* render if screen width is < 850px */}
                <MediaQuery maxWidth={849}>
                    <div className="mobilePage">
                        <div className="mobileContent">
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
                            <Mobile />
                        </div>
                    </div>
                </MediaQuery>
            </div>
        );
    }
}

export default Home;