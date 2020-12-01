
import axios from 'axios';

export default {
  register: (userInfo) => {
    return axios.post('/user/register', userInfo);
  },
  login: (userInfo) => {
    return axios.post('/user/login', userInfo);
  },
  save: (gameInfo, _id) => {
    return axios.post(`/api/favorite/save/${_id}`, gameInfo);
  }
}