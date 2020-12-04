import React from 'react';
import Category from './Category';
import Button from './Button';
import FavoriteButton from '../FavoriteButton';
import { useLocation, Link } from 'react-router-dom';

function MediaPicker() {
  const location = useLocation();
  const {age, user_id} = location.state;
  return (
    //* use useLocation and Link to passed the value to the route
    <Category css="media-picker" align="bottom" navbarColor="red">
      <Link to={{ pathname: '/game', state: { age: age, user_id: user_id } }}>
        <Button color="#ecc94b">Games</Button>
      </Link>
      <Link to={{ pathname: '/video', state: { age: age, user_id: user_id } }}>
        <Button color="#63b3ed">Videos</Button>
      </Link>
      <Link to={{ pathname: '/age', state: { user_id: user_id } }}>
        <button>Back to Age</button>
      </Link>
      <Link to={{ pathname: '/favorite', state: { user_id: user_id } }}>
        <FavoriteButton color="#333"/>
      </Link>
    </Category>
  )
}

export default MediaPicker;