import React from 'react';

class ViolentConflict extends React.Component {
	render() {
        return (
            <div>
                <div className="image-container">
                    <img alt="armed man" width="100%" src={require('./images/ViolentConflict.jpg')} />
                    <div className="image-credit"> Photo by <a href="https://unsplash.com/@specna_arms_4s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Specna Arms</a></div>
                </div>
                <div className="info-positioning">
                    An armed conflict is a violent contestation between two or more organisations (often political organisations such as governments, insurgents), and which results in a significant damage number of casualties over a defined time period (e.g. 25 deaths per year). Armed conflict has been associated with the production of minerals.
                </div>
            </div>
        );
	}
}

export default ViolentConflict;