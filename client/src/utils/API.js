const axios = require('axios');

export default {
  register: (info) => {
    return axios.post('/user/register', info);
  },
  login: (info) => {
    return axios.post('/user/login', info);
  }
}