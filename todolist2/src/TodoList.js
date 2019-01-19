import React, { Component } from 'react';
// import store from './store';

import {connect} from 'react-redux';

class TodoList extends Component {
  
  // constructor(props) {
  //   super(props);
  // }


  render() {
    return (
      <div>
        <div>
          <input value={this.props.inputValue} onChange={this.props.handleChange} type="text"/>
          <button onClick={this.handleClick.bind(this)}>提交</button>
        </div>
        <ul>
          <li>dell</li>
        </ul>
      </div>
    )
  }

  handleClick() {

  }

}

// 将store中的数据映射到该组件的props 所以用this.props 访问数据
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue
  }
}

// 如果想对store的数据做修改 store.dispatch, props
const mapDispatchToProps = (dispatch) => {
  return {
    handleChange(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    }
  }
}

// 用react-redux 让store跟TodoList组件做链接 获取store
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);