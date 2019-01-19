import axios from 'axios';

import * as constants from './constants';

// import { fromJS } from 'immutable';

const changeHomeData = (result) => {
  return {
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList 
  }
}

const addHomeList = (list, nextPage) => {
  return {
    type: constants.ADD_HOME_LIST,
    list,
    nextPage,
  }
}

export const getHomeInfos = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then(res => {
        const result = res.data.data;
        const action = changeHomeData(result)
        dispatch(action);
      })
  }
}

export const getMoreList = (pageNum) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page_no='+ pageNum).then(res => {
        const result = res.data.data;
        dispatch(addHomeList(result, pageNum + 1));
      })
  }
}

export const toggleTopShow = (show) => {
  return {
    type: constants.TOGGLE_SCROLL_TOP,
    show
  }
}