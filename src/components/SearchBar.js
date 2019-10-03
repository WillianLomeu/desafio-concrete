import React, { Component } from 'react';
import styled from 'styled-components';
import Icon from '../assets/SearchIcon.png';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
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
    auth: true,
    linktrue: "",
};
handleChange = event => {
    this.setState({ name: event.target.value });
}
handleSubmit = event => {
    event.preventDefault();
    this.searchUser();
}

searchUser = async () => {

    const username = this.state.name;

    try {
        const { data: login } = await axios.get(`https://api.github.com/users/${username}`);
        console.log(this.state.name)
        console.log(login)
        this.setState({ linktrue: "/result" })
        this.PrivateRoute({pathname: '/result'}, )
    }
    catch (error) {
        this.setState({ linktrue: "/notfound" })
    }
}
  render() {
    return (
      <Form onSubmit={this.props.handleSubmit} className="mx-auto row justify-content-center">
        <SearchInput name="user" onChange={this.props.handleChange} className="my-2 my-md-0"></SearchInput>
        <SearchButton type="submit">
          <Link to='/result'>
            <SearchIcon src={Icon} alt={"Icon"} />
          </Link>
        </SearchButton>
      </Form>

    );
  }
}
