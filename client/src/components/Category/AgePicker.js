import React from 'react';
import Category from './Category';
import Button from './Button';

export default class AgePicker extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Category css="age-picker">
        <Button color="#ecc94b">Ages 0 - 3</Button>
        <Button color="#63b3ed">Ages 4 - 8</Button>
        <Button color="#f56565">Ages 9 - 12</Button>
      </Category>
    )

  }

}