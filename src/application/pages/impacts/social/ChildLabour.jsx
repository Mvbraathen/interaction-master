import React from 'react';

class ChildLabour extends React.Component {
    constructor() {
        super();
        this.state = {
            childLabour: true
        }
    }
    render() {
        if(this.state.childLabour) {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ childLabour: false })}> 
                    <div className="info-box-content"> Child Labour / Low Literacy </div>
                </div>
            )
        } else {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ childLabour: true })}> 
                    <div className="info-box-content"> Lorem impsum lorem impsum lorem impsum </div>
                </div>
            )
        }
    }
}

export default ChildLabour;