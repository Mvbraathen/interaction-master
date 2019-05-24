import React from 'react';

class LackOfCleanHouseholdEnergy extends React.Component {
    constructor() {
        super();
        this.state = {
            lackOfCleanHouseholdEnergy: true
        }
    }
    render() {
        if(this.state.lackOfCleanHouseholdEnergy) {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ lackOfCleanHouseholdEnergy: false })}> 
                    <div className="info-box-content"> Lack Of Clean Household Energy </div>
                </div>
            )
        } else {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ lackOfCleanHouseholdEnergy: true })}> 
                    <div className="info-box-content"> Lorem impsum lorem impsum lorem impsum </div>
                </div>
            )
        }
    }
}

export default LackOfCleanHouseholdEnergy;