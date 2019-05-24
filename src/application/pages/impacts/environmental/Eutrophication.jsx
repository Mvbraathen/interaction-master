import React from 'react';

class Eutrophication extends React.Component {
    constructor() {
        super();
        this.state = {
            eutrophication: true
        }
    }
	render() {
        if(this.state.eutrophication) {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ eutrophication: false })}> 
                    <div className="info-box-content"> Eutrophication </div>
                </div>
            )
        } else {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ eutrophication: true })}> 
                    <div className="info-box-content"> Lorem impsum lorem impsum lorem impsum </div>
                </div>
            )
        }
	}
}

export default Eutrophication;