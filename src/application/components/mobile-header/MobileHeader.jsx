import React from 'react';
import './MobileHeader.css';

class MobileHeader extends React.Component {
	render() {
        return (
            <div>
                <div className="mobile-header"> 
                    {this.props.pageHeader} 
                </div>
                <a href="http://smart.uio.no">
                    <div className="mobile-bookmark"> 
                        S 
                    </div>
                </a>
            </div>
        );
	}
}
export default MobileHeader;