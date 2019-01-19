import { fromJS } from 'immutable';  // 不可改变state  immutable 对象

import * as constants from './constants';

import recommend1 from '../../../statics/recommend1.png';
import recommend2 from '../../../statics/recommend2.png'
import recommend3 from '../../../statics/recommend3.png'
import recommend4 from '../../../statics/recommend4.png'
import recommend5 from '../../../statics/recommend5.png'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [{
    id:1,
    imgUrl: recommend1
  },{
    id:2,
    imgUrl: recommend2
  },{
    id:3,
    imgUrl: recommend3
  },{
    id:4,
    imgUrl: recommend4
  },{
    id:5,
    imgUrl: recommend5
  }],

  page_no: 1,
  showScroll: false,

});



export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_HOME_DATA:
      // state.set('topicList', fromJS(action.topicList)).set...
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList)
      })
    case constants.ADD_HOME_LIST:
      return state.merge({
        articleList: state.get('articleList').concat(fromJS(action.list)),
        page_no: action.nextPage
      })
    case constants.TOGGLE_SCROLL_TOP:
      return state.set('showScroll', action.show)
    default:
      return state;
  }
}