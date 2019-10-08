import React, { Component } from 'react';
import { SidBar, Image, NomeUsuario, Icons,BlocoRepo, Followers, Stars, User, Repository, RepoName, RepoDescription, Organization, Location, Repositorys, SearchButton, SearchIcon,DivTopBar,SearchInput } from './styles';
import MiniLogo from '../../components/MiniLogo';
import Form from 'react-bootstrap/Form';
import Icon from '../../assets/SearchIcon.png';
import followersicon from '../../assets/followersIcon.png';
import locationicon from '../../assets/location icon.png';
import organizationicon from '../../assets/organization icon.png';
import repositoryicon from '../../assets/repositorie icon.png';
import staricon from '../../assets/star icon.png';

export default class Result extends Component {

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
        <div className="col row">
          <SidBar className="col">
            <Image>
              <img src={this.props.avatar} alt="imagem do avatar" className="col-12"/>
            </Image>
            <NomeUsuario className="col-12">{this.props.nome}</NomeUsuario>
            <User className="col-12">{this.props.user}</User>
            <Organization className="col-12"><Icons src={organizationicon} /> {this.props.organization}</Organization>
            <Location className="col-12"><Icons src={locationicon} /> {this.props.location}</Location>
            <Stars className="col-12"><Icons src={staricon} />{this.props.stars}</Stars>
            <Repositorys className="col-12"><Icons src={repositoryicon} /> {this.props.repositorys}</Repositorys>
            <Followers className="col-12"><Icons src={followersicon} /> {this.props.followers}</Followers>
          </SidBar>
          <Repository className="col">
            {this.props.repo.map(repos => (
              <BlocoRepo className="col-12">
                <div className="col-12">
                  <RepoName>{repos.name}</RepoName>
                </div>
                <div className="col-12">
                  <RepoDescription>{repos.description} </RepoDescription>
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
