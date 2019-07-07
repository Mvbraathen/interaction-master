import React from 'react';
import './ScrollBackUp.css';

class ScrollBackUp extends React.Component {
	 constructor() {
        super();
        this.state = {
            pageScrolled: false
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

	componentDidMount() {
    	window.addEventListener('scroll', this.handleScroll);
  	}

  	handleScroll() {
  		if (document.scrollingElement.scrollTop >= 200) {
  			this.setState({
  				pageScrolled: true
  			})

  		}

  		if (document.scrollingElement.scrollTop < 200) {
  			this.setState({
  				pageScrolled: false
  			})

  		}
  		
  	}

    scrollUp() {
      	document.scrollingElement.scrollTop = 0; 
  	}

	render() {

		let scrollButton;
		if (this.state.pageScrolled === true) {
			scrollButton = (
				<div style={{margin: '0 auto'}}>
                <button
                	tabIndex="0"
                	aria-label = "Scroll back to top of page" 
                    className="scroll-container"
                    onClick={this.scrollUp}> 
                    <p className="scroll-arrow">
                        &uarr;
                    </p> 
                </button>
            </div>
			)
		} else {
			scrollButton = (
				<div> </div>
			)
		}
        return (
			<div>{scrollButton}</div>			
        )
    }
}
export default ScrollBackUp;