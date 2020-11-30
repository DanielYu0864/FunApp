import React from 'react';
import Category from './Category';
import Button from './Button';
import FavoriteButton from '../FavoriteButton';
export default class CategoryPicker extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Category css="category-picker" align="top" navbarColor="white">
        <Button color="#ecc94b">Animals</Button>
        <Button color="#63b3ed">Education</Button>
        <Button color="#e53e3e">Food</Button>
        <a href='/favorite'><FavoriteButton/></a>
      </Category>
    )

  }

}