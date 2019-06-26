import React from 'react';

class Marginalisation extends React.Component {
	render() {
        return (
            <div>
                <div className="image-container">
                    <img alt="money" width="100%" src={require('./images/Marginalisation.jpg')} />
                    <div className="image-credit"> Photo by <a href="https://unsplash.com/@sharonmccutcheon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Sharon McCutcheon</a></div>
                </div>
                <div className="info-positioning">
                    Even in tight labour markets marginalisation may also affect wage 
                    disparities, for example for women versus men, or for migrant labourers.
                </div>
            </div>
        );
	}
}

export default Marginalisation;