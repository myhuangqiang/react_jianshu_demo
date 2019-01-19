import styled from 'styled-components';

import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  max-width: 1440px;
  min-width: 768px;
  height: 58px;
  margin: 0 auto;
  position: relative;
`;

export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 58px;
  background: url(${logoPic});
  background-size: contain;
`;


// @media (max-width: 1380px) {
//   width: 774px;
// }
export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 56px;
  font-size: 16px;
  padding: 0 15px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 30px 0 20px;
  border: none;
  outline: none;
  border-radius: 20px;
  background: #eee;
  margin-top: 10px;
  font-size: 14px;
  margin-left: 20px;
  color: #666;
  &::placeholder {
    color: #999;
  }

  &.focused {
    width: 240px;
  }

  &.slide-enter {
    width: 160px;
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 20px;
  top: 60px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  background: #fff;
`;

export const SearchInfoTitle = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.span`
  font-size: 12px;
  float: right;
  cursor: pointer;
  .spin {
    display: inline-block;
    font-size: 14px;
    vertical-align: middle;
    margin-right: 6px;
    transition: all .2s ease-in;
    transform: rotate(0deg);
    transform-origin: center center;
  }
`;

export const SearchInfoList = styled.div`
  overflow: hidden;
`;

export const SearchInfoItme = styled.a`
  line-height: 20px;
  padding 0 5px;
  margin-bottom: 15px;
  margin-right: 10px;
  float: left;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 4px;
  display: block;
`;


export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  line-height: 36px;
  border-radius: 20px;
  border: 1px solid #ec6149;
  margin-right: 20px;
  margin-top: 10px;
  padding: 0 20px;
  cursor: pointer;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`;