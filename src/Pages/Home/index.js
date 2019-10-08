import React, { Component } from 'react';
import { Container, Search, SearchInput, SearchButton, SearchIcon } from './styles';
import Logo from '../../components/Logo';
import Form from 'react-bootstrap/Form';
import Icon from '../../assets/SearchIcon.png';

export default class Home extends Component {

    render() {
        return (
            <Container>
                <Search>
                    <div className="col-12">
                        <Logo />
                    </div>
                    <Form onSubmit={this.props.handleSubmit} className="mx-auto row justify-content-center">
                        <SearchInput name="user" onChange={this.props.handleChange} className="my-2 my-md-0"></SearchInput>
                        <SearchButton type="submit">
                                <SearchIcon src={Icon} alt={"Icon"} />
                        </SearchButton>
                    </Form>
                </Search>
            </Container>
        );
    }
}