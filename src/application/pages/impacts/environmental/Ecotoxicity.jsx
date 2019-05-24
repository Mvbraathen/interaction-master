import React from 'react';

class Ecotoxicity extends React.Component {
    constructor() {
        super();
        this.state = {
            ecotoxicity: true
        }
    }
	render() {
        if(this.state.ecotoxicity) {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ ecotoxicity: false })}> 
                    <div className="info-box-content"> Ecotoxicity </div>
                </div>
            )
        } else {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ ecotoxicity: true })}> 
                    <div className="info-box-content"> Lorem impsum lorem impsum lorem impsum </div>
                </div>
            )
        }
	}
}

export default Ecotoxicity;