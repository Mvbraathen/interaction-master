import React from 'react';

class FoodInsecurity extends React.Component {
	render() {
        return (
            <div>
                <div className="image-container">
                    <img alt="dry crop" width="100%" src={require('./images/FoodInsecurity.jpg')} />
                    <div className="image-credit"> Photo by <a href="https://unsplash.com/@henmankk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Keagan Henman</a></div>
                </div>
                <div className="info-positioning">
                    Food, as a social dimension, refers to the percentage of the population 
                    that is undernourished. In our study, this social dimension refers the 
                    pollution of the food chain with hazardous materials, resulting in 
                    contaminated food for human consumption. Food chain pollution undermines 
                    food security and results in reduced health. Food chain pollution is 
                    found in mining areas, where grazing lands and crops are contaminated 
                    with toxic elements released into air and in areas where e-waste is 
                    disassembled.
                </div>
            </div>
        );
	}
}

export default FoodInsecurity;