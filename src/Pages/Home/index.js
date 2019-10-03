import React, { Component } from 'react';
import { Container, Search } from './styles';
import Logo from '../../components/Logo';
import SearchBar from '../../components/SearchBar';

export default class Home extends Component {

    render() {
        return (
            <Container>
                <Search>
                    <div className="col-12">
                        <Logo />
                    </div>
                    <SearchBar
                    />
                </Search>
            </Container>
        );
    }
}