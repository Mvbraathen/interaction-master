import React from 'react';
import './MobileHeader.css';

class MobileHeader extends React.Component {
	render() {
        return (
            <div>
                <div className="mobile-header"> 
                    {this.props.pageHeader} 
                </div>
                <p>
                    <a 
                        tabIndex="0"
                        className="mobile-bookmark" 
                        title="link to SMART's website" 
                        href="http://smart.uio.no"> 
                        S 
                    </a>
                </p>
            </div>
        );
	}
}
export default MobileHeader;
