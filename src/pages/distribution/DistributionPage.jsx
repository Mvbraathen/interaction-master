import React, {Component} from 'react';
import Menu from "../components/menu/Menu";
import MobileMenu from "../components/mobileMenu/MobileMenu";
import MediaQuery from 'react-responsive';
import "./DistributionPage.css";
import "../pageStyle.css";

class DistributionPage extends Component {        
    render(){
        return (
            <div>
                <MediaQuery minWidth="850px">
                    <div className="split left">
                        <div className="centerMenu">
                            <Menu />
                        </div>
                    </div>
                    <div className="split right distributionColor"> 
                        <div className="distributionTxt">
                            <h1> Distribution </h1>
                            Du er nå på Distribution-siden!
                        </div> 
                    </div>
                </MediaQuery>
                <MediaQuery maxWidth={849}>
                    <div className="mobilePage">
                        <div className="mobileSize">
                            <div className="homeMobileTxt">
                                <h1> Distribution Page </h1>
                                <div>Distribution Page Distribution Page Distribution Page 
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

export default DistributionPage;