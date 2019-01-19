import React, { Component, Fragment } from 'react';
import axios from 'axios'
import TodoItem from './TodoItem';
// import Test from './Test';
import './style.css';


class TodoList extends Component {
	
	constructor(props) {
		super(props);
		// 组件状态
		// props state,变化render会重新渲染
		this.state = {
			inputValue: '',
			list: []
		}

		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleListPush = this.handleListPush.bind(this)
		this.handleListDelect = this.handleListDelect.bind(this)
	}
	
	// 在组件即将被挂架到页面的时刻执行，只执行一次
	componentWillMount() {
		console.log('componentWillMount');
	}

  render () {
  	console.log('parent render')
    return (
    	<Fragment>
	      <div>
	      	{/*下面是一个input框*/}
	      	{
	      		// 这也是一种注释, label在react可以绑定input
	      	}
	      	<label htmlFor="insertArea">输入内容</label>
	      	<input 
	      		id="insertArea" 
	      		className="inputClass" 
	      		type="text" 
	      		onChange={this.handleInputChange} 
	      		value={this.state.inputValue} 

	      		ref={(input) => {this.input = input}}
	      	/>
	      	<button onClick={this.handleListPush}>提交</button>
	      </div>
	      <ul ref={(ul) => {this.ul = ul}}>
	      	{this.getTodoItem()}
	      </ul>
	      {/*<Test content={this.state.inputValue}/>*/}
    	</Fragment>
    )
  }
	
	// 组件被挂在到页面之后执行, 只执行一次  // 一般放ajax在这
  componentDidMount() {
  	console.log('componentDidMount')
  	axios.get('api/todolist')
  		.then((res) => {
  			this.setState(() => ({
  				list: [...res.data]
  			}))
  		})
  		.catch(() => {alert('error')})
  }

	// 组件被更新之前被执行
  shouldComponentUpdate() {
  	console.log('shouldComponentUpdate');
  	// 需要更新组件吗？ 默认返回true, 如果是false，就不需要更新，后面的生命周期函数都不会执行
  	return true;
  }
	
	// 组件被更新之前会自动执行，但是在shouldComponentUpdate之后执行，如果shouldComponentUpdate 返回false就不会执行
  componentWillUpdate() {
  	console.log('componentWillUpdate');
  }
	
	// 组件被更新之后会自动执行
	componentDidUpdate() {
		console.log('componentDidUpdate');
	}
	
	// 在props 改变时会执行，顶级组件不会执行，没有props
	componentWillReceiveProps() {
		console.log('componentWillReceiveProps')
	}


  getTodoItem() {
  	return this.state.list.map((item, index) => {
			return (
				<div key={index} >
				{/* 父组件给子组件传数据 */}
					<TodoItem 
						content={item} 
						index={index} 
						deleteItem={this.handleListDelect}
					/>
				</div>
				/*
				dangerouslySetInnerHTML 将标签中的转成正常文本 如：<h1>asd</h1>
				<li 
					key={index} 
					onClick={this.handleListDelect.bind(this, index)}
					dangerouslySetInnerHTML = {{__html: item}}
				>
				</li>
				*/
			)
		})
  }

  handleInputChange(e) {
  	// 新版写法
  	// const value = e.target.value
  	// 也可以用ref来选择input 节点
  	const value = this.input.value;
  	this.setState(() => ({
  			inputValue: value
  	}))
		// this.setState({
		// 	inputValue: e.target.value
		// })
  }

  handleListPush() {
  	// setState 是个异步函数 ,在setState 执行完之后才能去获取DOM节点,第二个参数是一个回调函数
  	this.setState((prevState) => ({
			list: [...prevState.list, prevState.inputValue],
			inputValue: ''
  	}), () => {
  		console.log(this.ul.querySelectorAll('div').length);
  	})

  	// const inputValue = this.state.inputValue
  	// this.setSt ate({
  	// 	list: [...this.state.list, inputValue],
  	// 	inputValue: ''
  	// })
  }

  handleListDelect(index) {
  	// const list = this.state.list 或则 this.state.list.splice(index, 1)  // 不能这样写 immutable  state 不允许我们去改变
  	// const list = [...this.state.list];
  	// list.splice(index, 1)
		// this.setState({
		// 	list: list
		// })
		this.setState((prevState) => {
			const list = [...prevState.list];
  		list.splice(index, 1)
			return {list}
		})

  }
}

export default TodoList;

