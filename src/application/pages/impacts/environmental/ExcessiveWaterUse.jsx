import React from 'react';

class ExcessiveWaterUse extends React.Component {
    constructor() {
        super();
        this.state = {
            excessiveWaterUse: true
        }
    }
	render() {
        if(this.state.excessiveWaterUse) {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ excessiveWaterUse: false })}> 
                    <div className="info-box-content"> Excessive water use </div>
                </div>
            )
        } else {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ excessiveWaterUse: true })}> 
                    <div className="info-box-content"> Lorem impsum lorem impsum lorem impsum </div>
                </div>
            )
        }
	}
}

export default ExcessiveWaterUse;