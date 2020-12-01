import React from 'react';
import Category from './Category';
import Button from './Button';
import FavoriteButton from '../FavoriteButton';
import { useLocation, Link } from 'react-router-dom';

function MediaPicker() {
  const location = useLocation();
  const {age, user_id} = location.state;
  console.log(' From Media piker ',age, user_id)
  return (
    <Category css="media-picker" align="bottom" navbarColor="red">
      <Link to={{ pathname: '/game', state: { age: age, user_id: user_id } }}>
        <Button color="#ecc94b">Games</Button>
      </Link>
      <Link to={{ pathname: '/video', state: { age: age, user_id: user_id } }}>
        <Button color="#63b3ed">Videos</Button>
      </Link>
      {/* <Button color="#f56565">Books</Button> */}
      <Link to={{ pathname: '/favorite', state: { user_id: user_id } }}>
        <FavoriteButton/>
      </Link>
    </Category>
  )
}

export default MediaPicker;