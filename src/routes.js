import React, { Component } from 'react';
import { Collapse } from 'reactstrap';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Result from './Pages/Result';
import axios from 'axios';

export default class Rotas extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            homeOpen: true,
            resultOpen: false,
            NotFoundOpen: false,
            avatar: '',
            user: '',
            nome: '',
            organization: '',
            location: '',
            repositorys: '',
            followers: '',
            stars: '',
            repo: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.searchUser = this.searchUser.bind(this);
    }

    handleChange = event => {
        this.setState({ name: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.searchUser();
        this.searchRepo();
    }

    searchUser = async () => {

        const username = this.state.name;

        try {
            const { data: login } = await axios.get(`https://api.github.com/users/${username}`);
            this.setState({ homeOpen: false, resultOpen: true, NotFoundOpen: false })
            this.setState({ avatar: login['avatar_url'] })
            this.setState({ user: login['login'] })
            this.setState({ nome: login['name'] })
            this.setState({ organization: login['company'] })
            this.setState({ location: login['location'] })
            this.setState({ repositorys: login['public_repos'] })
            this.setState({ followers: login['followers'] })
            this.setState({ stars: login['stargazers_count'] })
        }
        catch (error) {
            this.setState({ NotFoundOpen: true, resultOpen: false, homeOpen: false })
        }
    }

    searchRepo = async () => {

        const username = this.state.name;

        try {
            const { data: repos } = await axios.get(`https://api.github.com/users/${username}/repos`);
            console.log(this.state.name)
            console.log(repos)
            this.setState({ repo: repos })
        }
        catch (error) {
        }
    }

    render() {
        return (
            <div>
                <Collapse isOpen={this.state.homeOpen}>
                    <Home
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange} />
                </Collapse>
                <Collapse isOpen={this.state.NotFoundOpen}>
                    <NotFound
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange} />
                </Collapse>
                <Collapse isOpen={this.state.resultOpen}>
                    <Result
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                        name={this.state.name}
                        avatar={this.state.avatar}
                        user={this.state.user}
                        nome={this.state.nome}
                        organization={this.state.organization}
                        location={this.state.location}
                        repositorys={this.state.repositorys}
                        followers={this.state.followers}
                        stars={this.state.stars}
                        repo={this.state.repo}
                    />
                </Collapse>

            </div>
        );
    }
}