import { NavigationExperimental } from 'react-native';
import { RouteConstants, RouteActionTypes } from '../constants';

const
  {
    StateUtils: NavigationStateUtils,
  } = NavigationExperimental,

  {
    RouteKeys,
    RouteMap,
  } = RouteConstants,

  {
    PUSH_ROUTE,
    POP_ROUTE,
  } = RouteActionTypes,

  initialState = {
    index: 0,
    key: 'root',
    routes: [{
      key : RouteKeys.HOME,
      title : RouteMap[RouteKeys.HOME].title,
    }],
  };

function navigationState (state = initialState, action) {
  switch (action.type) {
    case PUSH_ROUTE:
      if (state.routes[state.index].key === (action.route && action.route.key)){
        return state;
      }
      return NavigationStateUtils.push(state, action.route);

    case POP_ROUTE:
      if (state.index === 0 || state.routes.length === 1){
        return state;
      }
      return NavigationStateUtils.pop(state);

    default:
      return state;
  }
}

export default navigationState;
