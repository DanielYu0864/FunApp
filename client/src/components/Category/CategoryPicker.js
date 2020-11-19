import React from 'react';
import Category from './Category';
import Button from './Button';

export default class CategoryPicker extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Category css="category-picker" align="top">
        <Button color="#f687b3;">Animals</Button>
        <Button color="#63b3ed">Education</Button>
        <Button color="#e53e3e">Food</Button>
      </Category>
    )

  }

}