import React from 'react';
import { NavLink } from "react-router-dom";

class DesignPhase extends React.Component {
	render() {
        return (
            <p style={{paddingBottom: '20px'}}>
                <h2
                    style={{paddingBottom: '20px', paddingTop: '0px'}}
                    className="h2-default-style"> 
                    Where all decisions are made
                </h2>
                Despite the importance of the design phase for the overall sustainability of mobile
                phones, the literature review found no reports of environmental or social impacts
                particular to the design phase of mobile phones. This is to be expected, as the effects
                of decisions in the design phase become visible in other lifecycle phases. For
                example, the risk of exploding batteries in the
                {' '} 
                <NavLink className="inline-link-style" title="link to use page" to="/use">
                    Use
                </NavLink>
                {' '}
                phase and the adverse effects of non-removable batteries in the 
                {' '} 
                <NavLink className="inline-link-style" title="link to end of life page" to="/end-of-life">
                    End of Life
                </NavLink>
                {' '}
                phase.
            </p>
        );
	}
}

export default DesignPhase;