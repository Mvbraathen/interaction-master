import React from 'react';

class ExcessiveWaterUse extends React.Component {
    render() {
        return (
            <div>
            	<div className="image-container">
                    <img width="100%" src={require('./images/ExcessiveWaterUse.jpg')} />
                    <div className="image-credit"> Photo by <a href="https://unsplash.com/@mparente?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Micaela Parente</a></div>
                </div>
                <div className="info-positioning">
                	Industrial water use resulting in environmental degradation and decreasing water availability for humans and wildlife. Excessive water use is found in mining and in the manufacturing of mobile phones.
            	</div>
            </div>
        );  
    }
}

export default ExcessiveWaterUse;