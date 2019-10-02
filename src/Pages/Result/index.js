import React, { Component } from 'react';
import TopBar from '../../components/TopBar';
import { SidBar, Image, NomeUsuario, User, Bio, Repository, RepoName, RepoDescription } from './styles';

export default class Result extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <SidBar>
          <Image></Image>
          <NomeUsuario></NomeUsuario>
          <User></User>
          <Bio></Bio>
        </SidBar>
        <Repository>
          <RepoName></RepoName>
          <RepoDescription></RepoDescription>
        </Repository>
      </div>
    );
  }
}
