import React from 'react';

class LivingInSlums extends React.Component {
    constructor() {
        super();
        this.state = {
            livingInSlums: true
        }
    }
    render() {
        if(this.state.livingInSlums) {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ livingInSlums: false })}> 
                    <div className="info-box-content"> Living In Slums </div>
                </div>
            )
        } else {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ livingInSlums: true })}> 
                    <div className="info-box-content"> Lorem impsum lorem impsum lorem impsum </div>
                </div>
            )
        }
    }
}

export default LivingInSlums;