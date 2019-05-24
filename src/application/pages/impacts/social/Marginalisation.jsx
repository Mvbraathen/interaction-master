import React from 'react';

class Marginalisation extends React.Component {
    constructor() {
        super();
        this.state = {
            marginalisation: true
        }
    }
    render() {
        if(this.state.marginalisation) {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ marginalisation: false })}> 
                    <div className="info-box-content"> Marginalisation / Forced Relocation </div>
                </div>
            )
        } else {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ marginalisation: true })}> 
                    <div className="info-box-content"> Lorem impsum lorem impsum lorem impsum </div>
                </div>
            )
        }
    }
}

export default Marginalisation;