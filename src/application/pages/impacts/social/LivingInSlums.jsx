import React from 'react';

class LivingInSlums extends React.Component {
	render() {
        return (
            <div>
                <div className="image-container">
                    <img width="100%" src={require('./images/LivingInSlums.jpg')} />
                    <div className="image-credit"> Photo by <a href="https://unsplash.com/@derickray?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Derick McKinney</a></div>
                </div>
                <div className="info-positioning">
                    Housing is about urban population living in slum housing in developing countries. Large slums have been found around informal electronic waste sites, which often lack proper sanitation, access to drinking water.
                </div>
            </div>
        );
	}
}

export default LivingInSlums;