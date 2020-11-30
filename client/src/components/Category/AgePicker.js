import React from 'react';
import Category from './Category';
import Button from './Button';

export default class AgePicker extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Category css="age-picker" navbarColor="pink">
        <a href='/category'><Button color="#63b3ed">Ages 0 - 3</Button></a>
        <a href='/media'><Button color="#ecc94b">Ages 4 - 8</Button></a>
        <a href='/media'><Button color="#3da81c">Ages 9 - 12</Button></a>
      </Category>
    )

  }

}