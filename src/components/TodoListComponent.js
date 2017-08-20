import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OneTodoComponent from './OneTodoComponent';

class TodoListComponent extends Component {
	render(){
		const { todos, onTodoClick } = this.props;
		return (
			<ul>
				{todos.map( todo => {
					return (
						<OneTodoComponent 
							key={todo.id}
							{...todo}
							onClick={()=>onTodoClick(todo.id)}
						/>
					);
				})}
			</ul>
		);
	}
};

TodoListComponent.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({ //arrayOf
		id: PropTypes.number.isRequired,
		completed: PropTypes.bool.isRequired,
		text: PropTypes.string.isRequired
	}).isRequired).isRequired,
	onTodoClick: PropTypes.func.isRequired
};

export default TodoListComponent;