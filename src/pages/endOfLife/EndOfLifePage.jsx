import React, {Component} from 'react';
import Menu from "../components/menu/Menu";
import MobileMenu from "../components/mobileMenu/MobileMenu";
import MediaQuery from 'react-responsive';
import "./EndOfLifePage.css";
import "../pageStyle.css";

class EndOfLifePage extends Component {        
    render(){
        return (
            <div>
                <MediaQuery minWidth="850px">
                    <div className="split left">
                        <div className="centerMenu">
                            <Menu />
                        </div>
                    </div>
                    <div className="split right endOfLifeColor"> 
                        <div className="endOfLifeTxt">
                            <h1> End of Life </h1>
                            Du er nå på End of Life-siden!
                        </div> 
                    </div>
                </MediaQuery>
                <MediaQuery maxWidth={849}>
                    <div className="mobilePage">
                        <div className="mobileSize">
                            <div className="homeMobileTxt">
                                <h1> End of Life </h1>
                                <div>End of Life End of Life
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

export default EndOfLifePage;