import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodoAction } from '../actions';

class AddTodoComponent extends Component {
	render(){
		let input;
		const { dispatch } = this.props; // Must need this, it is not the same as pure function style
		return (
			<form 
				onSubmit={e=>{
					e.preventDefault();
					if (!input.value.trim()){
						return;
					}
					dispatch(addTodoAction(input.value));
					input.value = '';
				}}
			>
				<input 
					ref={node => {input = node}}
				/>
				<button type='submit'>
					Add Todo
				</button>
			</form>
		);

	}
};

const AddTodoContainer = connect()(AddTodoComponent);
export default AddTodoContainer;