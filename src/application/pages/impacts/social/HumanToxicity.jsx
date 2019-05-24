import React from 'react';

class HumanToxicity extends React.Component {
    constructor() {
        super();
        this.state = {
            humanToxicity: true
        }
    }
    render() {
        if(this.state.humanToxicity) {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ humanToxicity: false })}> 
                    <div className="info-box-content"> Human Toxicity </div>
                </div>
            )
        } else {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ humanToxicity: true })}> 
                    <div className="info-box-content"> Lorem impsum lorem impsum lorem impsum </div>
                </div>
            )
        }
    }
}

export default HumanToxicity;