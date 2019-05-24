import React from 'react';

class OzoneDepletion extends React.Component {
    constructor() {
        super();
        this.state = {
            ozoneDepletion: true
        }
    }
	render() {
        if(this.state.ozoneDepletion) {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ ozoneDepletion: false })}> 
                    <div className="info-box-content"> Ozone Depletion </div>
                </div>
            )
        } else {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ ozoneDepletion: true })}> 
                    <div className="info-box-content"> Lorem impsum lorem impsum lorem impsum </div>
                </div>
            )
        }
	}
}

export default OzoneDepletion;