import React from 'react';

class Acidification extends React.Component {
	render() {
        let info;

        if(this.props.tag === 'Acidification') {
            info = <div> acid </div> 
        } else {
            info = <div> not acid </div>
        }
        return (
            <div style={{color:'blue'}}> {info} </div>
        );
	}
}

export default Acidification;