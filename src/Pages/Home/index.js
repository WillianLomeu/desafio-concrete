import React, { Component } from 'react';
import { Text, SpanSearch, Container, Search, SearchInput, SearchButton, SearchIcon } from './styles';
import Icon from '../../assets/SearchIcon.png';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Search>
                    <div className="col-12">
                        <Text>
                            Github <SpanSearch>Search</SpanSearch>
                        </Text>
                    </div>
                    <div className="col-12 mx-auto row justify-content-center">
                        <SearchInput className="my-2 my-md-0"></SearchInput>
                        <SearchButton>
                                <SearchIcon src={Icon} alt={"Icon"} />
                        </SearchButton>
                    </div>
                </Search>
            </Container>
        );
    }
}