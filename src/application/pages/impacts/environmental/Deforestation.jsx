import React from 'react';

class Deforesation extends React.Component {
    constructor() {
        super();
        this.state = {
            deforestation: true
        }
    }
	render() {
        if(this.state.deforestation) {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ deforestation: false })}> 
                    <div className="info-box-content"> Deforesation </div>
                </div>
            )
        } else {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ deforestation: true })}> 
                    <div className="info-box-content"> Lorem impsum lorem impsum lorem impsum </div>
                </div>
            )
        }
	}
}

export default Deforesation;