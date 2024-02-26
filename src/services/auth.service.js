import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'token/obtain/', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        console.log(response)
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'register/', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();