import React, { Component } from 'react';
import styled from 'styled-components';

export const Text = styled.p`
  width: 415px;
  height: 81px;
  font-family: Monaco;
  font-size: 60px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
`
export const SpanSearch = styled.span`
    font-family: Raleway;
  font-weight: 200;
  font-style: italic;
`


export default class Logo extends Component {
    render() {
        return <Text className="mx-auto"> Github<SpanSearch> Search</SpanSearch>
        </Text>;
    }
}
