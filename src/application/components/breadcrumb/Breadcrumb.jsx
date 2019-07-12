import React from 'react';
import { NavLink } from "react-router-dom";

import './Breadcrumb.css';

class Breadcrumb extends React.Component {
    constructor() {
        super();
        this.state = {
          linkPath: '',
          linkText: ''
        }
    }
    componentDidMount() {
        if(this.props.fromPage === 'design') {
            this.setState({
                linkPath: '/design',
                linkText: 'Design'
            });   
        }

        if(this.props.fromPage === 'resourceExtraction') {
            this.setState({
                linkPath: '/resource-extraction',
                linkText: 'Resource extraction'
            });   
        }

        if(this.props.fromPage === 'manufacturing') {
            this.setState({
                linkPath: '/manufacturing',
                linkText: 'Manufacturing'
            });   
        }

        if(this.props.fromPage === 'transport') {
            this.setState({
                linkPath: '/transport',
                linkText: 'Transport'
            });   
        }

        if(this.props.fromPage === 'use') {
            this.setState({
                linkPath: '/use',
                linkText: 'Use'
            });   
        }

        if(this.props.fromPage === 'endOfLife') {
            this.setState({
                linkPath: '/end-of-life',
                linkText: 'End of life'
            });   
        }
    }

	render() {
        return (
            <div>
                <div className="breadcrumb">
                    <NavLink to="/">
                        <div className="prevPage">Home</div>
                    </NavLink>
                    <div className="breadcrumbSpacing">
                        {" "}
                        <span className="breadcrumbArrow">&#8594;</span>
                    </div>
                    <NavLink to={this.state.linkPath}>
                        <div className="activePage">{this.state.linkText}</div>
                    </NavLink>
                </div>
            </div>
        );
	}
}
export default Breadcrumb;