import React from 'react';

class Deforestation extends React.Component {
    render() {
        return (
            <div>
            	<div className="image-container">
                    <img alt="lumber" width="100%" src={require('./images/Deforestation.jpg')} />
                    <div className="image-credit"> Photo by <a href="https://unsplash.com/@alessiofurlan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Alessio Furlan</a></div>
                </div>
                <div className="info-positioning">
                	Removal of a forest or stand of trees, converting land-use to non-forest. This is especially the case in forested areas with mineral deposits (see also Land use change).
            	</div>
            </div>
        );  
    }
}

export default Deforestation;