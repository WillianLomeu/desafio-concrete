import React, { Component } from 'react';
import styled from 'styled-components';

export const Text = styled.p`
    width: 280px;
  height: 50px;
  font-family: Monaco;
  font-size: 40px;
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


export default class MiniLogo extends Component {
    render() {
        return <Text> Github<SpanSearch> Search</SpanSearch>
        </Text>;
    }
}