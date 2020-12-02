import React, { useState } from 'react';
import Category from './Category';
import Button from './Button';
import {useLocation} from 'react-router-dom';
import FavoriteButton from '../FavoriteButton';

function CategoryPicker(props) {
  const location = useLocation();
  const {age} = location.state ?? 5;
  return (
    <Category css="category-picker" align="top" navbarColor="white">
      <Button color="#ecc94b">Animals</Button>
      <Button color="#63b3ed">Education</Button>
      <Button color="#e53e3e">Food</Button>
      <FavoriteButton color="#333" link="/favorite"/>
    </Category>
  )
}

export default CategoryPicker

// export default class CategoryPicker extends React.Component {

//   constructor(props) {
//     super(props);
//     console.log(this.props)
//   }

//   render() {

//     return (
//       <Category css="category-picker" align="top" navbarColor="white">
//         <Button color="#ecc94b">Animals</Button>
//         <Button color="#63b3ed">Education</Button>
//         <Button color="#e53e3e">Food</Button>
//         <a href='/favorite'><FavoriteButton/></a>
//       </Category>
//     )

//   }

// }