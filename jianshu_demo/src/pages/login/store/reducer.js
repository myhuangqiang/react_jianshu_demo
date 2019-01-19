import { fromJS } from 'immutable';  // 不可改变state  immutable 对象

import * as constants from './constants';

const defaultState = fromJS({
  login: false,
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_LOGIN:
      return state.set('login', action.value)
    case constants.CHANGE_LOGOUT:
      return state.set('login', action.value)
    default:
      return state;
  }
}