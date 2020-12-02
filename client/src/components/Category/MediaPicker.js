import React from 'react';
import Category from './Category';
import Button from './Button';
import FavoriteButton from '../FavoriteButton';
import { useLocation, Link } from 'react-router-dom';

function MediaPicker() {
  const location = useLocation();
  const {age} = location.state ?? 5;
  // console.log(age)
  return (
    <Category css="media-picker" align="bottom" navbarColor="red">
      <Link to={{ pathname: '/game', state: { age: age} }}>
        <Button color="#ecc94b">Games</Button>
      </Link>
      <Link to={{ pathname: '/video', state: { age: age } }}>
        <Button color="#63b3ed">Videos</Button>
      </Link>
      <FavoriteButton color="#333" link="/favorite"/>
    </Category>
  )
}

export default MediaPicker;