import React, { PureComponent} from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import { actionCreators } from './store';

import {
  LoginWrapper,
  LoginBox,
  Input,
  Button,
} from './style';

class Login extends PureComponent {
  render() {
    const {loginStatus} = this.props;
      if (!loginStatus) {
        return (
          <LoginWrapper>
            <LoginBox>
              <Input id="userName" placeholder="账号" innerRef={(input) => {this.account = input}}></Input>
              <Input id="psw" placeholder="密码" type="password" innerRef={(input) => {this.password = input}}></Input>
              <Button onClick={() => this.props.login(this.account,this.password)}>登录</Button>
            </LoginBox>
          </LoginWrapper>
        )
      } else {
        return <Redirect to="/"></Redirect>
      }
  }

 
}

const mapState = (state) => {
  return {
    loginStatus: state.getIn(['login', 'login'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    login(accountEl,passwordEl) {
      dispatch(actionCreators.login(accountEl.value,passwordEl.value))
    },
  }
}

export default connect(mapState,mapDispatch)(Login);