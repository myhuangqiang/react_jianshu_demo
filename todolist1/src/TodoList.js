import React, { Component } from 'react';

// import axios from 'axios';

import store from './store';
// import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionTypes';
import { getInoutChangeAction,getAddItemAction,deleteItemAction, initListAction, getTodoList, getInitList } from './store/actionCreators';

import TodoListUI from './TodoListUI';


// 容器组件， 负责逻辑 （聪明组件）
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    // 订阅store的改变
    store.subscribe(this.handleStoreChange)

  }
  render() {
    return (
      <TodoListUI 
        inputValue={this.state.inputValue} 
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }

  componentDidMount() {
    // axios.get('/list.json').then(res => {
    //   const data = res.data;
    //   const action = initListAction(data);
    //   store.dispatch(action)
    //   console.log(action)
    // })
    
    // 使用redux-thunk 中间件请求,在action中
    // const action = getTodoList(); // 此时返回一个函数
    // store.dispatch(action)

    // 使用redux-saga 
    const action = getInitList();
    store.dispatch(action);
    console.log(action)
  }

  handleInputChange(e) {
    // const action = {
    //   type: CHANGE_INPUT_VALUE,
    //   value: e.target.value
    // };
    const action = getInoutChangeAction(e.target.value)
    store.dispatch(action);
  }

  handleStoreChange() {
    console.log('store change')
    this.setState(store.getState())
  }

  handleBtnClick() {
    // const action = {
    //   type: ADD_TODO_ITEM,
    // };
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handleItemDelete(index) {
    // const action = {
    //   type: DELETE_TODO_ITEM,
    //   index
    // };
    const action = deleteItemAction(index);
    store.dispatch(action);
  }

}


export default TodoList;