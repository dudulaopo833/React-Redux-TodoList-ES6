import { connect } from 'react-redux';
import { setFilterAction } from '../actions';
import OneLinkComponent from '../components/OneLinkComponent';

const mapStateToProps = (state, ownProps) => {
	return {
		active: ownProps.filter === state.visibleFilter
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch(setFilterAction(ownProps.filter))
		}
	};
};

const FilterLinkContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(OneLinkComponent);

export default FilterLinkContainer;