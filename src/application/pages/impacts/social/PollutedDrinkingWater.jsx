import React from 'react';

class PollutedDrinkingWater extends React.Component {
    constructor() {
        super();
        this.state = {
            pollutedDrinkingWater: true
        }
    }
    render() {
        if(this.state.pollutedDrinkingWater) {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ pollutedDrinkingWater: false })}> 
                    <div className="info-box-content"> Polluted Drinking Water </div>
                </div>
            )
        } else {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ pollutedDrinkingWater: true })}> 
                    <div className="info-box-content"> Lorem impsum lorem impsum lorem impsum </div>
                </div>
            )
        }
    }
}

export default PollutedDrinkingWater;