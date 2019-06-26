import React from 'react';

class Discrimination extends React.Component {
	render() {
        return (
            <div>
                <div className="image-container">
                    <img alt="people demonstrating" width="100%" src={require('./images/Discrimination.jpg')} />
                    <div className="image-credit"> Photo by <a href="https://unsplash.com/@historyhd?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> History in HD</a></div>
                </div>
                <div className="info-positioning">
                    Social equity is a general concept, which applies notions of justice and fairness in social policy. Migrant workers and their families are often discriminated against.
                </div>
            </div>
        );
	}
}

export default Discrimination;