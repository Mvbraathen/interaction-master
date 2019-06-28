import React from 'react';

class MobileHeader extends React.Component {
	render() {
        return (
            <div>
                <div className="mobile-header"> 
                    {this.props.pageHeader} 
                </div>
                <a href="http://smart.uio.no">
                    <div 
                        style={{
                            position: 'fixed', 
                            top: '0', 
                            right: '0', 
                            marginTop: '10px', 
                            marginRight: '20px', 
                            zIndex: '99', 
                            backgroundColor: '#1A6667', 
                            width: '40px', 
                            height: '40px', 
                            fontSize: '1.5em',
                            fontFamily: 'Avenir Next', 
                            lineHeight:'40px', 
                            textAlign: 'center', 
                            color: 'white'
                        }}
                    > S </div>
                </a>
            </div>
        );
	}
}
export default MobileHeader;