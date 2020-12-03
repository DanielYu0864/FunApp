
import axios from 'axios';

export default {
  //* api call for user register
  register: (userInfo) => {
    return axios.post('/user/register', userInfo);
  },
  //* api call for user login
  login: (userInfo) => {
    return axios.post('/user/login', userInfo);
  },
  //* api call for save the favorite item to the favorite list
  save: (gameInfo, user_id) => {
    return axios.post(`/api/favorite/save/${user_id}`, gameInfo);
  },
  //* api call for get all the favorite items from the favorite list
  favorite: (user_id) => {
    return axios.get(`/api/favorite/get/${user_id}`);
  },
  //* remove the item in the favorite list
  delete: (favorite_id, user_id) => {
    return axios.delete(`/api/favorite/delete/${user_id}`, { data: { favorite_id: favorite_id } });
  }
}