import React from 'react';
import Category from './Category';
import Button from './Button';
import ActionButton from '../ActionButton';
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

      <div className="actions">
        <ActionButton color="#48cb1f" link={{ pathname: '/favorite', state: { user_id: user_id } }} />
        <ActionButton link={{ pathname: '/age', state: { user_id: user_id } }} color="#333">Back To Age</ActionButton>
      </div>

    </Category>
  )
}

export default MediaPicker;