import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {actionCreators} from '../store';
import { Link } from 'react-router-dom';

import {
  ListItem,
  ListInfo,
  LoadMore,
} from '../style';

class List extends PureComponent {
  render() {
    const { list, getMoreList, pageNum } = this.props;
    return (
      <div>
        {
          list.map((item, index) => {
            return (
              <Link key={index} to={'/detail/' + item.get('id')}>
                {/*key={index} onClick={() => this.toDetail(item.get('id'))}*/}
                <ListItem>
                  <img className="pic" src={item.get('imgUrl')} alt=""/>
                  <ListInfo>
                    <h3>{item.get('title')}</h3>
                    <p>{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={() => getMoreList(pageNum)}>更多文章</LoadMore>
      </div>
    )
  }
  // toDetail(id) {
  //   // 通过 js 控制路由跳转 需要引入withRouter 然后在后面的页面通过this.props.location.state.id 获取参数
  //   this.props.history.push('/detail', {id: id})
  // }
}

const mapState = (state) => {
  return {
    list: state.getIn(['home', 'articleList']),
    pageNum: state.get('home').get('page_no'),
  }
}

const mapDispatch = (dispatch) => {
  return {
    getMoreList(pageNum) {
      dispatch(actionCreators.getMoreList(pageNum))
    },

  }
}

export default connect(mapState,mapDispatch)(withRouter(List));