import { connect } from 'react-redux';
import NavigationRoot from '../components/NavRoot';
import { NavActions } from '../actions';

function mapStateToProps (state) {
  return {
    navigation: state.NavReducer,
  };
}

export default connect(
  mapStateToProps,
  {
    pushRoute: (route) => NavActions.push(route),
    popRoute: () => NavActions.pop(),
  }
)(NavigationRoot);
