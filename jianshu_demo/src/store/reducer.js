// import { combineReducers } from 'redux';  // 将小的reducer 整合起来

import { combineReducers } from 'redux-immutable';

import { headerReducer } from '../common/header/store';
import { homeReducer } from '../pages/home/store';
import { detailReducer } from '../pages/detail/store';
import { loginReducer } from '../pages/login/store'

// redux-immutable // 统一state 成immutable对象

const reducer =  combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer,
});

export default reducer;

