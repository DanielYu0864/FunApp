import React, { useState } from 'react';
import Category from './Category';
import Button from './Button';
import {useLocation, Link} from 'react-router-dom';
import FavoriteButton from '../FavoriteButton';

function CategoryPicker(props) {
  const location = useLocation();
  const {user_id} = location.state ?? 5;
  console.log(user_id, '-> From category');
  return (
    <Category css="category-picker" align="top" navbarColor="white">
      <Link to={{ pathname:'/categorypage', state:{ user_id: user_id, type: 'animals' } }}>
        <Button color="#ecc94b">Fun</Button>
      </Link>
        <Link to={{ pathname:'/categorypage', state:{ user_id: user_id, type: 'education' } }}>
      <Button color="#63b3ed">Education</Button>
      </Link>
      <Link to={{ pathname:'/categorypage', state:{ user_id: user_id, type: 'foods' } }}>
        <Button color="#e53e3e">Music</Button>
      </Link>
      <Link to={{ pathname:'/favorite', state:{ user_id: user_id } }}>
        <FavoriteButton color="#333"/>
      </Link>
      <Link to={{ pathname:'/age', state:{ user_id: user_id } }}>
        <Button>Back</Button>
      </Link>

    </Category>
  )
}

export default CategoryPicker
