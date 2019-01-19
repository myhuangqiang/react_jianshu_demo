import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import {
  WriterWrapper,
} from '../style';

class Writer extends PureComponent {
  render() {
    return (
      <WriterWrapper>Writer</WriterWrapper>
    )
  }
}

const mapState = () => ({

})

export default connect(mapState, null)(Writer);