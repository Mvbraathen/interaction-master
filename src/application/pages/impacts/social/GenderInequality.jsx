import React from 'react';

class GenderInequality extends React.Component {
    constructor() {
        super();
        this.state = {
            genderInequality: true
        }
    }
    render() {
        if(this.state.genderInequality) {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ genderInequality: false })}> 
                    <div className="info-box-content"> Gender Inequality </div>
                </div>
            )
        } else {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ genderInequality: true })}> 
                    <div className="info-box-content"> Lorem impsum lorem impsum lorem impsum </div>
                </div>
            )
        }
    }
}

export default GenderInequality;