import React from 'react';

class ParticulateMatter extends React.Component {
    constructor() {
        super();
        this.state = {
            particulateMatter: true
        }
    }
	render() {
        if(this.state.particulateMatter) {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ particulateMatter: false })}> 
                    <div className="info-box-content"> Particulate Matter </div>
                </div>
            )
        } else {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ particulateMatter: true })}> 
                    <div className="info-box-content"> Lorem impsum lorem impsum lorem impsum </div>
                </div>
            )
        }
	}
}

export default ParticulateMatter;