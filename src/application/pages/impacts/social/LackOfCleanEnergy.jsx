import React from 'react';

class LackOfCleanEnergy extends React.Component {
	render() {
        return (
            <div>
                <div className="image-container">
                    <img width="100%" src={require('./images/LackOfCleanEnergy.jpg')} />
                    <div className="image-credit"> Photo by <a href="https://unsplash.com/@thomasq?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Thomas Q</a></div>
                </div>
                <div className="info-positioning">
                    Access to electricity is a critical issue in all aspects of sustainable development. 
                    Data is scarce but the World Bank has launched efforts to map access. The cleanliness 
                    of energy is covered by the climate gas emissions categories above.
                </div>
            </div>
        );
	}
}

export default LackOfCleanEnergy;