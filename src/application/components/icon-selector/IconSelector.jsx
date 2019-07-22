import React from 'react';

class ImageSelector extends React.Component {
	render() {

        let icon;

        if(this.props.fromPage === "resourceExtraction" && this.props.iconColor === "white") {
            icon = (
                <div>
                    <img 
                        alt="resource extraction icon" 
                        style={{maxHeight: '35px', verticalAlign: 'middle'}} 
                        src={require('./icons/resource-extraction-icon-white.svg')} 
                    />
                </div> 
            )
        }

        if(this.props.fromPage === "resourceExtraction" && this.props.iconColor === "black") {
            icon = (
                <div>
                    <img 
                        alt="resource extraction icon" 
                        style={{maxHeight: '35px', verticalAlign: 'middle'}} 
                        src={require('./icons/resource-extraction-icon.svg')} 
                    />
                </div> 
            )
        }

        if(this.props.fromPage === "manufacturing" && this.props.iconColor === "white") {
            icon = (
                <div>
                    <img 
                        alt="manufacturing icon" 
                        style={{maxHeight: '35px', verticalAlign: 'middle'}} 
                        src={require('./icons/manufacturing-icon-white.svg')} 
                    />
                </div> 
            )
        }

        if(this.props.fromPage === "manufacturing" && this.props.iconColor === "black") {
            icon = (
                <div>
                    <img 
                        alt="manufacturing icon" 
                        style={{maxHeight: '35px', verticalAlign: 'middle'}} 
                        src={require('./icons/manufacturing-icon.svg')} 
                    />
                </div> 
            )
        }

        if(this.props.fromPage === "transport" && this.props.iconColor === "white") {
            icon = (
                <div>
                    <img 
                        alt="transport icon" 
                        style={{maxHeight: '35px', verticalAlign: 'middle'}} 
                        src={require('./icons/transport-icon-white.svg')} 
                    />
                </div> 
            )
        }

        if(this.props.fromPage === "transport" && this.props.iconColor === "black") {
            icon = (
                <div>
                    <img 
                        alt="transport icon" 
                        style={{maxHeight: '35px', verticalAlign: 'middle'}} 
                        src={require('./icons/transport-icon.svg')} 
                    />
                </div> 
            )
        }

        if(this.props.fromPage === "use" && this.props.iconColor === "white") {
            icon = (
                <div>
                    <img 
                        alt="use icon" 
                        style={{maxHeight: '35px', verticalAlign: 'middle'}} 
                        src={require('./icons/use-icon-white.svg')} 
                    />
                </div> 
            )
        }

        if(this.props.fromPage === "use" && this.props.iconColor === "black") {
            icon = (
                <div>
                    <img 
                        alt="use icon" 
                        style={{maxHeight: '35px', verticalAlign: 'middle'}} 
                        src={require('./icons/use-icon.svg')} 
                    />
                </div> 
            )
        }

        if(this.props.fromPage === "endOfLife" && this.props.iconColor === "white") {
            icon = (
                <div>
                    <img 
                        alt="end of life icon" 
                        style={{maxHeight: '35px', verticalAlign: 'middle'}} 
                        src={require('./icons/end-of-life-icon-white.svg')} 
                    />
                </div> 
            )
        }

        if(this.props.fromPage === "endOfLife" && this.props.iconColor === "black") {
            icon = (
                <div>
                    <img 
                        alt="end of life icon" 
                        style={{maxHeight: '35px', verticalAlign: 'middle'}} 
                        src={require('./icons/end-of-life-icon.svg')} 
                    />
                </div> 
            )
        }

        return (
            <div>{icon}</div>
        );
	}
}
export default ImageSelector;