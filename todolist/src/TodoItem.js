import React, { Component } from 'react';
import PropTypes from 'prop-types';  // 对父组件传递过来的值做校验，是什么类型， 父组件不能瞎传

class TodoItem extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
  render() {
  	console.log('child render')
  	// JSX -> (JS 对象/虚拟DOM) ->真实DOM
  	// React.createElement('div',{}, 'item')
  	const { content, test } = this.props
    return (
    	<div 
    		onClick={this.handleClick}>
    		{test} - {content}
    	</div>
    )
  }
	

  shouldComponentUpdate(nextProps, nextState) {
  	if (nextProps.content !== this.props.content) {
			return true;
  	} else {
  		return false;
  	}
  }

  // 第一个条件：当一个组件从父组件中接受参数，
  // 第二个条件：只要父组件的render函数被重新执行了，子组件的这个生命周期才会被执行
  // 解释第二个条件： 如果这个组件第一存在父组件中，不会执行，如果这个组件之前存在于父组件中，才会执行
  componentWillReceiveProps() {
		console.log('child componentWillReceiveProps')
	}
	
	// 组件即将被从页面中删除的时候会被执行
	componentWillUnmount() {
		console.log('componentWillUnmount')
	}

	// 子组件修改父组件中的数据 或者 与父组件通信 通过父组件传递过来的函数通信
  handleClick() {
  	// 等价于this.props.deleteItem
  	const { deleteItem, index } = this.props
  	deleteItem(index);
  }
}

// 类型检测
TodoItem.propTypes = {
	test: PropTypes.string.isRequired,   // isRequired 表示必须要传递,没有话可以不传递
	// content: PropTypes.string,
	content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // 表示可以是number类型，也可以是string类型
	// content: PropTypes.arrayOf(PropTypes.string, PropTypes.number),  // 表示可以是数组中可以是number 或string
	deleteItem: PropTypes.func,
	index: PropTypes.number
}

// 默认值 (如果父组件没有向子组件传值)
TodoItem.defaultProps = {
	test: 'hello world'
}

export default TodoItem;