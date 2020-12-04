
import axios from 'axios';

let baseURL = '';

// For Testing on localserver with react
// baseURL = "http://localhost:3001";

export default {
  //* api call for user register
  register: (userInfo) => {
    return axios.post(`${baseURL}/user/register`, userInfo);
  },
  //* api call for user login
  login: (userInfo) => {
    return axios.post(`${baseURL}/user/login`, userInfo);
  },
  //* api call for save the favorite item to the favorite list
  save: (gameInfo, user_id) => {
    return axios.post(`${baseURL}/api/favorite/save/${user_id}`, gameInfo);
  },
  //* api call for get all the favorite items from the favorite list
  favorite: (user_id) => {
    return axios.get(`${baseURL}/api/favorite/get/${user_id}`);
  },
  //* remove the item in the favorite list
  delete: (favorite_id, user_id) => {
    return axios.delete(`${baseURL}/api/favorite/delete/${user_id}`, { data: { favorite_id: favorite_id } });
  }
}