import React, { Component } from 'react';
import {NotFoundMessage, DivMessage} from './styles';
import TopBar from '../../components/TopBar';

export default class NotFound extends Component {
  render() {
    return (
    <div>
        <TopBar className="col-12"/>
        <DivMessage>
          <NotFoundMessage className="mx-auto">User not found :(</NotFoundMessage>
        </DivMessage>
    </div>
    );
  }
}
