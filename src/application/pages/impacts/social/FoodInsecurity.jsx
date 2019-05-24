import React from 'react';

class FoodInsecurity extends React.Component {
    constructor() {
        super();
        this.state = {
            foodInsecurity: true
        }
    }
    render() {
        if(this.state.foodInsecurity) {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ foodInsecurity: false })}> 
                    <div className="info-box-content"> Food Insecurity </div>
                </div>
            )
        } else {
            return (
                <div className="environmental-info-element" onClick={() => this.setState({ foodInsecurity: true })}> 
                    <div className="info-box-content"> Lorem impsum lorem impsum lorem impsum </div>
                </div>
            )
        }
    }
}

export default FoodInsecurity;