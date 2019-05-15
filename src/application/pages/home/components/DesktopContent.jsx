import React from 'react';
import Desktop from "../../../menus/desktop/Desktop";

class DesktopContent extends React.Component {
	render() {
		return (
			<div id="home-page">
               <div className="split left-half">
                    <div class="place-menu-header">
                        <div className="desktop-header-txt">
                            <h1>
                                The Mobile Lifecycle
                            </h1>
                            <div className="desktop-purple-line"> {/* style from mobile */}
                                ____
                            </div> 
                        </div>
                    </div>
                    <Desktop />
                </div>

                <div className="split right-half">
                    <div>
                        INSERT Marius sin gode idé under her
                    </div>
                </div>
			</div>
		)
	}
}

export default DesktopContent;