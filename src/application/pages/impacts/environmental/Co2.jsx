import React from 'react';

class Co2 extends React.Component {
    constructor() {
        super();
        this.state = {
            co2: true
        }
    }
	render() {
        if(this.state.co2) {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ co2: false })}> 
                    <div className="info-box-content"> CO2 emissions </div>
                </div>
            )
        } else {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ co2: true })}> 
                    <div className="info-box-content"> Lorem impsum lorem impsum lorem impsum </div>
                </div>
            )
        }
	}
}

export default Co2;