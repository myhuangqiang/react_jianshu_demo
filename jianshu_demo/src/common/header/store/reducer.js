import * as constants from './constants';

import { fromJS } from 'immutable';  // 不可改变state  immutable 对象

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1,
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.SEARCH_FOUCS:
      return state.set('focused', true);
    case constants.SEARCH_BLUR:
      return state.set('focused', false); 
    case constants.CHANGE_LIST:
      // 如果set的数据过多可以使用merge,同时改变过个内容
      // return state.set('list', action.data).set('totalPage', action.totalPage);
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      });
    case constants.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case constants.CHAGE_PAGE:
      return state.set('page', action.page);
    default:
      return state;
  }
}