import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OneLinkComponent extends Component{
	render(){
		const { active, children, onClick } = this.props;
		if(active) {
			return <span>{children}</span>
		}

		return (
			<a href='#'
				onClick={e => {
					e.preventDefault();
					onClick();
				}}
			>
			{children}
			</a>
		);
	}
};

OneLinkComponent.propTypes = {
	active: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired
}

export default OneLinkComponent;