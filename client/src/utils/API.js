
import axios from 'axios';

export default {
  register: (userInfo) => {
    return axios.post('/user/register', userInfo);
  },
  login: (userInfo) => {
    return axios.post('/user/login', userInfo);
  },
  save: (gameInfo, user_id) => {
    return axios.post(`/api/favorite/save/${user_id}`, gameInfo);
  },
  favorite: (user_id) => {
    return axios.get(`/api/favorite/get/${user_id}`);
  }
}