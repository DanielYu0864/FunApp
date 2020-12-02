import React, { useState, useEffect, useContext } from 'react';
import Category from './Category';
import Button from './Button';
import FavoriteButton from '../FavoriteButton';
import { Link, useLocation } from 'react-router-dom';
import CategoryPicker from '../Category/CategoryPicker';
import MediaPicker from '../Category/MediaPicker';

function AgePicker() {
  const localtion = useLocation();
  const {user_id} = localtion.state;
  console.log('From Age Piker', user_id);
  return (
    <Category css="age-picker" navbarColor="pink">
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
        <FavoriteButton color='#333'/>
      </Link>
    </Category>
  )
}

export default AgePicker

// export default class AgePicker extends React.Component {

//   constructor(props) {
//     super(props);
//     // this.state = {
//     //   age: this.props.age,
//     //   checkAge: this.props.checkAge
//     // }

//   }


//   render() {

// <<<<<<< HEAD
//     return (
//       <Category css="age-picker" navbarColor="pink">
//         <Link to={{ pathname: '/category', state: { age: '0-3'} }}>
//           <Button color="#ecc94b">Ages 0 - 3</Button>
//         </Link>
//         <Link to={{ pathname: '/media', state: { age: '4-8'} }}>
//           <Button color="#63b3ed">Ages 4 - 8</Button>
//         </Link>
//         <Link to={{ pathname: '/media', state: { age: '9-12'} }}>
//           <Button color="rgb(34, 117, 9)">Ages 9 - 12</Button>
//         </Link>
//         <a href='/favorite'><FavoriteButton/></a>
//       </Category>
//     )
// =======
//     return (
//       <Category css="age-picker" align="top" navbarColor="pink">
//         <Link to={{ pathname: '/category', state: { age: '0-3'} }}>
//           <Button color="#ecc94b">Ages 0 - 3</Button>
//         </Link>
//         <Link to={{ pathname: '/media', state: { age: '4-8'} }}>
//           <Button color="#63b3ed">Ages 4 - 8</Button>
//         </Link>
//         <Link to={{ pathname: '/media', state: { age: '9-12'} }}>
//           <Button color="rgb(34, 117, 9)">Ages 9 - 12</Button>
//         </Link>
//         <FavoriteButton color="#333" link="/favorite"/>
//       </Category>
//     )
// >>>>>>> 8b2bffda1d1c7740779e9d168cadd069128d803b

//   }

// }