import React, { Component } from 'react';
import styled from 'styled-components';
import MiniLogo from './MiniLogo';
import Icon from '../assets/SearchIcon.png';
import Form from 'react-bootstrap/Form';

export const DivTopBar = styled.div`
    height: 90px;
    margin-top: 35px;
    margin-left: 25px;
`
export const SearchInput = styled.input`
  width: 650px;
  height: 50px;
  background-color: #ffffff;
  font-family: Raleway;
  font-weight: 300;
  padding-left:17px;
`
export const SearchButton = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 2px;
  background-color: #ac53f2;
`
export const SearchIcon = styled.img`
  width: 30px;
  height: 30.1px;
  box-shadow: 0 0 4px NaNpx var(--black-40);
  margin-top:10px;
  margin-left:35px;
  margin-right: 35px;
  `

export default class TopBar extends Component {
    render() {
        return (
            <DivTopBar className="col-12 mx-auto row justify-content-center">
                <MiniLogo />
                <Form onSubmit={this.props.handleSubmit} className="mx-auto row justify-content-center">
                    <SearchInput name="user" onChange={this.props.handleChange} className="my-2 my-md-0"></SearchInput>
                        <SearchButton type="submit">
                            <SearchIcon src={Icon} alt={"Icon"} />
                        </SearchButton>
                </Form>
            </DivTopBar>
        );

    }
}
