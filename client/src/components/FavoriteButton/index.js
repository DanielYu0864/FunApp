import React from 'react'

const FavoriteButton = props => {

  const buttonStyle = {
    backgroundColor: props.color
  }

  return (
    props.color ?
      <a className="favorite-button" style={buttonStyle} href={props.link}>Favorite</a>
      :
      <a className="favorite-button" href={props.link}>Favorite</a>
  )

}

export default FavoriteButton
