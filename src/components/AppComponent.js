import React, { Component } from 'react';
import AddTodoContainer from '../containers/AddTodoContainer';
import VisibleTodoListContainer from '../containers/VisibleTodoListContainer';

class AppComponent extends Component{
	render(){
		return(
			<div>
				<AddTodoContainer/>
				<VisibleTodoListContainer/>
			</div>
		);
	}
}

export default AppComponent;