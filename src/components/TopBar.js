import React, { Component } from 'react';
import styled from 'styled-components';
import MiniLogo from './MiniLogo';
import SearchBar from './SearchBar';

export const DivTopBar = styled.div`
    height: 90px;
    margin-top: 35px;
    margin-left: 25px;
`

export default class TopBar extends Component {
    render() {
        return (
            <DivTopBar className="col-12 mx-auto row justify-content-center">
                <MiniLogo />
                <SearchBar />
            </DivTopBar>
        );

    }
}
