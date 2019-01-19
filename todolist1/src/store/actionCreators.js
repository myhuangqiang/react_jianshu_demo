
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION, GET_INIT_LIST } from './actionTypes';

import axios from 'axios';

export const getInoutChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value,
});

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
});

export const deleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index,
});

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
});


// 使用redux-thunk中间件可以返回一个函数, 之前返回的是一个对象
export const getTodoList = () => {
  return (dispatch) => {
    axios.get('/list.json').then(res => {
      const data = res.data;
      console.log(data);
      const action = initListAction(data);
      dispatch(action);
    })
  }
};

export const getInitList = () => ({
  type: GET_INIT_LIST
})