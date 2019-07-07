import React from 'react';

class ImageSelector extends React.Component {
	render() {

        let image;

        if(this.props.fromPage === "resourceExtraction") {
            image = (
                <div>
                    <img 
                        alt="resource extraction icon" 
                        style={{maxHeight: '35px', verticalAlign: 'middle'}} 
                        src={require('../../images/resource-extraction-icon.svg')} 
                    />
                </div> 
            )
        }

        if(this.props.fromPage === "manufacturing") {
            image = (
                <div>
                    <img 
                        alt="manufacturing icon" 
                        style={{maxHeight: '35px', verticalAlign: 'middle'}} 
                        src={require('../../images/manufacturing-icon.svg')} 
                    />
                </div> 
            )
        }

        if(this.props.fromPage === "transport") {
            image = (
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
            image = (
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
            image = (
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
            <div>{image}</div>
        );
	}
}
export default ImageSelector;