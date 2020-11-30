import React from 'react';
import Category from './Category';
import Button from './Button';
import FavoriteButton from '../FavoriteButton';
import { useLocation, Link } from 'react-router-dom';

function MediaPicker() {
  const location = useLocation();
  const {age} = location.state;
  // console.log(age)
  return (
    <Category css="media-picker" align="bottom" navbarColor="red">
      <Link to={{ pathname: '/game', state: { age: age} }}>
        <Button color="#ecc94b">Games</Button>
      </Link>
      <Link to={{ pathname: '/video', state: { age: age } }}>
        <Button color="#63b3ed">Videos</Button>
      </Link>
      <Button color="#f56565">Books</Button>
      <a href='/favorite'><FavoriteButton/></a>
    </Category>
  )
}

export default MediaPicker;