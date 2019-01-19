import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';

import { actionCreators } from './store';

import { actionCreators as loginActionCreators } from '../../pages/login/store';

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItme,
} from './style';

// const getListArea = (show) => {
//   if (show) {
//     return (
//       <SearchInfo>
//         <SearchInfoTitle>
//           热门搜索
//           <SearchInfoSwitch>
//             换一批
//           </SearchInfoSwitch>
//         </SearchInfoTitle>
//         <SearchInfoList>
//           <SearchInfoItme>教育</SearchInfoItme>
//           <SearchInfoItme>教育</SearchInfoItme>
//           <SearchInfoItme>教育</SearchInfoItme>
//           <SearchInfoItme>教育</SearchInfoItme>
//           <SearchInfoItme>教育</SearchInfoItme>
//           <SearchInfoItme>教育</SearchInfoItme>
//         </SearchInfoList>
//       </SearchInfo>
//     )
//   } else {
//     return null;
//   }
// }


// const Header = (props) => {
//   return (
//     <div style={{border: '1px solid #f0f0f0'}}>
//       <HeaderWrapper>
//         {/*可以在这写 href="/"， 也可以在style.js 中写*/}
//         <Logo />
//         <Nav>
//           <NavItem className="left active">首页</NavItem>
//           <NavItem className="left">下载App</NavItem>
//           <NavItem className="right">登录</NavItem>
//           <NavItem className="right">
//             <i className="iconfont">&#xe601;</i>
//           </NavItem>
//           <SearchWrapper>
//             <CSSTransition
//               in={props.focused}
//               timeout={200}
//               classNames="slide"
//             >
//               <NavSearch
//                 className={props.focused ? 'focused' : ''}
//                 onFocus={props.handleInputFocus}
//                 onBlur={props.handleInputBlur}
//               >
//               </NavSearch>
//               </CSSTransition>
//             <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe860;</i>
//             {getListArea(props.focused)}
//           </SearchWrapper>
//         </Nav>
//         <Addition>
//           <Button className="writting"><i className="iconfont">&#xe616;</i>写文章</Button>
//           <Button className="reg">注册</Button>
//         </Addition>
//       </HeaderWrapper>
//     </div>
//   )
// }

// 改变完之后变成了无状态组件，可以用上面的方式写，提升性能
class Header extends Component {
  render() {
    const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props
    return (
      <div style={{border: '1px solid #f0f0f0'}}>
        <HeaderWrapper>
          {/*可以在这写 href="/"， 也可以在style.js 中写*/}
          <Link to="/">
            <Logo />
          </Link>
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载App</NavItem>
            {
              login ? <NavItem className="right" onClick={logout}>退出</NavItem> : <Link to="/login"><NavItem className="right">登录</NavItem></Link>
            }
            <NavItem className="right">
              <i className="iconfont">&#xe601;</i>
            </NavItem>
            <SearchWrapper>
              <CSSTransition
                in={focused}
                timeout={200}
                classNames="slide"
              >
                <NavSearch
                  className={focused ? 'focused' : ''}
                  onFocus={() => handleInputFocus(list)}
                  onBlur={handleInputBlur}
                >
                </NavSearch>
              </CSSTransition>
              <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe860;</i>
              {this.getListArea(focused)}
            </SearchWrapper>
          </Nav>
          <Addition>
            <Link to="/write"><Button className="writting"><i className="iconfont">&#xe616;</i>写文章</Button></Link>
            <Button className="reg">注册</Button>
          </Addition>
        </HeaderWrapper>
      </div>
    )
  }

  getListArea() {
    const { focused, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    const newList = list.toJS();
    const pageList = [];
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (newList.length <= i) {

        } else {
          pageList.push(
            <SearchInfoItme key={newList[i]}>{newList[i]}</SearchInfoItme>
          )
        }
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => {return handleChangePage(page, totalPage, this.spinIcon)}}>
              <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe606;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            { pageList }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }
}

// react-redux 辅助 redux
const mapStateToProps = (state) => {
  return {
    // focused: state.header.focused
    // 利用immutable.js 后获取数据的写法
    // focused: state.header.get('focused')
    // 使用redux-immutable 后的写法，将state也变成了immutable对象
    // 也可以这样写 focused: state.getIn(['header', 'focused'])
    focused: state.get('header').get('focused'),

    list: state.get('header').get('list'),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),

    login: state.getIn(['login', 'login']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      if (list.size === 0) {
        dispatch(actionCreators.getList());
      }
      const action = actionCreators.searchFocus();
      dispatch(action);
    },
    handleInputBlur() {
      const action = actionCreators.searchBlur();
      dispatch(action);
    },

    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page, totalPage, spinIcon) {
      let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spinIcon.style.transform = 'rotate('+(originAngle + 360)+'deg)';
      if (page < totalPage) {
        dispatch(actionCreators.changPage(page+1))
      } else {
        dispatch(actionCreators.changPage(1))
      }
    },
    logout() {
      dispatch(loginActionCreators.logout())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);