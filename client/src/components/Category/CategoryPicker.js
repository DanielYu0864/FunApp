import React, { useState } from 'react';
import Category from './Category';
import Button from './Button';
import {useLocation, Link} from 'react-router-dom';
import ActionButton from '../ActionButton';

function CategoryPicker(props) {
  const location = useLocation();
  const {user_id} = location.state ?? 5;
  return (
    //* use useLocation and Link to passed the value to the route
    <Category css="category-picker" align="top" navbarColor="white">
      <Link to={{ pathname:'/categorypage', state:{ user_id: user_id, type: 'animals' } }}>
        <Button color="#ecc94b">Animals</Button>
      </Link>
        <Link to={{ pathname:'/categorypage', state:{ user_id: user_id, type: 'education' } }}>
      <Button color="#63b3ed">Education</Button>
      </Link>
      <Link to={{ pathname:'/categorypage', state:{ user_id: user_id, type: 'music' } }}>
        <Button color="#e53e3e">Music</Button>
      </Link>
      <Link to={{ pathname:'/categorypage', state:{ user_id: user_id, type: 'fun' } }}>
        <Button color="#805ad5">Fun</Button>
      </Link>

      <div className="actions">
        <ActionButton link={{ pathname:'/favorite', state:{ user_id: user_id } }}/>
        <ActionButton link={{ pathname:'/age', state:{ user_id: user_id } }} color="#333">Back To Age</ActionButton>
      </div>

    </Category>
  )
}

export default CategoryPicker
