import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  height:100vh;
`
export const Search = styled.div`
  justify-content: center;
  position: absolute;
  top:40%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`
export const SearchInput = styled.input`
  width: 650px;
  height: 50px;
  background-color: #ffffff;
  font-family: Raleway;
  font-weight: 300;
  padding-left:17px;
`
export const SearchButton = styled.a`
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