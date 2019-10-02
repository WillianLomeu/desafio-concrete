import React, { Component } from 'react';
import styled from 'styled-components';
import Icon from '../assets/SearchIcon.png';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

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


export default class SearchBar extends Component {
  state = {
    name: '',
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.searchUser();

  }
  searchUser = async () => {

    const nick = this.state.name;

    try {
        const { data: login } = await axios.get(`https://api.github.com/users/${nick}`);
        console.log(login)
    }
    catch (error) { }

}
  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="mx-auto row justify-content-center">
        <SearchInput name="user" onChange={this.handleChange} className="my-2 my-md-0"></SearchInput>
        <SearchButton type="submit">
          <SearchIcon src={Icon} alt={"Icon"} />
        </SearchButton>
      </Form>
    );
  }
}
