import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes'


const defaultState = {
  inputValue: '',
  list: []
}

// 只有store才能修改state
// reducer 可以接收state,但是绝不能修改state，如何修改的state会有副作用，就不是纯函数了
// reducer必须是纯函数，（如newState = new Date() 就不是纯函数）纯函数指的是，给定滚定的输入，就一定会有固定的输出，而且不会有任何的副作用
export default (state = defaultState, action) => {
  // state 上一次redux的数据
  // action 接收的数据
  console.log(state, action);
  if (action.type === CHANGE_INPUT_VALUE) {
    // state 深拷贝， 不直接修改state
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  // 数据请求过来的ajax
  if (action.type === INIT_LIST_ACTION) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data;
    return newState;
  }
  return state;
}