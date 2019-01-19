import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;

export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  float: left;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  line-height: 34px;
  height: 34px;
  font-size: 14px;
  color: #333;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  .topic-pic {
    width: 32px;
    height: 32px;
    margin-right: 10px;
    float: left;
  }
`;


export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  cursor: pointer;
  .pic {
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`;

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  padding-right: 30px;
  h3 {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  p {
    font-size: 14px;
    line-height: 24px;
    color: #999;
  }
`;

export const RecommendWrapper = styled.div`
  width: 100%;
  margin: 30px 0;
`;

export const RecommendItem = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 5px;
  border-radius: 4px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
  cursor: pointer;
`;

export const WriterWrapper = styled.div`
  width: 100%;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  height: 300px;
  line-height: 300px;
  text-align: center;
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  margin: 30px 0;
  cursor: pointer;
`;


export const BackTop = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #CCC;
  font-size: 12px;
  color: #666;
  cursor: pointer;
`;