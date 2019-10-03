import axios from 'axios';
export const state = {
    name: '',
    auth: false,
  };
  
export const isAuthenticated = () => true;

export const searchUser = async () => {

    const nick = this.state.name;

    try {
      const { data: login } = await axios.get(`https://api.github.com/users/${nick}`);
      console.log(login)
    }
    catch (error) {
      isAuthenticated = () => false;
    }

  }