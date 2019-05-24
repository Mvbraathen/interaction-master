import React from 'react';

class ViolentConflict extends React.Component {
    constructor() {
        super();
        this.state = {
            violentConflict: true
        }
    }
    render() {
        if(this.state.violentConflict) {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ violentConflict: false })}> 
                    <div className="info-box-content"> Violent Conflict / Corruption </div>
                </div>
            )
        } else {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ violentConflict: true })}> 
                    <div className="info-box-content"> Lorem impsum lorem impsum lorem impsum </div>
                </div>
            )
        }
    }
}

export default ViolentConflict;