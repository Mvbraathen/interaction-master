import React from 'react';

class Biodiversity extends React.Component {
    constructor() {
        super();
        this.state = {
            biodiversity: true
        }
    }
	render() {
        if(this.state.biodiversity) {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ biodiversity: false })}> 
                    <div className="info-box-content"> Biodiversity loss </div>
                </div>
            )
        } else {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ biodiversity: true })}> 
                    <div className="info-box-content"> Lorem impsum lorem impsum lorem impsum </div>
                </div>
            )
        }
	}
}

export default Biodiversity;