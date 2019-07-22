import React from 'react';
import './MobileHeader.css';

class MobileHeader extends React.Component {
	render() {
        return (
            <div>
                <div className="mobile-header"> 
                    {this.props.pageHeader} 
                </div>
                <a 
                    tabIndex="0"
                    className="mobile-bookmark" 
                    title="link to SMART's website" 
                    href="http://smart.uio.no"> 
                    S 
                </a>
            </div>
        );
	}
}
export default MobileHeader;
