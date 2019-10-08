import React, { Component } from 'react';
import MiniLogo from '../../components/MiniLogo';
import Form from 'react-bootstrap/Form';
import Icon from '../../assets/SearchIcon.png';
import {NotFoundMessage, DivMessage, DivTopBar, SearchInput, SearchButton, SearchIcon} from './styles';

export default class NotFound extends Component {
  render() {
    return (
    <div>
        <DivTopBar className="col-12 mx-auto row justify-content-center">
                <MiniLogo />
                <Form onSubmit={this.props.handleSubmit} className="mx-auto row justify-content-center">
                    <SearchInput name="user" onChange={this.props.handleChange} className="my-2 my-md-0"></SearchInput>
                        <SearchButton type="submit">
                            <SearchIcon src={Icon} alt={"Icon"} />
                        </SearchButton>
                </Form>
            </DivTopBar>
        <DivMessage>
          <NotFoundMessage className="mx-auto">User not found :(</NotFoundMessage>
        </DivMessage>
    </div>
    );
  }
}
