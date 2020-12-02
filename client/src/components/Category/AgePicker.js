import React, { useState, useEffect, useContext } from 'react';
import Category from './Category';
import Button from './Button';
import FavoriteButton from '../FavoriteButton';
import { Link } from 'react-router-dom';
import CategoryPicker from '../Category/CategoryPicker';
import MediaPicker from '../Category/MediaPicker';
// function AgePicker() {
//   const [age, setAge] = useState('');

//   const checkAge = (age) => {
//     setAge(age);
//   }

//   if(age === '0-3') {
//     return <CategoryPicker/>
//   }
//   if(age === '4-8') {
//     return <MediaPicker age='4-8'/>
//   }
//   if(age === '9-12') {
//     return <MediaPicker age='9-12'/>
//   }

//   return (
//       <Category css="age-picker" navbarColor="pink">
//         <Button checkAge={checkAge} age={'0-3'} color="#ecc94b">Ages 0 - 3</Button>
//         {/* <a href='/category'><Button onClick={() => this.state.checkAge('0-3')} color="#ecc94b">Ages 0 - 3</Button></a> */}
//         <Button checkAge={checkAge} age={'4-8'} color="#63b3ed">Ages 4 - 8</Button>
//         <Button checkAge={checkAge} age={'9-12'} color="rgb(34, 117, 9)">Ages 9 - 12</Button>
//         <a href='/favorite'><FavoriteButton/></a>
//       </Category>
//   )
// }

// export default AgePicker

export default class AgePicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      age: this.props.age,
      checkAge: this.props.checkAge
    }
  }


  render() {

    return (
      <Category css="age-picker" align="top" navbarColor="pink">
        <Link to={{ pathname: '/category', state: { age: '0-3'} }}>
          <Button color="#ecc94b">Ages 0 - 3</Button>
        </Link>
        <Link to={{ pathname: '/media', state: { age: '4-8'} }}>
          <Button color="#63b3ed">Ages 4 - 8</Button>
        </Link>
        <Link to={{ pathname: '/media', state: { age: '9-12'} }}>
          <Button color="rgb(34, 117, 9)">Ages 9 - 12</Button>
        </Link>
        <FavoriteButton color="#333" link="/favorite"/>
      </Category>
    )

  }

}