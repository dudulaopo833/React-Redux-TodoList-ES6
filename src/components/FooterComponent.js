import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilterLinkContainer from '../containers/FilterLinkContainer';
import { visibilityFilters } from '../actions';

class FooterComponent extends Component{
	render(){
		return (
			<p>
				Show:
				{' '}
				<FilterLinkContainer filter={ visibilityFilters.SHOW_ALL } >
					All
				</FilterLinkContainer>
				{', '}
				<FilterLinkContainer filter={ visibilityFilters.SHOW_ACTIVE } >
					Active
				</FilterLinkContainer>
				{', '}
				<FilterLinkContainer filter={ visibilityFilters.SHOW_COMPLETED } >
					Completed
				</FilterLinkContainer>
			</p>
		);
	}
};

export default FooterComponent;