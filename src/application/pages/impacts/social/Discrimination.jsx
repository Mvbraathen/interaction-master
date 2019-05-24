import React from 'react';

class Discrimination extends React.Component {
    constructor() {
        super();
        this.state = {
            discrimination: true
        }
    }
    render() {
        if(this.state.discrimination) {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ discrimination: false })}> 
                    <div className="info-box-content"> Discrimination </div>
                </div>
            )
        } else {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ discrimination: true })}> 
                    <div className="info-box-content"> Lorem impsum lorem impsum lorem impsum </div>
                </div>
            )
        }
    }
}

export default Discrimination;