import React from 'react';
import Category from './Category';
import Button from './Button';

export default class MediaPicker extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Category css="media-picker" align="bottom" navbarColor="red">
        <Button color="#ecc94b">Games</Button>
        <Button color="#63b3ed">Videos</Button>
      </Category>
    )

  }

}