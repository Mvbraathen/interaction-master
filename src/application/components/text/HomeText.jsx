import React from 'react';

class HomeText extends React.Component {
	render() {

        let instructions;

        if(this.props.fromDevice === 'mobile') {
            instructions = (
                <p> In order to learn more about these impacts in the different lifecycle phases,
                interact with the menu in the top left corner, or select a lifecycle phase from the list below. </p>
            )
        } else {
            instructions = (
                <p> In order to learn more about these impacts in the different lifecycle phases,
                interact with the circular menu on the left. </p>
            )
        }

        return (
            <div>
                <h2
                    id="main-content"
                    className="h2-default-style"> 
                    Social and Environmental Impacts in the Mobile Phone Lifecycle 
                </h2>
                <p>
                    This website enables you to explore the impacts of the mobile phone lifecycle on
                    social and environmental sustainability.
                </p>
                <h3 
                    className="h3-default-style">
                    Social sustainability
                </h3> 
                <p>
                    is about the minimum standards of living conditions and human rights below which people
                    can be said to be living in deprivation. The twelve dimensions of the social
                    foundation are derived from internationally agreed minimum social standards,
                    as identified by the world’s governments in the Sustainable Development Goals
                    in 2015. The twelve social dimensions are food, health, education, income &amp;
                    work, water &amp; sanitation, energy, gender equality, social equity, housing, political
                    voice, peace &amp; justice, and networks.
                </p>
                <h3 
                    className="h3-default-style">
                    Environmental sustainability
                </h3> 
                <p>
                    refers here to the non-negotiable planetary
                    preconditions that humanity needs to respect in order to avoid the risk of
                    deleterious or even catastrophic environmental change. The nine boundaries are
                    climate change, novel entities, ozone depletion, aerosol loading, ocean
                    acidification, biochemical flows, freshwater use, land-system change, and
                    biosphere integrity.
                </p>
                {instructions}
            </div>
        );
	}
}

export default HomeText;