import React, { Component } from 'react';
import AddTodoContainer from '../containers/AddTodoContainer';
import VisibleTodoListContainer from '../containers/VisibleTodoListContainer';
import FooterComponent from '../components/FooterComponent';

class AppComponent extends Component{
	render(){
		return(
			<div>
				<AddTodoContainer />
				<VisibleTodoListContainer test={'almaTestProps'}>
					almaTestChildren
				</VisibleTodoListContainer>
				<FooterComponent />
			</div>
		);
	}
}

export default AppComponent;