import { connect } from 'react-redux';
import { toggleTodoAction, visibilityFilters } from '../actions';
import TodoListComponent from '../components/TodoListComponent';

const getVisibleTodos = (todos, filter) => {
	switch(filter) {
		case visibilityFilters.SHOW_ALL:
			return todos;
		case visibilityFilters.SHOW_COMPLETED:
			return todos.filter(t => t.completed);
		case visibilityFilters.SHOW_ACTIVE:
			return todos.filter(t => !t.completed);
		default:
			return todos;
	}
};

const mapStateToProps = (state) => {
 return {
 	todos: getVisibleTodos(state.todos, state.visibleFilter)
 }
};

const mapDispatchToProps = (dispatch) => {
	return {
		onTodoClick: (id) => {
			dispatch(toggleTodoAction(id));
		}
	}
};

const VisibleTodoListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoListComponent);

export default VisibleTodoListContainer;