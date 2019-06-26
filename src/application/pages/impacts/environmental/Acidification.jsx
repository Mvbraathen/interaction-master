import React from 'react';

class Acidification extends React.Component {
	render() {
        return (
            <div>
            	<div className="image-container">
            		<img alt="ocean" width="100%" src={require('./images/Acidification.jpg')} />
                    <div className="image-credit"> Photo by <a href="https://unsplash.com/@matthardy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Matt Hardy</a></div>
            	</div>
                <div className="info-positioning">
                    Decrease of the ocean’s pH-level as a result of uptake of CO2. Acidification of water bodies is the result of mining and processing of, for example, gold, fossil fuels, and aluminium. Acidification threatens aquatic life (Ecotoxicity) and drinking water (Drinking water pollution)
                </div>
            </div>
        );
	}
}

export default Acidification;