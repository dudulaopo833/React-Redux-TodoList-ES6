import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OneTodoComponent extends Component{
	render(){
		const { onClick, completed, text, id } = this.props;
		return (
			<li 
				onClick={() => onClick(id)}
				style={{
					textDecoration: completed ? 'line-through' : 'none'
				}}
			>
			{text}
			</li>
		);

	}
}

OneTodoComponent.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired
}

export default OneTodoComponent;