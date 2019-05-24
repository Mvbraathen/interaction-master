import React from 'react';

class Acidification extends React.Component {
    constructor() {
        super();
        this.state = {
            acidification: true
        }
    }
	render() {
        if(this.state.acidification) {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ acidification: false })}> 
                    <div className="info-box-content"> Acidification </div>
                </div>
            )
        } else {
            return (
                <div className="active-environmental-info-element" onClick={() => this.setState({ acidification: true })}> 
                    <div className="active-info-box-content"> Lorem impsum lorem impsum lorem impsum </div>
                </div>
            )
        }
	}
}

export default Acidification;