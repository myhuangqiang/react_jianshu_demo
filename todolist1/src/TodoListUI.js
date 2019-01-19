import React from 'react';

import { Input } from 'antd';
import { Button } from 'antd';
import { List } from 'antd';
import 'antd/dist/antd.css'; 

const TodoListUI = (props) => {
  return (
    <div style={{padding: '30px'}}>
      <Input 
        value={props.inputValue} 
        placeholder="todo info" 
        style={{width: '300px', marginRight: '10px'}} 
        onChange={props.handleInputChange}
      />
      <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
      <List
        style={{marginTop: '20px', width: '300px'}}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (<List.Item onClick={() => {props.handleItemDelete(index)}}>{item}</List.Item>)}
      />
    </div>
  )
}



// ui 组件 只负责显示（傻瓜组件）
// class TodoListUI extends Component {
//   render () {
//     return (
//       <div style={{padding: '30px'}}>
//         <Input 
//           value={this.props.inputValue} 
//           placeholder="todo info" 
//           style={{width: '300px', marginRight: '10px'}} 
//           onChange={this.props.handleInputChange}
//         />
//         <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
//         <List
//           style={{marginTop: '20px', width: '300px'}}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (<List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>{item}</List.Item>)}
//         />
//       </div>
//     )
//   }

// }

export default TodoListUI;