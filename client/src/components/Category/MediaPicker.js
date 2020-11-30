import React from 'react';
import Category from './Category';
import Button from './Button';
import FavoriteButton from '../FavoriteButton';
export default class MediaPicker extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Category css="media-picker" align="bottom" navbarColor="red">
        <a href='/game'><Button color="#ecc94b">Games</Button></a>
        <Button color="#63b3ed">Videos</Button>
        <Button color="#f56565">Books</Button>
        <a href='/favorite'><FavoriteButton/></a>
      </Category>
    )

  }

}