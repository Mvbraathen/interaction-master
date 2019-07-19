import React from 'react';

class ImageSelector extends React.Component {
	render() {

        let icon;

        if(this.props.fromPage === "design") {
            icon = (
                <div>
                    <img 
                        alt="design icon" 
                        style={{maxHeight: '35px', verticalAlign: 'middle'}} 
                        src={require('../../images/design-icon.svg')} 
                    />
                </div> 
            )
        }




        if(this.props.fromPage === "resourceExtraction" && this.props.iconColor === "white") {
            icon = (
                <div>
                    <img 
                        alt="resource extraction icon" 
                        style={{maxHeight: '35px', verticalAlign: 'middle'}} 
                        src={require('../../images/resource-extraction-icon-white.svg')} 
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
                        src={require('../../images/resource-extraction-icon.svg')} 
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
                        src={require('../../images/manufacturing-icon.svg')} 
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
                        src={require('../../images/manufacturing-icon-white.svg')} 
                    />
                </div> 
            )
        }

        if(this.props.fromPage === "transport") {
            icon = (
                <div>
                    <img 
                        alt="transport icon" 
                        style={{maxHeight: '35px', verticalAlign: 'middle'}} 
                        src={require('../../images/transport-icon.svg')} 
                    />
                </div> 
            )
        }

        if(this.props.fromPage === "use") {
            icon = (
                <div>
                    <img 
                        alt="use icon" 
                        style={{maxHeight: '35px', verticalAlign: 'middle'}} 
                        src={require('../../images/use-icon.svg')} 
                    />
                </div> 
            )
        }

        if(this.props.fromPage === "endOfLife") {
            icon = (
                <div>
                    <img 
                        alt="end of life icon" 
                        style={{maxHeight: '35px', verticalAlign: 'middle'}} 
                        src={require('../../images/end-of-life-icon.svg')} 
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