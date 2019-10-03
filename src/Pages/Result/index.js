import React, { Component } from 'react';
import TopBar from '../../components/TopBar';
import { SidBar, Image, NomeUsuario, Icons,BlocoRepo, Followers, Stars, User, Repository, RepoName, RepoDescription, Organization, Location, Repositorys } from './styles';
import axios from 'axios';
import followersicon from '../../assets/followersIcon.png';
import locationicon from '../../assets/location icon.png';
import organizationicon from '../../assets/organization icon.png';
import repositoryicon from '../../assets/repositorie icon.png';
import staricon from '../../assets/star icon.png';
import Home from '../Home/index';


export default class Result extends Component {
  constructor(){
    super();
    this.state = {
    auth:false,
    name: '',
    avatar: '',
    user: '',
    nome: '',
    organization: '',
    location: '',
    repositorys: '',
    followers: '',
    stars: '',
    repo: [],
  };
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
      const { data: login } = await axios.get(`https://api.github.com/users/${username}`)
      .then({auth:true})
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
      this.setState({ linktrue: "/notfound" })
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
        <TopBar name={this.state.name}
          auth={this.state.auth}
          linktrue={this.state.linktrue}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} />
        <div className="row">
          <SidBar>
            <Image>
              <img src={this.state.avatar} alt="imagem do avatar" className="col-12"/>
            </Image>
            <NomeUsuario className="col-12">{this.state.nome}</NomeUsuario>
            <User className="col-12">{this.state.user}</User>
            <Organization className="col-12"><Icons src={organizationicon} /> {this.state.organization}</Organization>
            <Location className="col-12"><Icons src={locationicon} /> {this.state.location}</Location>
            <Stars className="col-12"><Icons src={staricon} />{this.state.stars}</Stars>
            <Repositorys className="col-12"><Icons src={repositoryicon} /> {this.state.repositorys}</Repositorys>
            <Followers className="col-12"><Icons src={followersicon} /> {this.state.followers}</Followers>
          </SidBar>
          <Repository>
            {this.state.repo.map(repos => (
              <BlocoRepo className="col-12">
                <div className="col-12">
                  <RepoName>{repos.name}</RepoName>
                </div>
                <div className="col-12">
                  <RepoDescription>{repos.name} </RepoDescription>
                </div>
                <Stars className="col-12"><Icons src={staricon} /> {repos.stargazers_count}</Stars>
              </BlocoRepo>
              
              ))}
          </Repository>

        </div>

      </div>
    );
  }
}
