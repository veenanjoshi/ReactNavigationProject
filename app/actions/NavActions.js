import { RouteActionTypes } from '../constants';

function push (route) {
  return {
    type: RouteActionTypes.PUSH_ROUTE,
    route,
  };
}

function pop () {
  return {
    type: RouteActionTypes.POP_ROUTE,
  };
}

export default {
  push,
  pop,
};
