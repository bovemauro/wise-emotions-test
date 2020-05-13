import SearchPage from './SearchPage.jsx';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { getAnimalsRequest } from './ducks/actions';
import { pathOr } from 'ramda';

const mapStateToProps = (state) => {
  return {
    state,
    animals: pathOr([], ['searchPage', 'animals'], state),
    pagination: pathOr({}, ['searchPage', 'pagination'], state),
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getAnimalsRequest,
    },
    dispatch
  );

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  SearchPage
);
