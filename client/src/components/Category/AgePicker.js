import React, { useState, useEffect, useContext } from 'react';
import Category from './Category';
import Button from './Button';
import FavoriteButton from '../FavoriteButton';
import { Link, useLocation } from 'react-router-dom';

function AgePicker() {
  //* use Link and use location to passed value to the route
  const localtion = useLocation();
  const {user_id} = localtion.state;
  return (
    <Category css="age-picker" align="top" navbarColor="pink">
      <Link to={{ pathname: '/category', state: { age: '0-3', user_id: user_id} }}>
        <Button color="#ecc94b">Ages 0 - 3</Button>
      </Link>
      <Link to={{ pathname: '/media', state: { age: '4-8', user_id: user_id} }}>
        <Button color="#63b3ed">Ages 4 - 8</Button>
      </Link>
      <Link to={{ pathname: '/media', state: { age: '9-12', user_id: user_id} }}>
        <Button color="rgb(34, 117, 9)">Ages 9 - 12</Button>
      </Link>
      <Link to={{ pathname: '/favorite', state: { user_id: user_id } }}>
        <FavoriteButton color="#333"/>
      </Link>
    </Category>
  )
}

export default AgePicker