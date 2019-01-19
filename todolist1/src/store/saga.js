
import { takeEvery, put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';

import { initListAction } from './actionCreators';

import axios from 'axios';

function* getInitList() {
  // axios.get('/list.json').then(res => {
  //   const data = res.data;
  //   const action = initListAction(data);
  //   console.log(action);
  // })
  try {
    const res = yield axios.get('/list.json');
    const action = initListAction(res.data);
    yield put(action);
  }catch(e) {
    // 接口失败
    console.log('网络请求失败')
  }

}

// es6 generator 函数
// "USER_FETCH_REQUESTED"  action 的类型
function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;