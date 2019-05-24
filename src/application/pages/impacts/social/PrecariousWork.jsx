import React from 'react';

class PrecariousWork extends React.Component {
    constructor() {
        super();
        this.state = {
            precariousWork: true
        }
    }
    render() {
        if(this.state.precariousWork) {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ precariousWork: false })}> 
                    <div className="info-box-content"> Precarious Work </div>
                </div>
            )
        } else {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ precariousWork: true })}> 
                    <div className="info-box-content"> Lorem impsum lorem impsum lorem impsum </div>
                </div>
            )
        }
    }
}

export default PrecariousWork;